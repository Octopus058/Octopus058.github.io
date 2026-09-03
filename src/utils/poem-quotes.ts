import { getCollection } from "astro:content";

/**
 * 从全站诗文中抽取“可当一句”的短行，供侧栏“拾句”卡片随机展示。
 * 诗帖正文是 HTML，每行以 <br> 结尾、<h1> 里是日期块；这里按 <br> 切分、
 * 去掉标签与实体、过滤掉日期块/单字标题/过长注释，剩下的就是可展示的诗句。
 */
export interface PoemQuote {
	text: string;
	title: string;
	slug: string;
	published: string; // 如 "2016.8.4"
}

function decodeEntities(s: string): string {
	return s
		.replace(/&ensp;|&emsp;|&nbsp;/g, " ")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&amp;/g, "&")
		.replace(/&#(\d+);/g, (_m, n) =>
			Number(n) <= 0x10ffff ? String.fromCodePoint(Number(n)) : " ",
		)
		.replace(/&#x([0-9a-f]+);/gi, (_m, h) => String.fromCodePoint(parseInt(h, 16)));
}

function cleanLine(seg: string): string {
	let t = seg.replace(/<[^>]+>/g, " "); // 去掉 HTML 标签
	t = decodeEntities(t);
	t = t.replace(/[*_`~]/g, " "); // 去掉残留的 markdown 强调符
	t = t.replace(/\s+/g, " ").trim();
	return t;
}

function isGoodLine(t: string): boolean {
	if (!t) return false;
	if (/[0-9]/.test(t)) return false; // 跳过含数字的行（多为日期块）
	const cjk = (t.match(/[㐀-䶿一-鿿]/g) || []).length;
	if (cjk < 2) return false;
	const latin = (t.match(/[A-Za-z0-9]/g) || []).length;
	const len = cjk + latin;
	return len >= 4 && len <= 22; // 太短多半是标题/单字，太长多为段末注释
}

export async function buildQuotePool(): Promise<PoemQuote[]> {
	const all = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const seen = new Set<string>();
	const pool: PoemQuote[] = [];
	for (const p of all) {
		const body = p.body ?? "";
		for (const seg of body.split(/<br\s*\/?>/i)) {
			const text = cleanLine(seg);
			if (!isGoodLine(text)) continue;
			if (seen.has(text)) continue;
			seen.add(text);
			const d = p.data.published;
			pool.push({
				text,
				title: p.data.title,
				slug: p.slug,
				published: `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`,
			});
		}
	}
	return pool;
}
