# FG Post Graduate College for Women — Interface Website

Single‑page, responsive website for F.G Post Graduate College for Women (Wah Cantt), with modern UI, program cards, subjects modal, admission form, contact, and University of the Punjab affiliation details.

## Features
- Hero section + fixed Bootstrap navbar
- About + College Overview (image + details)
- Our Programs (BS IT, BS CS, BS Mathematics, BS English, BS Applied Psychology, BS Botany, BS Islamic Studies)
- Program cards: image overlay badge “Affiliated with Punjab University Lahore”, unique theme‑based gradients
- Subjects modal: per‑subject description
- Admission form: inline show + success message
- Contact grid + Expanded footer with quick links/social
- University of the Punjab (PU) section: image + highlights + gallery link

## Tech
- HTML5, CSS3, Bootstrap 5, Font Awesome
- Vanilla JavaScript for dynamic cards, modal, form behavior

## Structure
- `college.html` — main page
- `styles.css` — site styles
- `script.js` — programs data, rendering, interactions
- `images/` — logo and imagery (including `punjab uni.jpeg`)

## Run Locally
- Simply open `college.html` in your browser.

## Customize
- Programs: edit the `courses` array in `script.js`
- Images: place files in `images/` and update `image:` paths
- Colors: adjust CSS variables in `styles.css` or card `gradient` values in `script.js`

## Deploy (GitHub Pages)
1. Push this repository to GitHub `main` branch
2. Repo Settings → Pages → Source: `Deploy from a branch` → Branch: `main` → `/root`
3. Wait for build; your site will be available at the Pages URL

## Affiliation
This project displays affiliation badges and information for the University of the Punjab, Lahore, consistent with college program affiliation.

## License
This repository is intended for educational and institutional showcase usage.
