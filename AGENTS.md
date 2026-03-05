# Repository Guidelines

## Project Structure & Module Organization
This is a lightweight Node.js + Express static site.
- `server.js`: Express entry point; serves `public/` and maps `/images` to `Images/`.
- `public/index.html`: Main page markup.
- `public/css/styles.css`: Global styles.
- `public/js/main.js`: Client-side behavior.
- `Images/`: Visual assets used by the page.
- `DEVELOPMENT_GUIDELINES.txt`: Design and section-specific implementation notes.

Keep new front-end files inside `public/` by type (`css/`, `js/`, media if added).

## Build, Test, and Development Commands
- `npm install`: Install dependencies from `package-lock.json`.
- `npm start`: Run the Express server on `http://localhost:3000`.
- `npm test`: Currently a placeholder that exits with an error; replace when automated tests are introduced.

Example local workflow:
```bash
npm install
npm start
```

## Coding Style & Naming Conventions
- Use 2-space indentation in HTML, CSS, and JavaScript.
- Prefer clear, section-based names in CSS (for example, `.hero-section`, `.disconnect-panel`).
- Use `camelCase` for JavaScript variables/functions and `kebab-case` for CSS classes/file names.
- Keep JavaScript framework-free unless a change is explicitly approved.
- Favor small, focused edits in existing files over broad rewrites.

## Testing Guidelines
No test framework is configured yet.
- For UI changes, manually verify layout and behavior at `localhost:3000` on desktop and mobile widths.
- For server changes, confirm static routes still work: `/`, `/css/styles.css`, `/js/main.js`, and `/images/<file>`.
- If adding tests, use a minimal Node-compatible setup and add a working `npm test` script.

## Commit & Pull Request Guidelines
No Git history is available in this workspace, so follow this convention:
- Commit format: `type(scope): short summary` (for example, `feat(hero): refine mobile spacing`).
- Keep commits atomic and focused on one concern.
- PRs should include: change summary, affected files, manual test steps, and before/after screenshots for visual updates.
- Link any related issue/task IDs in the PR description.

## Security & Configuration Tips
- Do not commit secrets or environment files.
- Validate new static paths in `server.js` to avoid exposing unintended directories.
- Optimize large images before adding them to `Images/` to keep load times reasonable.
