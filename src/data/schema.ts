import { site, areasFlat, url } from './site';

/** Baza absolută a site-ului, luată din `site` din astro.config. */
const origin = (import.meta.env.SITE || 'https://homemedicalac.ro').replace(/\/+$/, '');

/** URL absolut pentru o cale internă (ține cont și de `base`). */
export function abs(path: string) {
  return `${origin}${url(path)}`;
}

export const BUSINESS_ID = `${abs('/')}#business`;

/**
 * Datele firmei, o singură dată pe site. `HomeHealthCareService` este tipul schema.org
 * exact pentru îngrijiri medicale la domiciliu (subtip de LocalBusiness + MedicalBusiness),
 * deci prinde și rezultatele locale, și pe cele medicale.
 */
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeHealthCareService',
  '@id': BUSINESS_ID,
  name: site.name,
  legalName: site.legalName,
  description:
    'Îngrijiri medicale la domiciliu în Constanța și zonele limitrofe: consultații, recoltări de analize, perfuzii și injecții, pansamente și escare, îngrijiri postoperatorii, oncologice și paliative, monitorizarea parametrilor vitali. Servicii decontate de Casa de Asigurări de Sănătate sau contra cost.',
  url: abs('/'),
  telephone: site.phoneE164,
  email: site.email,
  image: abs('/og-home-medical-ac.jpg'),
  logo: abs('/favicon.png'),
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.county,
    postalCode: site.postalCode,
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: [site.city, ...areasFlat.filter((place) => place !== 'Centru')].map((place) => ({
    '@type': 'City',
    name: place,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: site.opens,
      closes: site.closes,
    },
  ],
  currenciesAccepted: 'RON',
  sameAs: [site.facebook],
};

/** Firul Ariadnei, pentru afișarea căii în rezultatele Google. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Acasă', path: '/' }, ...items].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

/** Întrebări frecvente, pentru rezultatele extinse. */
export function faqSchema(entries: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.q,
      acceptedAnswer: { '@type': 'Answer', text: entry.a },
    })),
  };
}

/** Un serviciu medical oferit la domiciliu, legat de firmă. */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: abs(input.path),
    serviceType: input.name,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: site.city },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: site.phoneE164,
      serviceUrl: abs('/programare'),
    },
  };
}
