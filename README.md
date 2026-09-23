# Agami Online — Website

A lightweight, GitHub Pages-ready business website for Agami Online.

## Files

- `index.html` — website structure and content
- `style.css` — visual design
- `script.js` — editable contact and social links
- `assets/Agami.png` — supplied Agami Online logo
- `.nojekyll` — keeps GitHub Pages from attempting a Jekyll build

## Before publishing

Open `script.js` and replace:

- `phoneDisplay`
- `phoneLink`
- `whatsappNumber`
- `facebook`
- `instagram`

The website will then use your real WhatsApp, phone, Facebook and Instagram details.

## GitHub Pages

1. Create a GitHub repository.
2. Upload all files and the `assets` folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. Wait for GitHub Pages to publish the site.

For a user site, the repository can be named `<your-github-username>.github.io`.
For a normal project repository, GitHub Pages will use a URL similar to:
`https://<your-github-username>.github.io/<repository-name>/`

## Custom domain

GitHub Pages supports custom domains. Configure the domain in:
**Repository → Settings → Pages → Custom domain**

Then configure the required DNS records at your domain provider.

Official documentation:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
