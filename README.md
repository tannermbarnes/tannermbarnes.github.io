# tannermbarnes.com

Personal academic website. Plain static HTML/CSS (no build step), modeled on the
layout of the Wolfe Lab site (wolfelab.science). Hosted free on GitHub Pages.

## Pages
- `index.html` home (hero, featured paper, four research themes, about teaser)
- `research.html`, `publications.html`, `cv.html`, `resources.html`, `about.html`, `404.html`
- `assets/site.css` all styling (colors are CSS variables at the top)
- `assets/images/` photos (resized, metadata stripped)

The header and footer are repeated in every page; if you change a nav link,
change it in all seven files.

## Preview locally
    cd ~/robin/website && python3 -m http.server 8000
then open http://localhost:8000

## Publish (GitHub Pages)
1. Push this folder to a public repo named `tannermbarnes.github.io`.
2. Repo Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Site goes live at https://tannermbarnes.github.io (the existing
   `tannermbarnes.github.io/climate-tool/` keeps working).

## Point tannermbarnes.com here (when ready)
1. Settings > Pages > Custom domain: `www.tannermbarnes.com` (this creates a `CNAME` file).
2. At the domain registrar (currently pointed at Google Sites), replace the DNS records:
   - `CNAME` record: `www` -> `tannermbarnes.github.io`
   - `A` records for the bare domain `@`: 185.199.108.153, 185.199.109.153,
     185.199.110.153, 185.199.111.153
3. Wait for DNS, then tick "Enforce HTTPS" in Settings > Pages.
4. Unpublish the Google Site's custom-domain mapping.
