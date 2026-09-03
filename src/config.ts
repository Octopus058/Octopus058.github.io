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
