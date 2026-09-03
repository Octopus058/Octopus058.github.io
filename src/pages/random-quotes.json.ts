import type { APIRoute } from "astro";
import { buildQuotePool } from "../utils/poem-quotes";

// 侧栏“拾句”卡的共享诗句池：构建时输出为静态 random-quotes.json，
// 页面只引路径、不把整池内联进每个 HTML。
export const GET: APIRoute = async () => {
	const pool = await buildQuotePool();
	return new Response(JSON.stringify(pool), {
		headers: { "content-type": "application/json; charset=utf-8" },
	});
};
