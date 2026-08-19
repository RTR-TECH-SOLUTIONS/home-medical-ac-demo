export const site = {
  name: 'Home Medical AC',
  tagline: 'Servicii medicale la domiciliu',
  phone: '0726 390 461',
  phoneHref: 'tel:+40726390461',
  /** Format E.164, pentru datele structurate. */
  phoneE164: '+40726390461',
  email: 'constantinadinamihaela@gmail.com',
  facebook: 'https://www.facebook.com/p/HOME-Medical-AC-61563381780291/',
  area: 'Constanța și zonele limitrofe',
  city: 'Constanța',
  county: 'Constanța',
  /** Program preluat din pliantul oficial trimis de client (19.08.2026). */
  schedule: 'Luni - duminică, 8:00 - 22:30',
  opens: '08:00',
  closes: '22:30',
  /** Dispeceratul de îngrijiri la domiciliu, de pe pliantul clientului. Nu se primesc pacienți aici. */
  dispatchAddress: 'Bd. I. C. Brătianu nr. 82, bloc SR 10, sc. B, ap. 27, parter, Constanța',
  street: 'Bd. I. C. Brătianu nr. 82, bloc SR 10, sc. B, ap. 27, parter',
  postalCode: '900263',
  /** Coordonatele dispeceratului (geocodate din adresa de pe pliant). */
  geo: { lat: 44.17194, lng: 28.61533 },
  /**
   * TODO(legal): denumirea completă, CUI-ul și numărul de la Registrul Comerțului se preiau
   * de la clientă și se completează aici. Apar în paginile legale, nu le inventa.
   */
  legalName: 'HOME MEDICAL AC S.R.L.',
  cui: '',
  regCom: '',
};

/**
 * Construiește o cale internă ținând cont de `base` din astro.config.
 * Necesar pentru preview-ul de pe GitHub Pages, care servește site-ul dintr-un subfolder.
 * Pe hosting propriu (base "/") întoarce calea nemodificată.
 */
export function url(path: string) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}/${path}`.replace(/\/{2,}/g, '/');
}

/** Link WhatsApp cu mesaj precompletat. */
export function whatsapp(text = 'Bună ziua! Aș dori să fac o programare.') {
  return `https://wa.me/40726390461?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: '/servicii', label: 'Servicii' },
  { href: '/decontare-cas', label: 'Decontare CAS' },
  { href: '/programare', label: 'Programare' },
  { href: '/zona-acoperita', label: 'Zona acoperită' },
  { href: '/contact', label: 'Contact' },
];

/** Paginile legale, doar în footer. */
export const legal = [
  { href: '/politica-de-confidentialitate', label: 'Confidențialitate' },
  { href: '/termeni-si-conditii', label: 'Termeni și condiții' },
  { href: '/politica-de-cookies', label: 'Cookies' },
];

/** Localitățile deservite, grupate pe zone. */
export const areaGroups = [
  {
    title: 'Municipiul Constanța',
    note: 'Toate cartierele, inclusiv zonele periferice.',
    places: [
      'Centru',
      'Tomis Nord',
      'Faleză Nord',
      'Km 4-5',
      'Coiciu',
      'Inel II',
      'Palazu Mare',
      'Mamaia',
    ],
  },
  {
    title: 'Zona metropolitană',
    note: 'Deplasare zilnică, în aceleași condiții ca în municipiu.',
    places: [
      'Ovidiu',
      'Valu lui Traian',
      'Cumpăna',
      'Agigea',
      'Lazu',
      'Lumina',
      'Mihail Kogălniceanu',
      'Poarta Albă',
      'Murfatlar',
    ],
  },
  {
    title: 'Litoral nord și sud',
    note: 'Programăm în funcție de ruta echipei din ziua respectivă.',
    places: ['Năvodari', 'Corbu', 'Techirghiol', 'Eforie Nord', 'Eforie Sud', 'Tuzla', 'Costinești', 'Mangalia'],
  },
];

/** Listă plată, pentru bara de localități de pe homepage. */
export const areasFlat = areaGroups.flatMap((group) => group.places);
