# Home Medical AC — demo de prezentare

Site demo pentru Home Medical AC, servicii medicale la domiciliu, Constanța.
Stack: Astro 5 + Tailwind 4, static. Rulare: `npm install && npx astro dev --background` → http://localhost:4321

## Link de trimis clientei

**https://rtr-tech-solutions.github.io/home-medical-ac-demo/**

Găzduit pe GitHub Pages, din repo-ul `RTR-TECH-SOLUTIONS/home-medical-ac-demo`.
Orice `git push` pe `main` reconstruiește și republică automat site-ul
(`.github/workflows/deploy.yml`, Node 24 — Astro 5 cere minim 22.12).

Preview-ul are `noindex, nofollow` în `<head>` și `Disallow: /` în `robots.txt`,
ca să nu ajungă în Google și să nu fie confundat cu site-ul oficial al clientei.
**Ambele se scot la lansarea proiectului real.**

### Mutarea pe hosting propriu (Hostinger)

GitHub Pages servește site-ul dintr-un subfolder, de aceea `base: '/home-medical-ac-demo'`
în `astro.config.mjs`. Pe domeniul clientei, unde site-ul stă în rădăcină, se șterge linia
`base` (și `site` se schimbă în domeniul real). Nimic altceva: toate căile interne trec prin
helper-ul `url()` din `src/data/site.ts`, care se adaptează singur.

## Structura site-ului

Homepage-ul conține toate secțiunile, iar fiecare item din meniu are și pagina lui dedicată,
cu conținut extins (nu o copie a secțiunii de pe homepage).

| Rută | Pagină | Secțiunea corespondentă de pe homepage |
|---|---|---|
| `/` | Homepage | toate |
| `/servicii` | Catalogul complet, câte o secțiune per serviciu (ancore `#slug`) | Servicii |
| `/decontare-cas` | Eligibilitate, acte, pași, perioade, întrebări frecvente | Gratuit prin CAS sau contra cost |
| `/programare` | Ce transmiteți, cum decurge, ce pregătiți, formular | Programarea durează două minute |
| `/zona-acoperita` | Localitățile deservite, grupate pe zone | Unde ne deplasăm |
| `/contact` | Date de contact complete, formular, program | Programați o vizită |

## Arhitectură

- `src/data/site.ts` — brand, date de contact, meniu, localități. **Toate datele clientului se schimbă aici, o singură dată.**
- `src/data/services.ts` — cele 6 servicii: text scurt pentru homepage, text extins, ce cuprinde vizita, când se recomandă. Folosit atât de homepage, cât și de `/servicii` și de footer.
- `src/layouts/Layout.astro` — include `<head>`, header-ul fix, `<main>` și footer-ul. O pagină nouă = doar conținutul ei.
- Componente partajate: `PageHeader.astro` (banda întunecată de sus, obligatorie ca prima componentă a fiecărei pagini interioare), `CtaBand.astro`, `BookingForm.astro`, `Header.astro`, `Footer.astro`.
- Header-ul este transparent peste banda întunecată din capul paginii și devine solid la scroll, pe toate paginile. **De aceea fiecare pagină nouă trebuie să înceapă cu `<PageHeader />` sau cu un hero întunecat**, altfel textul alb al header-ului ar rămâne pe fundal deschis.

## Ce e real

- Date de contact: telefon 0726 390 461, email constantinadinamihaela@gmail.com (de pe pagina lor de Facebook).
- Cifre: 8.100+ urmăritori și 100% recomandări (9 recenzii) — Facebook, august 2026.
- Serviciile: cele 6 din mesajul clientului.
- Paleta: roșul carmin derivat din logo-ul și uniformele lor reale.
- Video hero + toate fotografiile: generate cu Higgsfield în paleta brandului (uniforme roșii), ~25 de credite.

## Ce e mock — marcat cu `TODO(real)` în cod

- **Testimonialele** (`src/components/Testimonials.astro`) — placeholder plauzibil; de înlocuit cu recenziile reale de pe Facebook.
- **WhatsApp** (`src/components/BookingForm.astro`) — formularul deschide wa.me cu mesaj precompletat pe 0726 390 461; de confirmat că numărul are WhatsApp activ.
- **Fotografia echipei** (`src/components/About.astro`) — generată; de înlocuit cu poza reală (broderiile de pe uniforme au text AI vizibil la privire atentă).
- **Localitățile** (`src/data/site.ts`, `areaGroups`) — presupuse din zona de acoperire declarată; de confirmat cu clientul.
- **Informațiile despre decontarea CAS** (`/decontare-cas`) — perioade, plafoane, acte necesare, termene. Sunt informații legislative care se schimbă prin contractul-cadru; **de verificat cu CAS Constanța înainte de publicare**.
- **Programul de lucru** (`/programare`, `/contact`) — de confirmat cu clientul.
- Afirmația „ne ocupăm noi de dosarul CAS" — de confirmat că oferă acest sprijin.

## La proiectul real (după acceptare)

1. Research SEO RO + keyworduri (intent local: „îngrijiri medicale la domiciliu Constanța", „asistent medical la domiciliu Constanța" etc.) — de confirmat lista cu Mario. Structura pe pagini dedicate e deja pregătită pentru asta: un keyword principal per pagină.
2. On-page complet: title/meta/H1 pe keyword, schema `LocalBusiness` + `MedicalBusiness` (NAP, program, geo), sitemap, robots.
3. Pagini separate per serviciu (`/servicii/pansamente-escare` etc.) dacă vrem SEO pe fiecare — `services.ts` e deja structurat pentru generare dinamică, fără rescriere.
4. Pachet legal: banner cookie/GDPR, Termeni & Confidențialitate, Politica de cookies + credit „made by RTR" în footer.
5. Poze reale de la client unde există; restul rămân cele generate.
6. Deploy static pe Hostinger.
