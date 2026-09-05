<div align="center">

# 🐙 Oct の 小破站

> *Welcome come to my Black Parade*

个人博客，由 [Astro](https://astro.build) + [Fuwari](https://github.com/saicaca/fuwari) 驱动，
部署在 GitHub Pages，**🔗 https://oct0pu5.cn**。

**[English](../README.md)** | 简体中文

</div>

## 📖 简介

这是 Oct0pu5(笔名 **刈夫**，也可以叫 Oct 或章鱼)的个人博客，记录随笔、诗歌与技术笔记。
站点含文章、独立页面、友链,以及内置小游戏等。

## 🚀 本地开发

- 要求:Node.js 22+、pnpm 9.14.4+
- 安装:`pnpm install`
- 开发服务器(默认 http://localhost:4321):`pnpm dev`
- 构建到 `dist/`:`pnpm build`
- 预览构建产物:`pnpm preview`
- 类型检查:`pnpm check`、`pnpm type-check`
- 新建一篇文章:`pnpm run new-post -- my-new-post`

## 🌍 部署

已配置 GitHub Actions:向 `main` 推送(或提交 PR)时自动构建;`main` 收到 push 时构建产物
`dist/` 自动部署到 `gh-pages` 分支,由 GitHub Pages 通过 `public/CNAME` 用自定义域名 **oct0pu5.cn** 提供服务。
本地 `pnpm build` 后也可将 `dist/` 手动发布到任意静态托管平台。

## 📁 项目结构

```text
src/
├── components/          # 页面组件(Navbar、Search、侧边栏 widgets 等)
├── config.ts            # 站点核心配置:标题/导航/头像/社交/评论/音乐
├── content/
│   ├── posts/           # 博客文章(Markdown)
│   ├── spec/            # 独立页面内容(如 about.md)
│   └── friends/         # 友链数据
├── layouts/             # 布局组件
├── pages/               # 路由 / 页面文件
├── plugins/             # Markdown 自定义插件(GitHub 卡片、提示块等)
├── styles/              # 全局样式
└── utils/               # 工具函数
public/                  # 静态资源
├── CNAME                # 自定义域名
└── games/               # 静态小游戏资源
.github/workflows/       # GitHub Actions(构建部署、Dependabot 自动合并)
```

## ✍️ 写作

```bash
pnpm run new-post -- hello-world
```

脚本会在 `src/content/posts/` 下创建 `hello-world.md` 并生成文章模板。文章 frontmatter 支持字段:
`title`、`published`(必填)，`updated`、`description`、`image`、`category`、`draft`、`pinned`、`lang`(可选)。

Markdown 内可用的扩展语法:

```markdown
::github{repo="Octopus058/Octopus058.github.io"}
```

```markdown
:::tip[提示标题]
这是一条提示内容。
:::
```

也支持 GitHub 风格 admonition:

```markdown
> [!NOTE]
> 这是一条 note。
```

## 📮 联系我

- Bilibili:Oct0pu5
- QQ / QQ 群:2379401911 / 697702743
- 邮箱:2379401911@qq.com
- GitHub:[Octopus058](https://github.com/Octopus058)

## 📜 许可证

- 本站内容采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)(见 [LICENSE](../LICENSE))。
- 主题 [Fuwari](https://github.com/saicaca/fuwari) 基于 MIT License,感谢原作者 [saicaca](https://github.com/saicaca)。
