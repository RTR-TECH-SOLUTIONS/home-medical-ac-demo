import imgConsultatie from '../assets/media/svc-consultatie.png';
import imgPaliativ from '../assets/media/hero-armchair.png';
import imgRecoltare from '../assets/media/svc-recoltare.png';
import imgPerfuzie from '../assets/media/svc-perfuzie.png';
import imgPansament from '../assets/media/svc-pansament.png';
import imgMonitorizare from '../assets/media/svc-monitorizare.png';

export interface Service {
  slug: string;
  title: string;
  /** Titlu scurt, pentru liste și meniuri. */
  navTitle: string;
  image: ImageMetadata;
  alt: string;
  /** O propoziție pentru cardurile de pe homepage. */
  short: string;
  /** Paragraf introductiv pe pagina de servicii. */
  intro: string;
  /** Ce cuprinde efectiv vizita. */
  includes: string[];
  /** Când se recomandă. */
  whenTitle: string;
  when: string;
  /** Cele mai puse întrebări la telefon pentru serviciul respectiv. */
  note: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: 'consultatii-medicale',
    title: 'Consultații medicale la domiciliu',
    navTitle: 'Consultații medicale',
    image: imgConsultatie,
    alt: 'Asistentă medicală consultând un pacient vârstnic cu stetoscopul, la domiciliu',
    short:
      'Evaluare completă acasă: anamneză, examen clinic, măsurarea parametrilor vitali și plan de tratament.',
    intro:
      'Venim la domiciliu cu tot ce este necesar pentru o evaluare corectă: discutăm istoricul pacientului, îl examinăm, măsurăm parametrii vitali și stabilim, împreună cu medicul curant, ce este de făcut mai departe. Pentru pacienții care nu se pot deplasa, aceasta este de multe ori diferența dintre un tratament început la timp și o internare evitabilă.',
    includes: [
      'Anamneză și discuție cu pacientul și cu aparținătorii',
      'Examen clinic general',
      'Măsurarea tensiunii, pulsului, temperaturii și saturației de oxigen',
      'Interpretarea analizelor și a scrisorilor medicale existente',
      'Plan de îngrijire scris, pe înțelesul familiei',
      'Legătura cu medicul de familie sau cu medicul specialist',
    ],
    whenTitle: 'Când se recomandă',
    when: 'Pacient imobilizat sau greu deplasabil, stare generală modificată, după externare, sau când familia are nevoie de o evaluare înainte de a decide pașii următori.',
    note: 'Nu înlocuiește urgența medicală. În caz de urgență se sună 112.',
    featured: true,
  },
  {
    slug: 'ingrijiri-postoperatorii-paliative',
    title: 'Îngrijiri postoperatorii, oncologice și paliative',
    navTitle: 'Îngrijiri postoperatorii și paliative',
    image: imgPaliativ,
    alt: 'Asistentă medicală ținând de mână o pacientă vârstnică așezată în fotoliu, acasă',
    short:
      'Preluăm pacientul după externare: plăgi operatorii, sonde și stome, terapia durerii, suport continuu.',
    intro:
      'Perioada de după externare este cea mai grea pentru familie. Preluăm pacientul de acolo de unde l-a lăsat spitalul și continuăm îngrijirea acasă, după indicațiile medicului curant, cu vizite programate și cu explicații clare pentru cei care stau lângă el. În cazul pacienților oncologici și al celor în îngrijire paliativă, prioritatea este confortul: durerea sub control, igiena asigurată, demnitatea păstrată.',
    includes: [
      'Îngrijirea plăgilor operatorii și scoaterea firelor de sutură',
      'Îngrijirea sondelor, a stomelor și a cateterelor',
      'Administrarea tratamentului pentru durere, prescris de medic',
      'Prevenirea și tratarea escarelor la pacientul imobilizat',
      'Mobilizare, poziționare și îngrijirea tegumentelor',
      'Instruirea aparținătorilor pentru îngrijirea de zi cu zi',
    ],
    whenTitle: 'Când se recomandă',
    when: 'Imediat după externarea dintr-o secție de chirurgie, oncologie sau ATI, precum și în cazul pacienților cu boli cronice în stadiu avansat, îngrijiți acasă.',
    note: 'Pacienții oncologici au prioritate la decontarea prin Casa de Asigurări.',
    featured: true,
  },
  {
    slug: 'recoltari-analize',
    title: 'Recoltări de analize la domiciliu',
    navTitle: 'Recoltări de analize',
    image: imgRecoltare,
    alt: 'Recoltare de analize de sânge la domiciliul pacientului',
    short: 'Recoltăm probele la patul pacientului și le predăm laboratorului partener în aceeași zi.',
    intro:
      'Pacientul nu mai are de așteptat la coadă dimineața, pe nemâncate. Venim la ora stabilită, recoltăm probele în condiții sterile și le predăm laboratorului în aceeași zi, cu respectarea lanțului de temperatură. Rezultatele ajung la pacient și, la cerere, la medicul care le-a solicitat.',
    includes: [
      'Recoltare de sânge venos și capilar',
      'Recoltare de urină, urocultură și coprocultură',
      'Exsudat faringian și nazal',
      'Transportul probelor la laboratorul partener, în aceeași zi',
      'Predarea rezultatelor pacientului sau medicului curant',
    ],
    whenTitle: 'Când se recomandă',
    when: 'La orice set de analize recomandat de medic, pentru pacienții care nu se pot deplasa sau care preferă să nu aștepte la punctul de recoltare.',
    note: 'Ne spuneți ce analize v-a recomandat medicul, iar noi vă spunem cum trebuie să se pregătească pacientul.',
  },
  {
    slug: 'tratamente-injectabile-perfuzabile',
    title: 'Tratamente injectabile și perfuzabile',
    navTitle: 'Tratamente injectabile și perfuzabile',
    image: imgPerfuzie,
    alt: 'Asistentă medicală pregătind o perfuzie la patul pacientului, acasă',
    short: 'Administrăm tratamentul prescris de medic, cu supraveghere pe toată durata administrării.',
    intro:
      'Administrăm exclusiv tratamentul prescris de medic, în dozele și la intervalele indicate. Rămânem lângă pacient pe toată durata perfuziei, urmărim cum o tolerează și consemnăm fiecare administrare. La final, materialele folosite sunt colectate și eliminate conform normelor pentru deșeuri medicale.',
    includes: [
      'Injecții intramusculare, subcutanate și intravenoase',
      'Montarea și îngrijirea branulei',
      'Perfuzii cu supraveghere pe toată durata administrării',
      'Administrarea anticoagulantelor și a insulinei, cu instruirea familiei',
      'Consemnarea fiecărei administrări în fișa pacientului',
    ],
    whenTitle: 'Când se recomandă',
    when: 'Scheme de tratament începute în spital și continuate acasă, tratamente de lungă durată, pacienți care nu se pot deplasa zilnic la cabinet.',
    note: 'Este nevoie de rețeta sau de scrisoarea medicală în care apare tratamentul.',
  },
  {
    slug: 'pansamente-escare',
    title: 'Pansamente și tratamentul escarelor',
    navTitle: 'Pansamente și escare',
    image: imgPansament,
    alt: 'Aplicarea unui pansament steril pe antebrațul unui pacient',
    short: 'Toaletarea și pansarea plăgilor, tratamentul escarelor pe stadii, cu materiale sterile.',
    intro:
      'O plagă îngrijită corect acasă se vindecă, una neglijată ajunge la spital. Toaletăm plaga, evaluăm cum evoluează de la o vizită la alta și schimbăm pansamentul cu materiale sterile, potrivite stadiului. La escare lucrăm pe stadii și, la fel de important, arătăm familiei cum se poziționează pacientul ca să nu apară altele.',
    includes: [
      'Toaletarea și pansarea plăgilor acute și cronice',
      'Îngrijirea escarelor, pe stadii, cu pansamente adecvate',
      'Îngrijirea plăgilor diabetice și a ulcerelor varicoase',
      'Scoaterea firelor de sutură și a agrafelor',
      'Evaluarea evoluției de la o vizită la alta',
      'Instruirea familiei pentru prevenirea escarelor',
    ],
    whenTitle: 'Când se recomandă',
    when: 'Plăgi care nu se vindecă, escare la pacientul imobilizat, picior diabetic, după intervenții chirurgicale.',
    note: 'Dacă plaga se adâncește, are secreție sau miros, este nevoie de evaluare cât mai repede.',
  },
  {
    slug: 'monitorizare-parametri',
    title: 'Monitorizarea parametrilor vitali',
    navTitle: 'Monitorizarea parametrilor vitali',
    image: imgMonitorizare,
    alt: 'Măsurarea tensiunii arteriale unei paciente vârstnice, la masa din bucătărie',
    short: 'Tensiune, glicemie, saturație de oxigen. Urmărim evoluția și anunțăm medicul curant.',
    intro:
      'Pentru pacienții cu hipertensiune, diabet sau afecțiuni respiratorii, ce contează nu este o singură măsurătoare, ci evoluția în timp. Măsurăm la intervale stabilite cu medicul, notăm valorile într-o fișă pe care familia o poate arăta la orice control și semnalăm din timp când ceva iese din limitele normale.',
    includes: [
      'Tensiune arterială și puls',
      'Glicemie din sânge capilar',
      'Saturația de oxigen și frecvența respiratorie',
      'Temperatură și greutate',
      'Fișă de monitorizare pe care o puteți arăta medicului',
      'Anunțarea medicului curant la valori în afara limitelor',
    ],
    whenTitle: 'Când se recomandă',
    when: 'Hipertensiune arterială, diabet zaharat, insuficiență cardiacă sau respiratorie, perioade de ajustare a tratamentului.',
    note: 'Putem stabili un program fix de vizite, săptămânal sau de mai multe ori pe săptămână.',
  },
];

export const featuredServices = services.filter((service) => service.featured);
export const otherServices = services.filter((service) => !service.featured);
