/* ===================================
   GUÍA M365 vs GWS - JAVASCRIPT
   =================================== */

// ===== DATOS =====
const comparisons = [
  { area: 'Procesador de Texto', icon: '📝', ms: 'Word: El rey del formato. Ideal para informes finales, tesis o documentos legales que requieren diseño impecable.', gw: 'Docs: El rey de la co-escritura. Ideal para borradores, propuestas y documentos que evolucionan con el equipo.', when: 'Usa Word para el producto final. Usa Docs para el proceso de creación.' },
  { area: 'Hojas de Cálculo', icon: '📊', ms: 'Excel: Potencia bruta. Macros, tablas dinámicas complejas y millones de filas.', gw: 'Sheets: Colaboración pura. Funciones en la nube, integración fácil con formularios y scripts web sencillos.', when: 'Usa Excel para análisis de datos pesados. Usa Sheets para presupuestos compartidos y seguimiento.' },
  { area: 'Presentaciones', icon: '🎬', ms: 'PowerPoint: Animaciones avanzadas, diseño profesional y modo presentador robusto.', gw: 'Slides: Sencillo, colaborativo y con integración directa de imágenes/web en tiempo real.', when: 'Usa PowerPoint para eventos o clientes externos. Usa Slides para reuniones internas ágiles.' },
  { area: 'Comunicación Sincrónica', icon: '📹', ms: 'Teams: Un "hub" completo. Videollamadas, chat y archivos en una sola ventana. Integra todo el ecosistema.', gw: 'Meet: Ligero, sin instalación, se une con un clic desde el navegador o Gmail.', when: 'Usa Teams para reuniones estructuradas con agenda. Usa Meet para check-ins rápidos e improvisados.' },
  { area: 'Comunicación Asincrónica', icon: '💬', ms: 'Teams (Chat) / Outlook: Hilos de conversación estructurados, correos formales y tareas integradas.', gw: 'Chat / Gmail: Conversaciones tipo mensajería instantánea, rápidas y menos formales.', when: 'Usa Outlook/Teams para decisiones que dejan huella. Usa Chat para preguntas rápidas del día a día.' }
];

const capaItems = [
  { letter: 'C', title: 'Contexto', color: 'blue', emoji: '🎯', question: '¿Cuál es el objetivo final de este proyecto?', example: 'Ej: "Entregar un informe trimestral"', description: 'Antes de abrir cualquier herramienta, todos deben entender hacia dónde van. Sin contexto claro, cada persona trabajará en dirección diferente.' },
  { letter: 'A', title: 'Acuerdos', color: 'purple', emoji: '📋', question: '¿Dónde vivirá la "única versión de la verdad"?', example: 'Ej: "El master estará en SharePoint, los borradores en Teams"', description: 'Definan dónde se guardan los archivos, quién tiene acceso y cuál es la fuente oficial de información.' },
  { letter: 'P', title: 'Personas (Roles)', color: 'green', emoji: '👥', question: '¿Quién es el Editor? ¿Quién es el Revisor? ¿Quién toma la decisión final?', example: 'Evita que 5 personas editen a la vez sin sentido.', description: 'Asignen roles claros. No todos deben editar todo. La claridad de roles previene conflictos y duplicación de trabajo.' },
  { letter: 'A', title: 'Alarmas (Plazos)', color: 'orange', emoji: '⏰', question: '¿Cuándo necesitamos notificaciones y cuándo silencio para trabajar en profundidad?', example: 'Define momentos de colaboración activa y momentos de trabajo profundo.', description: 'Establezcan plazos claros y respeten los tiempos de concentración del equipo. No todo es urgente.' }
];

const steps = [
  { num: 1, title: 'La Ceremonia de Inicio', time: '15 minutos', emoji: '🏁', content: 'No empieces a trabajar. Reúnete (en Meet o Teams) y definan el Método C.A.P.A. Escriban esto en un documento compartido.', tip: 'Tip: Usa un timer de 15 minutos para mantener el enfoque.', semaphore: false },
  { num: 2, title: 'La Configuración del "Hogar Digital"', time: '10 minutos', emoji: '🏠', content: 'Si usan Google: Creen una Carpeta Principal en Drive. Dentro, subcarpetas: "01_Borradores", "02_Recursos", "03_Versiones_Finales". Si usan Microsoft: Creen un "Equipo" en Teams con canales claros.', tip: 'Tip: Numera las carpetas para mantener el orden lógico.', semaphore: false },
  { num: 3, title: 'La Regla del Semáforo de Colaboración', time: 'Continuo', emoji: '🚦', content: 'Enseña a tu equipo a usar los indicadores visuales:', tip: '', semaphore: true },
  { num: 4, title: 'La Revisión y Cierre', time: 'Al finalizar', emoji: '✅', content: 'No envíes el archivo por correo o WhatsApp. Comparte el enlace con los permisos correctos (Solo lectura o Comentarista) para mantener el control de la versión final.', tip: 'Tip: Nunca compartas archivos adjuntos. Siempre enlaces.', semaphore: false }
];

const quizQuestions = [
  { q: '¿Cuántas personas trabajarán en el proyecto?', options: ['1-5 personas', '6-20 personas', '21-100 personas', 'Más de 100'] },
  { q: '¿Qué tan importante es el formato profesional de los documentos?', options: ['No importa, solo necesito funcionalidad', 'Moderadamente importante', 'Muy importante', 'Crítico (legal, corporativo)'] },
  { q: '¿Tu equipo trabaja principalmente de forma remota?', options: ['Totalmente remoto', 'Híbrido', 'Mayormente presencial', 'Totalmente presencial'] },
  { q: '¿Qué tan rápido necesitas implementar la solución?', options: ['Inmediatamente (hoy)', 'Esta semana', 'Este mes', 'Tenemos tiempo para planificar'] },
  { q: '¿Necesitas análisis de datos complejos (macros, tablas dinámicas)?', options: ['No, datos simples', 'Algo ocasional', 'Sí, regularmente', 'Sí, es mi trabajo principal'] }
];

const passportFields = [
  { key: 'projectName', label: '📌 Nombre del Proyecto', placeholder: 'Ej: Informe Trimestral Q3' },
  { key: 'objective', label: '🎯 Objetivo (Contexto)', placeholder: 'Ej: Entregar un resumen ejecutivo al directorio' },
  { key: 'tools', label: '🔧 Herramientas elegidas', placeholder: 'Ej: Word para informe final, Teams para comunicación' },
  { key: 'editor', label: '✏️ Editor principal', placeholder: 'Nombre de quien escribe/edita' },
  { key: 'reviewer', label: '🔍 Revisor', placeholder: 'Nombre de quien revisa y aprueba' },
  { key: 'decisionMaker', label: '⚖️ Decisor final', placeholder: 'Nombre de quien tiene la última palabra' },
  { key: 'deadline', label: '📅 Fecha límite', placeholder: 'Ej: Viernes 15 a las 17:00' },
  { key: 'silentHours', label: '🤫 Horas de silencio', placeholder: 'Ej: 9:00-11:00 sin notificaciones' },
  { key: 'folderStructure', label: '📁 Estructura de carpetas', placeholder: 'Ej: 01_Borradores / 02_Recursos / 03_Final' }
];

// ===== TEMA =====
const themeToggle = document.getElementById('themeToggle');
function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeToggle.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('darkMode', dark);
}
const savedTheme = localStorage.getItem('darkMode');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme !== null ? savedTheme === 'true' : prefersDark);
themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));

// ===== BARRA DE PROGRESO =====
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (window.scrollY / total * 100) + '%';
});

// ===== NAVEGACIÓN ACTIVA =====
const navLinks = document.querySelectorAll('.nav-link');
const sectionIds = ['intro', 'gigantes', 'comparativa', 'capa', 'pasos', 'quiz', 'canvas'];
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 200;
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
      navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
      break;
    }
  }
});

// ===== VOLVER ARRIBA =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 500));
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== OBSERVADOR DE ANIMACIONES =====
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ===== COMPARATIVA =====
const compList = document.getElementById('compList');
comparisons.forEach((comp, idx) => {
  const item = document.createElement('div');
  item.className = 'comp-item fade-in';
  item.innerHTML = `
    <div class="comp-header">
      <span class="comp-icon">${comp.icon}</span>
      <div class="comp-header-text"><h3>${comp.area}</h3><p>Haz clic para ver detalles</p></div>
      <span class="comp-arrow">▼</span>
    </div>
    <div class="comp-body">
      <div class="comp-grid">
        <div class="comp-col ms"><div class="comp-col-label">🟦 Microsoft 365</div><p>${comp.ms}</p></div>
        <div class="comp-col gw"><div class="comp-col-label">🟩 Google Workspace</div><p>${comp.gw}</p></div>
        <div class="comp-col when"><div class="comp-col-label">🎯 ¿Cuándo elegir cuál?</div><p>${comp.when}</p></div>
      </div>
    </div>`;
  item.addEventListener('click', () => item.classList.toggle('open'));
  compList.appendChild(item);
  fadeObserver.observe(item);
});

// ===== MÉTODO C.A.P.A. =====
const capaGrid = document.getElementById('capaGrid');
capaItems.forEach(item => {
  const card = document.createElement('div');
  card.className = 'capa-card fade-in';
  card.dataset.color = item.color;
  card.innerHTML = `
    <div class="capa-header">
      <div class="capa-letter ${item.color}">${item.letter}</div>
      <div class="capa-title">${item.emoji} ${item.title}</div>
    </div>
    <p class="capa-question">${item.question}</p>
    <p class="capa-example">${item.example}</p>
    <div class="capa-detail">${item.description}</div>`;
  card.addEventListener('click', () => {
    const wasActive = card.classList.contains('active');
    capaGrid.querySelectorAll('.capa-card').forEach(c => { c.classList.remove('active', 'blue', 'purple', 'green', 'orange'); });
    if (!wasActive) { card.classList.add('active', item.color); }
  });
  capaGrid.appendChild(card);
  fadeObserver.observe(card);
});

// ===== PASOS =====
const stepsList = document.getElementById('stepsList');
const stepsCountEl = document.getElementById('stepsCount');
let completedSteps = [];

function renderSteps() {
  stepsList.innerHTML = '';
  steps.forEach(step => {
    const done = completedSteps.includes(step.num);
    const row = document.createElement('div');
    row.className = 'step-row fade-in';
    row.innerHTML = `
      <div class="step-dot"><div class="step-circle ${done ? 'done' : ''}" data-step="${step.num}">${done ? '✓' : step.num}</div></div>
      <div class="step-card ${done ? 'done' : ''}">
        <div class="step-header">
          <div class="step-header-left">
            <span class="step-emoji">${step.emoji}</span>
            <div><div class="step-title">Paso ${step.num}: ${step.title}</div><span class="step-time">${step.time}</span></div>
          </div>
          <button class="step-check ${done ? 'done' : ''}" data-step="${step.num}">${done ? '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>' : ''}</button>
        </div>
        <p class="step-content">${step.content}</p>
        ${step.semaphore ? `
          <div class="semaphore">
            <div class="semaphore-item red"><span class="emoji">🔴</span><p><strong>Rojo:</strong> "Estoy editando, no tocar hasta que avise".</p></div>
            <div class="semaphore-item yellow"><span class="emoji">🟡</span><p><strong>Amarillo:</strong> "Estoy revisando y dejando comentarios".</p></div>
            <div class="semaphore-item green-s"><span class="emoji">🟢</span><p><strong>Verde:</strong> "Documento listo para editar o leer".</p></div>
          </div>` : ''}
        ${step.tip ? `<div class="step-tip"><p>${step.tip}</p></div>` : ''}
      </div>`;
    stepsList.appendChild(row);
    fadeObserver.observe(row);
  });
  stepsCountEl.textContent = `✅ Pasos completados: ${completedSteps.length}/4`;
  stepsList.querySelectorAll('.step-check, .step-circle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const num = parseInt(btn.dataset.step);
      if (completedSteps.includes(num)) { completedSteps = completedSteps.filter(s => s !== num); }
      else { completedSteps.push(num); }
      renderSteps();
    });
  });
}
renderSteps();

// ===== QUIZ =====
const quizCard = document.getElementById('quizCard');
let quizCurrent = 0;
let quizAnswers = [];
let quizDone = false;

function renderQuiz() {
  if (quizDone) {
    const score = quizAnswers.reduce((s, v) => s + v, 0);
    const maxScore = quizQuestions.length * 3;
    const pct = (score / maxScore) * 100;
    let result;
    if (pct < 35) { result = { tool: 'Google Workspace', emoji: '🟩', color: 'green', badge: '🚀', reason: 'Tu equipo es ágil, pequeño y necesita velocidad. Google Workspace te dará la colaboración en tiempo real que necesitas sin complicaciones.' }; }
    else if (pct < 65) { result = { tool: 'Modelo Híbrido', emoji: '🟪', color: 'purple', badge: '🔀', reason: 'Tu equipo tiene necesidades mixtas. Usa Google Workspace para colaboración diaria y Microsoft 365 para documentos finales y análisis complejos.' }; }
    else { result = { tool: 'Microsoft 365', emoji: '🟦', color: 'blue', badge: '🏢', reason: 'Tu equipo necesita potencia, control y formato profesional. Microsoft 365 te dará la estructura y seguridad empresarial que requieres.' }; }
    quizCard.innerHTML = `
      <div class="quiz-result">
        <div class="emoji">${result.badge}</div>
        <h3>Tu recomendación:</h3>
        <div class="quiz-result-badge ${result.color}">${result.emoji} ${result.tool}</div>
        <p>${result.reason}</p>
        <button class="quiz-reset" id="quizReset">🔄 Repetir quiz</button>
      </div>`;
    document.getElementById('quizReset').addEventListener('click', () => { quizCurrent = 0; quizAnswers = []; quizDone = false; renderQuiz(); });
    return;
  }
  const q = quizQuestions[quizCurrent];
  const pct = Math.round((quizCurrent / quizQuestions.length) * 100);
  quizCard.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-info"><span>Pregunta ${quizCurrent + 1} de ${quizQuestions.length}</span><span>${pct}%</span></div>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="quiz-body">
      <h3 class="quiz-question">${q.q}</h3>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-option" data-idx="${i}"><span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>${opt}</button>`).join('')}
      </div>
    </div>`;
  quizCard.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      quizAnswers.push(parseInt(btn.dataset.idx));
      if (quizCurrent < quizQuestions.length - 1) { quizCurrent++; }
      else { quizDone = true; }
      renderQuiz();
    });
  });
}
renderQuiz();

// ===== PASAPORTE DE COLABORACIÓN =====
const passportCard = document.getElementById('passportCard');
const STORAGE_KEY = 'collaboration-passport';
let passportData = {};
let passportSaved = false;
let passportCopied = false;

try { const s = localStorage.getItem(STORAGE_KEY); if (s) passportData = JSON.parse(s); } catch(e) {}
passportFields.forEach(f => { if (!passportData[f.key]) passportData[f.key] = ''; });

function savePassport() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(passportData)); } catch(e) {}
}

function renderPassport() {
  const filled = Object.values(passportData).filter(v => v && v.trim() !== '').length;
  const pct = Math.round((filled / passportFields.length) * 100);
  passportCard.innerHTML = `
    <div class="passport-header">
      <div class="passport-header-left"><span class="emoji">🛂</span><div><h3>Pasaporte de Colaboración</h3><p>Acuerdo visual y gamificado para tu equipo</p></div></div>
      <div class="passport-actions">
        <button class="passport-action-btn" id="passportExample">📋 Ejemplo</button>
        <button class="passport-action-btn" id="passportClear">🗑️ Limpiar</button>
      </div>
    </div>
    <div class="passport-body">
      ${passportFields.map(f => `
        <div class="passport-field">
          <label>${f.label}</label>
          <input type="text" data-key="${f.key}" placeholder="${f.placeholder}" value="${passportData[f.key] || ''}">
        </div>`).join('')}
      <div class="passport-buttons">
        <button class="passport-btn primary ${passportSaved ? 'saved' : ''}" id="passportSave">${passportSaved ? '✅ ¡Guardado! 🎉' : '🚀 Guardar Pasaporte'}</button>
        <button class="passport-btn secondary ${passportCopied ? 'copied' : ''}" id="passportCopy">${passportCopied ? '✅ ¡Copiado!' : '📋 Copiar como texto'}</button>
      </div>
      <div class="passport-mobile-actions">
        <button class="passport-mobile-btn example" id="passportExampleM">📋 Cargar ejemplo</button>
        <button class="passport-mobile-btn clear" id="passportClearM">🗑️ Limpiar todo</button>
      </div>
    </div>
    <div class="passport-footer">
      <div class="passport-progress-info"><span>Progreso del pasaporte</span><span>${filled}/${passportFields.length} campos</span></div>
      <div class="passport-progress-bar"><div class="passport-progress-fill" style="width:${pct}%"></div></div>
      ${pct === 100 ? '<p class="passport-complete-msg">🎉 ¡Pasaporte completo! ¡Eres el arquitecto del equipo!</p>' : ''}
    </div>`;

  passportCard.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      passportData[input.dataset.key] = input.value;
      passportSaved = false;
      savePassport();
      const filledNow = Object.values(passportData).filter(v => v && v.trim() !== '').length;
      const pctNow = Math.round((filledNow / passportFields.length) * 100);
      const fill = passportCard.querySelector('.passport-progress-fill');
      if (fill) fill.style.width = pctNow + '%';
      const info = passportCard.querySelector('.passport-progress-info span:last-child');
      if (info) info.textContent = `${filledNow}/${passportFields.length} campos`;
    });
  });

  const saveBtn = document.getElementById('passportSave');
  if (saveBtn) saveBtn.addEventListener('click', () => {
    passportSaved = true;
    savePassport();
    const filledNow = Object.values(passportData).filter(v => v && v.trim() !== '').length;
    if (filledNow === passportFields.length) triggerConfetti();
    renderPassport();
    setTimeout(() => { passportSaved = false; }, 3000);
  });

  const copyBtn = document.getElementById('passportCopy');
  if (copyBtn) copyBtn.addEventListener('click', () => {
    const text = `🛂 PASAPORTE DE COLABORACIÓN\n━━━━━━━━━━━━━━━━━━━━━━━━\n📌 Proyecto: ${passportData.projectName || '(vacío)'}\n🎯 Objetivo: ${passportData.objective || '(vacío)'}\n🔧 Herramientas: ${passportData.tools || '(vacío)'}\n✏️ Editor: ${passportData.editor || '(vacío)'}\n🔍 Revisor: ${passportData.reviewer || '(vacío)'}\n⚖️ Decisor: ${passportData.decisionMaker || '(vacío)'}\n📅 Fecha límite: ${passportData.deadline || '(vacío)'}\n🤫 Horas de silencio: ${passportData.silentHours || '(vacío)'}\n📁 Estructura: ${passportData.folderStructure || '(vacío)'}\n━━━━━━━━━━━━━━━━━━━━━━━━\nMétodo C.A.P.A. aplicado ✅`;
    navigator.clipboard.writeText(text).then(() => {
      passportCopied = true;
      renderPassport();
      setTimeout(() => { passportCopied = false; }, 2500);
    });
  });

  const loadExample = () => {
    passportData = { projectName: 'Informe Trimestral Q3 2026', objective: 'Entregar resumen ejecutivo al directorio con métricas de ventas y proyecciones', tools: 'Word (informe final) + Sheets (datos) + Teams (comunicación)', editor: 'María García', reviewer: 'Carlos López', decisionMaker: 'Ana Martínez (Directora)', deadline: 'Viernes 22 de Noviembre, 17:00', silentHours: '9:00-11:00 AM (trabajo profundo sin notificaciones)', folderStructure: '01_Borradores / 02_Datos / 03_Recursos / 04_Versiones / 05_Final' };
    passportSaved = false;
    savePassport();
    renderPassport();
  };

  const clearAll = () => {
    if (confirm('¿Seguro que quieres borrar todo el pasaporte?')) {
      passportFields.forEach(f => passportData[f.key] = '');
      passportSaved = false;
      savePassport();
      renderPassport();
    }
  };

  const exBtn = document.getElementById('passportExample');
  const exBtnM = document.getElementById('passportExampleM');
  const clBtn = document.getElementById('passportClear');
  const clBtnM = document.getElementById('passportClearM');
  if (exBtn) exBtn.addEventListener('click', loadExample);
  if (exBtnM) exBtnM.addEventListener('click', loadExample);
  if (clBtn) clBtn.addEventListener('click', clearAll);
  if (clBtnM) clBtnM.addEventListener('click', clearAll);
}
renderPassport();

// ===== CONFETTI =====
function triggerConfetti() {
  const colors = ['#a855f7', '#3b82f6', '#22c55e', '#eab308', '#ef4444', '#ec4899'];
  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(container);
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const dur = 2 + Math.random() * 2;
    const size = 6 + Math.random() * 8;
    c.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-10px;width:${size}px;height:${size}px;background:${color};border-radius:${Math.random()>0.5?'50%':'2px'};transform:rotate(${Math.random()*360}deg);animation:confettiFall ${dur}s ease-in ${Math.random()*0.5}s forwards;`;
    container.appendChild(c);
  }
  setTimeout(() => container.remove(), 5000);
}
