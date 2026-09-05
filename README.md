<div align="center">

# 🐙 Oct の 小破站

> *Welcome come to my Black Parade*

A personal blog, powered by [Astro](https://astro.build) + [Fuwari](https://github.com/saicaca/fuwari),
deployed on GitHub Pages — **🔗 https://oct0pu5.cn**.

**English** | [简体中文](/docs/README.zh-CN.md)

</div>

## About

This is the personal blog of Oct0pu5 (pen name **刈夫**, or just **Oct**), featuring essays, poetry and technical notes.
The site includes posts, standalone pages, friend links, and some built-in mini-games.

## Local Development

- Requirements: Node.js 22+, pnpm 9.14.4+
- Install: `pnpm install`
- Dev server (default http://localhost:4321): `pnpm dev`
- Build to `dist/` (includes Pagefind search index): `pnpm build`
- Preview the production build: `pnpm preview`
- Type-check: `pnpm check`, `pnpm type-check`
- Create a new post: `pnpm run new-post -- my-new-post`

> 💡 Pagefind is not available in dev mode, so the search box will fall back to mock data; run `pnpm build` followed by `pnpm preview` to try the full search.

## Deployment

GitHub Actions is configured: building on every push to `main` (or PR). On a push to `main`, the `dist/` build output is automatically deployed to the `gh-pages` branch and served by GitHub Pages under the custom domain **oct0pu5.cn** via `public/CNAME`.
Alternatively, run `pnpm build` locally and publish `dist/` to any static hosting platform.

## Project Structure

```text
src/
├── components/          # Page components (Navbar, Search, sidebar widgets, etc.)
├── config.ts            # Core site config: title/nav/avatar/social/comments/music
├── content/
│   ├── posts/           # Blog posts (Markdown)
│   ├── spec/            # Standalone pages (e.g. about.md)
│   └── friends/         # Friend-link data
├── layouts/             # Layout components
├── pages/               # Routes / page files
├── plugins/             # Markdown plugins (GitHub card, admonitions, etc.)
├── styles/              # Global styles
└── utils/               # Utility functions
public/                  # Static assets
├── CNAME                # Custom domain
└── games/               # Mini-game resources
.github/workflows/       # GitHub Actions (build & deploy, Dependabot auto-merge)
```

## Writing

```bash
pnpm run new-post -- hello-world
```

The script creates `hello-world.md` under `src/content/posts/` and generates a post template. Frontmatter fields: `title`, `published` (required), plus optional `updated`, `description`, `image`, `category`, `draft`, `pinned`, `lang`.

Extended Markdown syntax available in posts:

```markdown
::github{repo="Octopus058/Octopus058.github.io"}
```

```markdown
:::tip[提示标题]
This is a tip.
:::
```

GitHub-style admonitions are also supported:

```markdown
> [!NOTE]
> This is a note.
```

## Contact Me

- Bilibili:Oct0pu5
- QQ / QQ group:2379401911 / 697702743
- Email:2379401911@qq.com
- GitHub:[Octopus058](https://github.com/Octopus058)

## License

- Site content is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (see [LICENSE](./LICENSE)).
- The [Fuwari](https://github.com/saicaca/fuwari) theme is MIT licensed; thanks to the original author [saicaca](https://github.com/saicaca).