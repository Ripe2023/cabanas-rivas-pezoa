import './chat.css';

const root = document.createElement('aside');
root.className = 'cabinChat';
root.innerHTML = `<button class="chatLauncher" aria-expanded="false" aria-controls="cabin-chat-panel">Chat · Reservas</button>
<section id="cabin-chat-panel" class="chatPanel" aria-label="Asistente virtual Cabañas Rivas Pezoa" hidden>
<header><div><strong>Asistente Cabañas Rivas Pezoa</strong><small>Respuestas automáticas sobre tu estadía</small></div><button class="chatClose" aria-label="Cerrar chat">×</button></header>
<div class="chatMessages" role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversación"></div>
<div class="chatTopics" aria-label="Consultas frecuentes"><button>Disponibilidad</button><button>Cabañas</button><button>Precios</button><button>Ubicación</button></div>
<form class="chatForm"><label class="chatSr" for="chat-question">Escribe tu consulta</label><input id="chat-question" placeholder="Escribe tu consulta…" maxlength="500" autocomplete="off" required><button type="submit">Enviar</button></form>
<a class="chatWhatsapp" target="_blank" rel="noopener noreferrer" href="https://wa.me/56994427207">Hablar con Cabañas Rivas Pezoa por WhatsApp ↗</a>
</section>`;
document.body.append(root);
const launcher = root.querySelector('.chatLauncher');
const panel = root.querySelector('.chatPanel');
const messages = root.querySelector('.chatMessages');
const input = root.querySelector('input');
const whatsapp = root.querySelector('.chatWhatsapp');
function setOpen(open) {
  panel.hidden = !open;
  launcher.setAttribute('aria-expanded', String(open));
  if (open) input.focus(); else launcher.focus();
}
launcher.addEventListener('click', () => setOpen(panel.hidden));
root.querySelector('.chatClose').addEventListener('click', () => setOpen(false));
root.addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false); });
function addMessage(text, sender) {
  const message = document.createElement('p');
  message.className = `chatBubble ${sender}`;
  message.textContent = text;
  messages.append(message);
  messages.scrollTop = messages.scrollHeight;
}
export function answer(question) {
  const text = question.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  if (/mascota|perro|gato|pet/.test(text)) return 'Consulta por WhatsApp si podemos recibir a tu mascota antes de reservar. No tengo una política de mascotas confirmada.';
  if (/horario|check|entrada|salida|llegada/.test(text)) return 'Coordina por WhatsApp los horarios de entrada y salida, y avísanos si necesitas llegar a una hora especial.';
  if (/precio|cuanto|costo|tarifa|valor|presupuesto/.test(text)) return 'Para cotizar, envíanos por WhatsApp tus fechas de entrada y salida y cuántas personas viajan. No tengo tarifas ni disponibilidad en tiempo real.';
  if (/descuento|web5|promocion|oferta/.test(text)) return 'La web anuncia un 5% de descuento con el código WEB5 para reserva directa por WhatsApp, sujeto a disponibilidad. Confirma su aplicación al cotizar.';
  if (/ubicacion|direccion|donde|llegar/.test(text)) return 'Estamos en Coñaripe, comuna de Panguipulli, Región de Los Ríos. Busca Cabañas Rivas Pezoa en Google Maps o escríbenos para recibir la ubicación y las indicaciones de llegada.';
  if (/estacionamiento|auto|vehiculo/.test(text)) return 'Contamos con estacionamiento, según la información de nuestra web. Si viajas con varios vehículos, consulta los detalles por WhatsApp.';
  if (/wifi|internet|piscina|tinaja|acceso|silla|cama|capacidad|personas|equipamiento/.test(text)) return 'Para confirmar capacidad, distribución y equipamiento de la cabaña disponible, cuéntanos cuántas personas viajan y qué necesitan por WhatsApp. No tengo esos detalles confirmados para cada cabaña.';
  if (/reserva|disponib|fecha|noche|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre/.test(text)) return 'La reserva es directa por WhatsApp. Indícanos fecha de entrada, fecha de salida y número de personas. El equipo confirmará disponibilidad, tarifa y condiciones; este chat no realiza ni confirma reservas.';
  if (/cancel|pago|abono|devolucion/.test(text)) return 'Consulta las condiciones de pago, abono y cancelación con el equipo por WhatsApp antes de confirmar tu reserva.';
  if (/terma|lago|playa|actividad|paseo|panorama/.test(text)) return 'Desde Coñaripe puedes conocer el lago Calafquén, la playa y la Ruta Termal hacia Liquiñe. Consulta horarios, acceso y tarifas directamente con cada atractivo antes de viajar.';
  if (/cabana|alojamiento/.test(text)) return 'Ofrecemos cabañas acogedoras y familiares en Coñaripe, con estacionamiento y atención directa. Puedes ver fotos reales en la web; consulta por WhatsApp qué cabaña se adapta a tu grupo.';
  if (/humano|persona|contacto|whatsapp|telefono/.test(text)) return 'Escríbenos al +56 9 9442 7207 mediante el botón de abajo. También puedes contactar al +56 9 4018 7470, disponible en la web.';
  if (/^(hola|buenas|gracias)[!.\s]*$/.test(text)) return '¡Hola! ¿Quieres consultar por una estadía, conocer las cabañas o saber cómo llegar?';
  return 'No tengo una respuesta confirmada para esa consulta. Puedo orientarte sobre las cabañas, ubicación y reservas, o puedes continuar con el equipo por WhatsApp.';
}
function submit(question) {
  const text = question.trim();
  if (!text) return;
  addMessage(text, 'visitor');
  addMessage(answer(text), 'assistant');
  whatsapp.href = `https://wa.me/56994427207?text=${encodeURIComponent(`Hola Cabañas Rivas Pezoa, mi consulta es: ${text}`)}`;
  input.value = '';
}
root.querySelector('form').addEventListener('submit', event => { event.preventDefault(); submit(input.value); });
root.querySelectorAll('.chatTopics button').forEach(button => button.addEventListener('click', () => submit(button.textContent)));
addMessage('¡Hola! Soy el asistente automático de Cabañas Rivas Pezoa. Te ayudo con ubicación, cabañas y consultas de reserva. Las fechas y tarifas se confirman por WhatsApp.', 'assistant');
