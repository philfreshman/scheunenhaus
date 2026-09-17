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

Dependabot opens dependency PRs every Monday, configured in
[`dependabot.yml`](./.github/dependabot.yml).

The config uses the **`bun` ecosystem, not `npm`**. This is the detail that matters: the npm
ecosystem expects `package-lock.json`, so it rewrites `package.json` and leaves `bun.lock`
stale, and merging that breaks the deploy's `bun install --frozen-lockfile`. The `bun`
ecosystem writes both files in the same commit.

- **Target branch:** `main`. GitHub always opens security PRs against the default branch, so
  pointing routine updates anywhere else splits dependency state across two branches.
- **CI** ([`ci.yml`](./.github/workflows/ci.yml)) runs lint, format and a full build on every PR.
  A PR whose lockfile is out of sync fails there and can never auto-merge.
- **Auto-merge** ([`dependabot-auto-merge.yml`](./.github/workflows/dependabot-auto-merge.yml)):
  patch and minor updates merge once CI is green on the exact commit being merged. Majors, and
  anything in the Biome group, wait for a human. Because a merge made with `GITHUB_TOKEN` raises
  no `push` event, the workflow dispatches `deploy.yml` itself afterwards.
- **Security updates** are a repository setting rather than config, and are raised against the
  advisory's `npm_and_yarn` ecosystem, so they arrive without a lockfile update.
  [`lockfile-sync.yml`](./.github/workflows/lockfile-sync.yml) fills `bun.lock` in; that commit
  does not re-trigger CI, so those PRs are merged by hand.

Two dependencies are deliberately held back, both recorded as `ignore` rules with reasons:
TypeScript stays on 6.x because `astro check` needs a programmatic API the native 7.x compiler
does not ship, and the FullCalendar suite stays on `7.0.0-rc.0` because only `core` has a 7.1.0
— the plugins have to move in lockstep.

The `overrides` block in `package.json` pulls five transitive dependencies past advisories
their parent packages have not picked up yet. Drop an entry once the parent ships the fixed
range on its own; `bun audit` should stay at zero either way.

## License

All Rights Reserved © 2026 [Kasia Swiezak & Marius Bell GbR](https://scheunenhausamsee.de/).  
See the [LICENSE](./LICENSE.md) file for more details.

