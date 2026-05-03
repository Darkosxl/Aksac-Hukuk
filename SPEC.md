# Aksaç Hukuk Bilingual Website Implementation Spec

This project implements a bilingual, Hansu-style static website for Aksaç Hukuk & Arabuluculuk. The layout, section rhythm, hero treatment, service carousel, publications cards, footer density, language switcher, and cookie notice are inspired by `https://en.hansu.av.tr/`; the brand, palette, copy, practice areas, team, contact data, and image assets come from `https://aksac.av.tr/`.

## Brand And Content

- Primary language: Turkish. English routes use faithful working translations that should be reviewed by a legal translator before production.
- Brand colors: Aksaç gold `#a87408`, bronze `#b05800`, charcoal `#343434`, ink `#182135`, soft off-white `#f8f7f5`.
- Public firm details:
  - Phone: `+90 (216) 478 1099 Pbx`
  - Fax: `+90 (216) 478 1484`
  - Email: `hukuk@aksac.av.tr`
  - Footer email: `aksac@aksac.av.tr`
  - Address: `Şemsettin Günaltay Caddesi, Konyalılar Apt. No:244/5 Sahrayıcedid / Erenköy, Kadıköy - İstanbul / TR`
- Practice areas: Ticaret Hukuku, İş Hukuku, Gayrimenkul Hukuku, Bankacılık Hukuku, Uluslararası Hukuk, Aile Hukuku, Ticari Ceza Hukuku, Borçlar Hukuku, Alacakların Tahsili.
- Team: Av.Arb. Aykut Tolga AKSAÇ, Av. Avşar Yalçın ALTUN, Av. Faruk YETGİN, Yön.Asist. Dilek TOSUN, Hukuk Katibi Faruk MEYVACI.

## Technical Shape

- Astro static site with generated routes under `/tr/` and `/en/`.
- Root `/` redirects to `/tr/`.
- Shared data lives in `src/data/site.ts`; generated pages use this file for both languages.
- Local public assets are stored in `public/assets/aksac/` after download from Aksaç’s public site.
- Contact form validates required fields and opens a `mailto:` draft; it does not post to a server.

## QA Checklist

- Run `npm run build`.
- Check `/tr/`, `/en/`, all practice pages, all team pages, publications, contact, and legal placeholder pages.
- Test mobile nav, dropdown menus, language switcher, search overlay, hero carousel controls, publication filters, cookie banner, and contact form.
- Confirm all images have alt text and pages remain readable at 375px, 768px, 1440px, and 2048px widths.
