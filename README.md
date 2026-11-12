# IceBreakers 🧊

A mobile-friendly facilitator carousel, now using GitHub-managed JSON content. **v0.2**.

## Launch
Enable GitHub Pages in **Settings → Pages → Deploy from a branch → main / root**. The carousel will be available at `https://rstebbens.github.io/IceBreakers/` once GitHub publishes it.

## Edit content
Open `https://rstebbens.github.io/IceBreakers/admin.html` after enabling Pages. The editor loads the public JSON files and lets you add, modify and delete activities or questions locally.

To publish: **Copy JSON → Open GitHub editor → replace the file contents → Commit changes**. GitHub requires a signed-in account with repository write permission. No passwords, tokens or secrets are embedded in the website. The admin URL is **not private**, but viewing it does not grant editing rights. Local changes are **not saved** until committed in GitHub.

The two live data files are `data/icebreakers.json` and `data/questions.json`. The older CSV and `Code.gs` are retained as historical starter material but are **not required** for the GitHub version.

## Features
- Swipeable activities, previous/next and random selection
- Category and duration filters
- Local-browser favourites and copy activity
- Step-by-step facilitation guidance and optional rotating questions
- Draft/published flag for each record

## Security
A public GitHub repository can be read or forked by anyone, but changes to this repository require GitHub write permission. Never put passwords or access tokens into website files. GitHub's commit editor enforces your account permissions. For additional protection, configure branch protection or repository rulesets if supported by your plan.

## Local development
Serve the repository over HTTP, for example `python3 -m http.server 8000`, then visit `http://localhost:8000/`. Opening `index.html` directly as a `file://` URL may prevent JSON loading; in that case, the built-in starter deck appears.
