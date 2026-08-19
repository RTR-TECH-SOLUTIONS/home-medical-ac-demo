# Punere online - homemedicalac.ro

Site static Astro. Nu are nevoie de Node pe server, doar de găzduire clasică (Hostinger shared).

## 1. Build

```bash
npm install
npm run build
```

Rezultatul e în `dist/`. Conține și `.htaccess` (redirect HTTPS + fără www, cache, 404).

## 2. Urcare pe Hostinger

1. În hPanel: **Website → Adaugă website** pentru `homemedicalac.ro` (dacă domeniul e cumpărat
   la alt registrar, pune la el nameserverele Hostinger: `ns1.dns-parking.com`,
   `ns2.dns-parking.com`).
2. **Fișiere → File Manager** și intră în folderul domeniului. Atenție: dacă
   `homemedicalac.ro` e domeniu **suplimentar** pe plan, calea este
   `domains/homemedicalac.ro/public_html`, nu `public_html`-ul din rădăcină (acela aparține
   domeniului principal al planului). Șterge ce găsești acolo (`default.php` etc).
3. Urcă **conținutul** folderului `dist/` (nu folderul în sine). Cel mai simplu: arhivează
   conținutul lui `dist` într-un zip, îl urci și îl dezarhivezi direct în `public_html`.
4. Verifică să existe `public_html/.htaccess`. File Manager ascunde fișierele care încep cu
   punct: activează „Show hidden files" din setări. Dacă lipsește, urcă-l separat.
5. **Securitate → SSL**: instalează certificatul gratuit și activează „Force HTTPS".

Structura finală, în folderul domeniului: `index.html`, `_astro/…`, `servicii/…`, `.htaccess`.

## 3. După ce domeniul răspunde

- **Google Search Console**: adaugă proprietatea de tip *Domeniu* și verific-o cu înregistrarea
  TXT pusă în DNS-ul din hPanel. Apoi trimite sitemap-ul: `https://homemedicalac.ro/sitemap-index.xml`.
- **Google Business Profile**: profilul e cel mai important factor pentru căutările locale
  („îngrijiri la domiciliu Constanța"). Numele, adresa și telefonul trebuie scrise **identic**
  cu cele de pe site (vezi `src/data/site.ts`), altfel Google le tratează ca firme diferite.
- Cere clientei recenzii pe profilul Google, de la pacienți sau aparținători.

## 4. Ce mai trebuie completat înainte de a fi 100% în regulă

- `src/data/site.ts` → `cui` și `regCom`. Apar în paginile legale, care acum le omit. Sunt
  obligatorii pentru identificarea operatorului de date.
- Denumirea exactă a firmei (`legalName`), dacă nu e „HOME MEDICAL AC S.R.L.".

## Modificări ulterioare

Textele sunt în `src/data/` (date de contact, servicii, localități) și în paginile din
`src/pages/`. După orice modificare: `npm run build` și urci din nou conținutul lui `dist`.

Fonturile sunt subsetate local (`src/assets/fonts`). Se regenerează doar dacă schimbi familia
de fonturi - vezi `scripts/build-fonts.py`.
