# Scheunenhaus am See

The official website for [Scheunenhaus am See](https://scheunenhausamsee.de/), a sustainable vacation home for up to 10 people in the Uckermark, Germany.

## Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Linting & Formatting:** [Biome](https://biomejs.dev/)
- **Calendars:** [FullCalendar](https://fullcalendar.io/) (for occupancy display)
- **Styling:** PostCSS & Autoprefixer

## Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `bun install` | Installs dependencies |
| `bun run dev` | Starts local dev server at `localhost:4321` |
| `bun run build` | Build the production site to `./dist/` |
| `bun run preview` | Preview the build locally |
| `bun run check` | Lint and format code with Biome |

## Dependency updates

[Renovate](https://docs.renovatebot.com/) opens dependency PRs weekly, configured in
[`renovate.json`](./renovate.json). Unlike Dependabot it understands Bun, so it updates
`bun.lock` alongside `package.json` — without that the deploy's `bun install --frozen-lockfile`
fails.

- **Target branch:** `main`. GitHub always opens security PRs against the default branch, so
  pointing routine updates anywhere else splits dependency state across two branches.
- **Auto-merge:** patch and minor updates merge themselves once CI passes. Majors, and anything
  touching Biome, wait for a human.
- **CI** ([`ci.yml`](./.github/workflows/ci.yml)) runs lint, format and a full build on every PR.
  A PR whose lockfile is out of sync fails there and can never auto-merge.

## License

All Rights Reserved © 2026 [Kasia Swiezak & Marius Bell GbR](https://scheunenhausamsee.de/).  
See the [LICENSE](./LICENSE.md) file for more details.

