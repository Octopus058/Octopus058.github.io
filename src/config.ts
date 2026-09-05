import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Oct の 小破站",
	subtitle: "Welcome to the Black Parade",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 200, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "https://origin.picgo.net/2026/09/03/bannerc22d9267a86629f9.png",
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Collector", // Credit text to be displayed
			url: "https://www.pixiv.net/artworks/148997860", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// 旧站 Butterfly 的 favicon（外链图）
		{
			src: "https://s2.loli.net/2024/07/21/F4fl6ViKONqhGkL.png",
			sizes: "32x32",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "小游戏",
			children: [
				{
					name: "Strategy Hero",
					url: "/games/strategy-hero/", // Internal links should not include the base path, as it is automatically added
				},
				{
					name: "Strategy Hero 2",
					url: "/games/strategy-hero-2/", // Internal links should not include the base path, as it is automatically added
				},
			],
		},
		{
			name: "友链",
			url: "/links/", // Internal links should not include the base path, as it is automatically added
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://s2.loli.net/2024/03/25/S7kUxpnCiyQwVz3.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Oct0pu5",
	bio: "零丁汪洋无数士 核舟轻酌念小诗",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Octopus058",
		},
		{
			name: "Email",
			icon: "fa6-regular:envelope", // Visit https://icones.js.org/ for icon codes
			url: "mailto:2379401911@qq.com",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/395677753",
		},
		{
			name: "QQ",
			icon: "fa6-brands:qq",
			url: "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2379401911&website=www.oicqzone.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/octopus058/",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-SA 4.0",
	url: "https://creativecommons.org/licenses/by-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

/** 评论区(giscus)配置。启用步骤：
 * 1. 在 GitHub 上把仓库 Octopus058.github.io 的 Discussions 打开(仓库 Settings → General → Discussions)
 * 2. 打开 https://giscus.app ，选中本仓库并授权 giscus App，
 *    从下方生成的代码里抄出 repo / repoId / category / categoryId 四个值
 * 3. 把下面 enable 改为 true 并填入四个值，重新构建
 * 完成后置为 true 才会在文章页底部渲染评论区(按文章 URL 关联 Discussion)。
 */
export const giscusConfig = {
	enable: true, // 置为 true 才在文章页底部渲染评论区
	repo: "Octopus058/Octopus058.github.io",
	repoId: "R_kgDOLXW4OA",
	category: "Announcements", // Discussions 分类名
	categoryId: "DIC_kwDOLXW4OM4DEy8P",
	lang: "zh-CN",
	mapping: "pathname", // 评论按文章 URL 关联，稳定不易乱
	reactionsEnabled: true,
};

/** 右下角全局悬浮音乐播放器(Aplayer)。
 * 歌单来自网易云,网页端不能直接播,需要一个 meting 类的解析接口把歌单换成可直连播放的地址。
 * 播放器在每次页面加载时都会实时重新拉取歌单(无本地/构建期缓存),所以只要下面接口
 * 返回的是新数据,刷新页面就会自动跟随,无需重新构建。
 *
 * ⚠️ 注意: 这些公共代理会按歌单在服务器端缓存一段时间。刚在网易云改完歌单时,它可能
 * 仍返回旧列表,等其缓存刷新(几小时到几天不等)或换用其他/自托管地址即可,页面上无需改动。
 * apis 按顺序依次尝试; 每个地址后面会被拼上 neteaseId。
 * 以后想用自己服务器上的 mp3,把 apis 换成自己接口、neteaseId 对应你自己的标识即可。
 */
export const musicConfig = {
	enable: true, // 置为 false 则完全不加载播放器
	neteaseId: "9352047247", // 网易云歌单 id(playlist?id= 后面的数字)
	apis: [
		// 唯一在用的解析接口。曾加的 api.i-meto.com 会连接后挂起不返回,
		// 会让 fetch 无限等待、播放器起不来,已移除; 将来可在此追加新的可用地址。
		"https://api.injahow.cn/meting/?server=netease&type=playlist&id=",
	],
	order: "random", // 播放顺序: "list" | "random"
};
