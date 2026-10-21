# Nguyễn Đôn Quốc Tuấn - Developer Portfolio

Personal portfolio built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` before publishing.

## Content

- `src/data/personal.ts`: profile, verified public repository links, projects, internships, education, and awards.
- `public/Nguyen_Don_Quoc_Tuan_CV.pdf`: exported two-page Canva CV, including the portfolio link.
- `public/prj*`: existing product screenshots and demo video.

Recent AI projects use text summaries and implementation details until real screenshots or demo videos are supplied. IncidentLens is explicitly described as a prototype. No model accuracy, project impact, or proficiency percentages are claimed without supporting measurements.

## Contact form

Without EmailJS configuration, the contact section provides a direct email link. To enable the form, define these public client-side identifiers in `.env.local` or the deployment environment:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The EmailJS template receives `from_name`, `from_email`, `message`, `to_name`, and `reply_to`. Configure permitted origins in EmailJS. Never put private credentials in `NEXT_PUBLIC_*` variables.

## Preview before deployment

Review desktop/mobile layouts, theme switching, project disclosures, public links, and the downloadable CV before merging. Updating this repository can trigger the host's deployment integration.
