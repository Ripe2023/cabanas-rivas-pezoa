const menuButton = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
menuButton?.addEventListener('click', () => header?.classList.toggle('menu-open'));
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => header?.classList.remove('menu-open')));
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const translations = {
  es: {
    pageTitle: 'Cabañas Rivas Pezoa | Coñaripe', description: 'Cabañas Rivas Pezoa en Coñaripe. Descanso y reserva directa cerca del lago Calafquén y la Ruta Termal.',
    brandSubtitle: 'Cabañas · Coñaripe', navCabins: 'Cabañas', navExperience: 'Experiencia', navLocation: 'Ubicación', consult: 'Consultar', search: 'Buscar', searchAria: 'Abrir buscador',
    searchEyebrow: 'Explora el sitio', searchTitle: '¿Qué estás buscando?', searchPlaceholder: 'Cabañas, ubicación, actividades…', noResults: 'No encontramos resultados. Prueba con otra palabra.',
    promoEyebrow: 'Beneficio exclusivo web', promoTitle: 'Obtén 5% de descuento', promoCopy: 'Reserva directamente por WhatsApp y menciona el código <strong>WEB5</strong> para acceder al descuento.', promoCta: 'Solicitar mi descuento <span>→</span>', promoLater: 'Quizás más tarde', promoTerms: 'Sujeto a disponibilidad. Reserva directa.', instagramEyebrow: 'Síguenos en Instagram', instagramTitle: 'Inspírate para tu próxima estadía', instagramCopy: 'Descubre más fotos, novedades y rincones de Coñaripe en <strong>@cabanasrivaspezoa</strong>.', instagramCta: 'Seguir en Instagram <span>→</span>', instagramLater: 'Ahora no', close: 'Cerrar',
    sections: [['inicio','Inicio','Descanso en Coñaripe, lago Calafquén y Ruta Termal'],['cabanas','Nuestras cabañas','Cabañas acogedoras, familiares y reserva directa'],['experiencia','Experiencia','Naturaleza, playa, termas, cultura y excursiones'],['opiniones','Opiniones','Opiniones reales de huéspedes en Google Maps'],['ubicacion','Ubicación','Cómo llegar a Cabañas Rivas Pezoa en Coñaripe'],['reserva','Reservar','Disponibilidad, fechas y contacto por WhatsApp']]
  },
  en: {
    pageTitle: 'Rivas Pezoa Cabins | Coñaripe', description: 'Rivas Pezoa cabins in Coñaripe. Direct booking near Lake Calafquén and the Thermal Route.',
    brandSubtitle: 'Cabins · Coñaripe', navCabins: 'Cabins', navExperience: 'Experience', navLocation: 'Location', consult: 'Contact us', search: 'Search', searchAria: 'Open search',
    searchEyebrow: 'Explore the site', searchTitle: 'What are you looking for?', searchPlaceholder: 'Cabins, location, activities…', noResults: 'No results found. Try another word.',
    promoEyebrow: 'Exclusive website offer', promoTitle: 'Get 5% off', promoCopy: 'Book directly via WhatsApp and mention code <strong>WEB5</strong> to receive your discount.', promoCta: 'Claim my discount <span>→</span>', promoLater: 'Maybe later', promoTerms: 'Subject to availability. Direct bookings only.', instagramEyebrow: 'Follow us on Instagram', instagramTitle: 'Get inspired for your next stay', instagramCopy: 'Discover more photos, updates and beautiful Coñaripe spots at <strong>@cabanasrivaspezoa</strong>.', instagramCta: 'Follow on Instagram <span>→</span>', instagramLater: 'Not now', close: 'Close',
    sections: [['inicio','Home','A peaceful stay in Coñaripe near Lake Calafquén and the Thermal Route'],['cabanas','Our cabins','Cozy family cabins and direct booking'],['experiencia','Experience','Nature, beaches, hot springs, culture and excursions'],['opiniones','Reviews','Real guest reviews on Google Maps'],['ubicacion','Location','How to reach Rivas Pezoa Cabins in Coñaripe'],['reserva','Book','Availability, dates and WhatsApp contact']]
  }
};

const englishContent = {
  '.hero .eyebrow': 'September · Celebrate in southern Chile', '.hero h1': 'Chilean National Holidays<br><em>in Coñaripe</em>',
  '.hero-copy': 'Celebrate the September holidays with a family getaway to Coñaripe. Enjoy Lake Calafquén and the Thermal Route. Ask about dates and availability.', '.hero-actions .primary': 'Check availability <span>→</span>', '.hero-actions .text-link': 'View cabins',
  '.intro .eyebrow': 'A simple and welcoming stay', '.intro h2': 'Rest and discover the landscapes of southern Chile.', '.intro-copy > p': 'We are in Coñaripe, an ideal base for exploring the town, discovering the Thermal Route to Liquiñe and enjoying the area’s many attractions.',
  '.mini-features span:nth-child(1)': '✓ Peaceful surroundings', '.mini-features span:nth-child(2)': '✓ Parking', '.mini-features span:nth-child(3)': '✓ Direct booking', '.mini-features span:nth-child(4)': '✓ WhatsApp assistance',
  '.cabins .section-head .eyebrow': 'Your stay in Coñaripe', '.cabins .section-head h2': 'Our cabins', '.cabins .section-head > p': 'Welcoming spaces where you can relax and enjoy the area. Ask about availability and details directly on WhatsApp.',
  '.cabin-card:nth-child(1) .card-top span:first-child': 'Rest and privacy', '.cabin-card:nth-child(1) .card-info p': 'For a peaceful getaway', '.cabin-card:nth-child(1) .card-info h3': 'A cozy atmosphere', '.cabin-card:nth-child(1) .card-info div span': 'Comfort throughout your stay', '.cabin-card:nth-child(1) .card-info a': 'Ask now →',
  '.cabin-card:nth-child(2) .card-top span:first-child': 'Family setting', '.cabin-card:nth-child(2) .card-info p': 'A place to share', '.cabin-card:nth-child(2) .card-info h3': 'Family cabins', '.cabin-card:nth-child(2) .card-info div span': 'Comfortable stays in Coñaripe', '.cabin-card:nth-child(2) .card-info a': 'Ask now →',
  '.cabin-card:nth-child(3) .card-top span:first-child': 'Personal assistance', '.cabin-card:nth-child(3) .card-info p': 'Plan your trip with us', '.cabin-card:nth-child(3) .card-info h3': 'Book on WhatsApp', '.cabin-card:nth-child(3) .card-info div span': 'Ask about dates and details', '.cabin-card:nth-child(3) .card-info a': 'Message us →',
  '.experience .eyebrow': 'Experience Coñaripe', '.experience h2': 'Nature, water and culture.', '.experience-copy > p:not(.eyebrow)': 'From Coñaripe you can follow the Thermal Route toward Liquiñe, visit Lake Calafquén and discover the Mapuche Fort in Pucura.',
  '.experience-list span:nth-child(1)': '<b>01</b>Coñaripe Beach and Lake Calafquén', '.experience-list span:nth-child(2)': '<b>02</b>Coñaripe–Liquiñe Thermal Route', '.experience-list span:nth-child(3)': '<b>03</b>Pucura Mapuche Fort', '.experience-list span:nth-child(4)': '<b>04</b>Local food and shops', '.experience-list span:nth-child(5)': '<b>05</b>Trips to Villarrica National Park', '.quote-card p': 'Coñaripe welcomes you all year round.',
  '.gallery .eyebrow': 'Real photos', '.gallery h2': 'Experience your stay', '.gallery .text-link': 'See more on Instagram →', '.reviews-copy .eyebrow': 'Google reviews', '.reviews-copy h2': 'Discover our guests’ experiences.', '.reviews-copy > p': 'Read real reviews of Rivas Pezoa Cabins on Google Maps and share your experience after your stay.', '.google-rating strong': 'Current rating and reviews on Google Maps', '.reviews-button': 'View reviews on Google <span>→</span>', '.location-copy .eyebrow': 'How to get here', '.location-copy > p': 'Panguipulli, Los Ríos Region, Chile. Find us on Google Maps and message us before travelling for directions and arrival tips.', '.location-copy .text-link': 'Open in Google Maps →',
  '.booking .eyebrow': 'Direct booking', '.booking h2': 'A September getaway to Coñaripe', '.booking > p:not(.eyebrow)': 'Tell us your dates and how many guests are travelling.', '.booking small': 'Direct reply · no intermediaries',
  'footer .brand [data-i18n="brandSubtitle"]': 'Cabins · Coñaripe', 'footer > div:nth-child(2) span': 'Panguipulli, Los Ríos Region'
};
const originalContent = new Map();
Object.keys(englishContent).forEach((selector) => { const element = document.querySelector(selector); if (element) originalContent.set(selector, element.innerHTML); });
let currentLanguage = 'es';

function setLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'es';
  const dictionary = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', dictionary.description);
  document.querySelectorAll('[data-i18n]').forEach((element) => { if (dictionary[element.dataset.i18n]) element.innerHTML = dictionary[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => { element.placeholder = dictionary[element.dataset.i18nPlaceholder] || ''; });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => { element.setAttribute('aria-label', dictionary[element.dataset.i18nAria] || ''); });
  document.querySelectorAll('.dialog-close').forEach((button) => button.setAttribute('aria-label', dictionary.close));
  Object.keys(englishContent).forEach((selector) => { const element = document.querySelector(selector); if (element) element.innerHTML = currentLanguage === 'en' ? englishContent[selector] : originalContent.get(selector); });
  document.querySelectorAll('[data-lang]').forEach((button) => { const active = button.dataset.lang === currentLanguage; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  renderSearch(document.querySelector('.search-box input')?.value || '');
}
document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

const searchDialog = document.querySelector('.search-dialog');
const searchInput = document.querySelector('.search-box input');
const searchResults = document.querySelector('.search-results');
function openDialog(dialog) { dialog.hidden = false; document.body.classList.add('dialog-open'); }
function closeDialog(dialog) { dialog.hidden = true; if (!document.querySelector('.search-dialog:not([hidden]), .promo-dialog:not([hidden]), .instagram-dialog:not([hidden]), .lightbox:not([hidden])')) document.body.classList.remove('dialog-open'); }
function normalizeSearch(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
function mapsSearchUrl(query) {
  const value = query.trim().slice(0, 200);
  const broad = /^(atractivos|atracciones|turismo|panoramas|que hacer|attractions|things to do)$/.test(normalizeSearch(value));
  const term = broad ? 'atractivos turísticos Coñaripe' : `${value} ${normalizeSearch(value).includes('conaripe') ? '' : 'Coñaripe'}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(term.trim())}`;
}
const localAttractions = [
  ['Playa de Coñaripe', 'Playa y lago Calafquén', 'playa playas lago lagos beach lake'],
  ['Lago Calafquén', 'Entorno natural de Coñaripe', 'lago lagos playa playas lake beach'],
  ['Ruta Termal Coñaripe Liquiñe', 'Termas de la zona', 'terma termas aguas termales thermal hot springs'],
  ['Fortín Mapuche Pucura', 'Cultura en el sector de Pucura', 'cultura mapuche fortin pucura culture'],
  ['Parque Nacional Villarrica', 'Consultar accesos y condiciones antes de visitar', 'parque parques senderismo excursion excursiones naturaleza trekking hiking nature']
];
function renderSearch(query = '') {
  if (!searchResults) return;
  const words = normalizeSearch(query);
  const broad = /atractiv|atraccion|turismo|panorama|que hacer|attraction|things to do/.test(words);
  const tokens = words.split(/\s+/).filter(Boolean);
  searchResults.replaceChildren();
  function addResult(title, description, url, target) {
    const link = document.createElement('a');
    link.href = url;
    if (target) link.dataset.target = target; else { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    const heading = document.createElement('strong');
    heading.textContent = title;
    const detail = document.createElement('span');
    detail.textContent = description;
    const arrow = document.createElement('b');
    arrow.textContent = target ? '→' : '↗';
    link.append(heading, detail, arrow);
    searchResults.append(link);
  }
  if (words) addResult(
    broad ? 'Ver atractivos de Coñaripe en Google Maps' : `Buscar “${query.trim().slice(0, 200)}” en Coñaripe`,
    currentLanguage === 'en' ? 'Open Google Maps results · Press Enter' : 'Abrir resultados de Google Maps · Pulsa Enter',
    mapsSearchUrl(query)
  );
  for (const [id, title, description] of translations[currentLanguage].sections) {
    const haystack = normalizeSearch(`${title} ${description}`);
    if (!words || tokens.every(token => haystack.includes(token)) || (broad && id === 'experiencia')) addResult(title, description, `#${id}`, id);
  }
  if (words) for (const [title, description, keywords] of localAttractions) {
    const haystack = normalizeSearch(`${title} ${description} ${keywords}`);
    if (broad || tokens.every(token => haystack.includes(token))) addResult(title, `${description} · Google Maps`, mapsSearchUrl(title));
  }
}
document.querySelectorAll('.search-toggle, .siteSearch').forEach(button => button.addEventListener('click', () => { header?.classList.remove('menu-open'); searchInput.value = ''; renderSearch(''); openDialog(searchDialog); window.setTimeout(() => searchInput?.focus(), 50); }));
document.querySelector('.search-close')?.addEventListener('click', () => closeDialog(searchDialog));
searchInput?.addEventListener('input', (event) => renderSearch(event.target.value));
searchResults?.addEventListener('click', (event) => { const link = event.target.closest('a'); if (!link || !link.dataset.target) return; event.preventDefault(); closeDialog(searchDialog); const target = link.dataset.target === 'reserva' ? document.querySelector('.booking') : document.getElementById(link.dataset.target); target?.scrollIntoView({ behavior: 'smooth' }); });

const galleryImages = [...document.querySelectorAll('.gallery-item img')];
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('figcaption');
let activeImageIndex = 0;
function showGalleryImage(index) {
  activeImageIndex = (index + galleryImages.length) % galleryImages.length;
  const image = galleryImages[activeImageIndex];
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;
}
galleryImages.forEach((image, index) => image.closest('.gallery-item')?.addEventListener('click', () => { showGalleryImage(index); openDialog(lightbox); }));
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => closeDialog(lightbox));
lightbox?.querySelector('.lightbox-prev')?.addEventListener('click', () => showGalleryImage(activeImageIndex - 1));
lightbox?.querySelector('.lightbox-next')?.addEventListener('click', () => showGalleryImage(activeImageIndex + 1));
lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeDialog(lightbox); });

const promoDialog = document.querySelector('.promo-dialog');
const instagramDialog = document.querySelector('.instagram-dialog');
let promoDismissedForSession = false;
function readPromoDismissed() { try { return window.sessionStorage?.getItem('promo5Dismissed') === 'true'; } catch { return promoDismissedForSession; } }
function savePromoDismissed() { promoDismissedForSession = true; try { window.sessionStorage?.setItem('promo5Dismissed', 'true'); } catch { /* Private browsing can disable storage. */ } }
const dismissPromo = () => { closeDialog(promoDialog); savePromoDismissed(); window.setTimeout(() => openDialog(instagramDialog), 250); };
document.querySelector('.promo-close')?.addEventListener('click', dismissPromo);
document.querySelector('.promo-later')?.addEventListener('click', dismissPromo);
document.querySelector('.promo-button')?.addEventListener('click', dismissPromo);
document.querySelector('.instagram-close')?.addEventListener('click', () => closeDialog(instagramDialog));
document.querySelector('.instagram-later')?.addEventListener('click', () => closeDialog(instagramDialog));
document.querySelector('.instagram-follow')?.addEventListener('click', () => closeDialog(instagramDialog));
window.setTimeout(() => { if (!readPromoDismissed()) openDialog(promoDialog); }, 1400);
[searchDialog, instagramDialog].forEach((dialog) => dialog?.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(dialog); }));
promoDialog?.addEventListener('click', (event) => { if (event.target === promoDialog) dismissPromo(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { if (!searchDialog.hidden) closeDialog(searchDialog); if (!promoDialog.hidden) dismissPromo(); else if (!instagramDialog.hidden) closeDialog(instagramDialog); if (!lightbox.hidden) closeDialog(lightbox); }
  if (!lightbox.hidden && event.key === 'ArrowLeft') showGalleryImage(activeImageIndex - 1);
  if (!lightbox.hidden && event.key === 'ArrowRight') showGalleryImage(activeImageIndex + 1);
});
setLanguage('es');

searchInput?.addEventListener('keydown', event => { if (event.key === 'Enter' && searchInput.value.trim() && !event.isComposing) { event.preventDefault(); window.open(mapsSearchUrl(searchInput.value), '_blank', 'noopener,noreferrer'); } });
