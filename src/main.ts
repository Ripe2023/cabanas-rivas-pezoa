const menuButton = document.querySelector<HTMLButtonElement>('.menu-btn');
const header = document.querySelector<HTMLElement>('.header');
const whatsappLink = document.querySelector<HTMLAnchorElement>('#whatsapp');

if (!menuButton || !header || !whatsappLink) {
  throw new Error('No se encontraron los elementos principales de la página.');
}

menuButton.addEventListener('click', (): void => {
  const open: boolean = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll<HTMLAnchorElement>('.nav a').forEach((link): void => {
  link.addEventListener('click', (): void => {
    header.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Reemplaza este valor por el teléfono real, incluyendo el código de país.
const phone: string = '569XXXXXXXX';
const message: string = encodeURIComponent(
  'Hola, quisiera consultar disponibilidad en Cabañas de Coñaripe.',
);

whatsappLink.href = `https://wa.me/${phone}?text=${message}`;
