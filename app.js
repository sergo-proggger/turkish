// Турецкий с нуля: экраны, упражнения, ударный режим, интервальное повторение.
// Прогресс хранится в localStorage на каждом устройстве отдельно (есть экспорт и импорт в профиле).
(() => {
'use strict';

const LESSONS = window.TR_LESSONS || [];
const PHOTOS = window.TR_PHOTOS || {};
const PICS = window.TR_PICS || {};
const UNITS = [
  { id: 'A1', title: 'Уровень A1 — основы', sub: 'Алфавит, знакомство, падежи, настоящее время, еда, семья, время' },
  { id: 'A2', title: 'Уровень A2 — повседневность', sub: 'Прошедшее и будущее, город, покупки, здоровье, сравнение' },
  { id: 'B1', title: 'Уровень B1 — связная речь', sub: 'Условия, причастия, деепричастия, пересказ, поездки' }
];
const KEY = 'turkish-v1';
const GOALS = [
  { xp: 10, name: 'Лёгкая', note: 'около 5 минут' },
  { xp: 20, name: 'Обычная', note: 'около 10 минут' },
  { xp: 30, name: 'Серьёзная', note: 'около 15 минут' },
  { xp: 50, name: 'Интенсив', note: 'около 25 минут' }
];
const INTERVALS = [0, 1, 3, 7, 14, 30]; // через сколько дней повторять слово на уровне 0–5
const WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const PROPER = ['Türkçe', 'Rusça', 'İngilizce', 'Almanca', 'İstanbul', 'Moskova', 'Ankara', 'Antalya', 'Türkiye', 'Rusya',
  'Ahmet', 'Anna', 'Sergey', 'Taksim', 'Türk', 'Rus', 'Wi-Fi', 'Kadıköy'];

// ---------- даты ----------
const dayNum = (d = new Date()) => Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
const dayDate = n => { const d = new Date(n * 864e5); return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()); };
const isoDay = n => { const d = dayDate(n); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const weekIdx = n => (dayDate(n).getDay() + 6) % 7;

// ---------- состояние ----------
const defaults = () => ({
  v: 1, goal: 20, xp: {}, total: 0, streak: 0, best: 0, lastGoal: null, freezes: 0, frozen: [], met: [],
  lessons: {}, ex: {}, words: {}, voice: true, autoplay: true, rate: 0.85, theme: 'auto'
});
let S = load();
function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && s.v === 1) return Object.assign(defaults(), s);
  } catch (e) {}
  return defaults();
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

// Пропущенные дни: заморозки спасают серию, иначе она сгорает.
function reconcile() {
  const today = dayNum();
  if (S.lastGoal == null || S.streak === 0) return;
  const missed = today - S.lastGoal - 1;
  if (missed <= 0) return;
  if (S.freezes >= missed) {
    S.freezes -= missed;
    for (let i = 1; i <= missed; i++) S.frozen.push(S.lastGoal + i);
    S.lastGoal = today - 1;
  } else {
    S.streak = 0;
  }
  save();
}
const todayXP = () => S.xp[dayNum()] || 0;
const metToday = () => S.lastGoal === dayNum();
// Сколько дней подряд показывать: если сегодня ещё не занимался, но вчера цель выполнена — серия жива.
const shownStreak = () => (S.lastGoal != null && S.lastGoal >= dayNum() - 1) ? S.streak : 0;

function addXP(n) {
  const today = dayNum();
  S.xp[today] = (S.xp[today] || 0) + n;
  S.total += n;
  let reached = false, freezeEarned = false;
  if (S.xp[today] >= S.goal && S.lastGoal !== today) {
    S.streak = S.lastGoal === today - 1 ? S.streak + 1 : 1;
    S.lastGoal = today;
    S.met.push(today);
    S.best = Math.max(S.best, S.streak);
    if (S.streak % 7 === 0 && S.freezes < 2) { S.freezes++; freezeEarned = true; }
    reached = true;
  }
  save();
  return { reached, freezeEarned };
}

// ---------- слова ----------
const WORDS = []; // [{tr, ru, lesson}]
const BY_TR = new Map();
LESSONS.forEach((l, li) => (l.words || []).forEach(([tr, ru]) => {
  const w = { tr, ru, lesson: l.id, li };
  WORDS.push(w);
  if (!BY_TR.has(tr)) BY_TR.set(tr, []);
  BY_TR.get(tr).push(w);
}));
const wstate = tr => S.words[tr] || null;
function markWord(tr, ok) {
  const today = dayNum();
  const w = S.words[tr] || { b: 0, due: today, n: 0 };
  w.n++;
  if (ok) { w.b = Math.min(5, w.b + 1); w.due = today + INTERVALS[w.b]; }
  else { w.b = 0; w.due = today; }
  S.words[tr] = w;
}
const learnedCount = () => Object.values(S.words).filter(w => w.b >= 3).length;
const dueWords = () => {
  const today = dayNum();
  return Object.keys(S.words).filter(tr => S.words[tr].due <= today && BY_TR.has(tr))
    .sort((a, b) => S.words[a].due - S.words[b].due || S.words[a].b - S.words[b].b);
};

// ---------- текст ----------
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const norm = s => String(s).toLocaleLowerCase('tr')
  .replace(/[’'`ʼ-]/g, '').replace(/[.,!?;:«»"()…—–]/g, ' ')
  .replace(/â/g, 'a').replace(/î/g, 'i').replace(/û/g, 'u')
  .replace(/\s+/g, ' ').trim();
const loose = s => norm(s).replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u');
const isTurkish = s => /[a-zçğıöşü]/i.test(s) && !/[а-яё]/i.test(s) && !/^\d/.test(s);
function pretty(s) {
  let out = String(s);
  PROPER.forEach(p => {
    const low = p.toLocaleLowerCase('tr').replace(/-/g, '\\-');
    out = out.replace(new RegExp('(^|[\\s(])' + low + '(?=[\\s\'.,!?]|$)', 'g'), (m, a) => a + p);
  });
  const q = /^(ne|nasıl|kim|nerede|nereye|nereden|kaç|neden|hangi|kimin) /.test(out) ||
    /(^|\s)m[ıiuü](y?[ıiuü]m|s[ıiuü]n|y?[ıiuü]z|s[ıiuü]n[ıiuü]z|yd[ıiuü][mnk]?|yd[ıiuü]n[ıiuü]z)?(\s|$)/.test(out);
  if (q && !/[?]$/.test(out)) out += '?';
  return out.charAt(0).toLocaleUpperCase('tr') + out.slice(1);
}
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);

// ---------- голос ----------
let trVoice = null;
const hasTTS = 'speechSynthesis' in window;
function pickVoice() {
  if (!hasTTS) return;
  const vs = speechSynthesis.getVoices();
  trVoice = vs.find(v => /^tr/i.test(v.lang) && /yelda|google/i.test(v.name)) || vs.find(v => /^tr/i.test(v.lang)) || null;
}
if (hasTTS) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
const canListen = () => hasTTS && S.voice && !!trVoice;
function speak(text, rate) {
  if (!hasTTS || !S.voice || !text) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text).replace(/[—–]/g, ','));
  u.lang = 'tr-TR';
  if (trVoice) u.voice = trVoice;
  u.rate = rate || S.rate;
  speechSynthesis.speak(u);
}

// ---------- иконки ----------
const I = {
  flame: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.6 1.8c.4 3-1.3 4.6-2.7 6.2-1.1 1.2-2 2.4-2 4 0 1.5 1 2.7 2.4 2.9-.6-1.9.4-3.6 1.9-4.8.2 1.9 1.2 2.9 2.4 3.9 1 .8 1.7 1.8 1.7 3.2 0 1.6-1 3-2.5 3.6 3.6-.4 6.2-3.3 6.2-6.9 0-3.5-2-5.4-3.6-7.4-1.4-1.7-2.7-3.1-3.8-4.7zM6.2 11.5C5 12.9 4.3 14.6 4.3 16.4c0 3.4 2.5 6.2 5.8 6.7-1.3-.8-2.2-2.2-2.2-3.9 0-1.3.5-2.3 1.2-3.2-1.6-.7-2.8-2.4-2.9-4.5z"/></svg>`,
  ice: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 2v20M4.9 6.5l14.2 11M4.9 17.5l14.2-11M9 3.5l3 2.5 3-2.5M9 20.5l3-2.5 3 2.5"/></svg>`,
  book: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/></svg>`,
  repeat: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg>`,
  dict: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`,
  user: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>`,
  speaker: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>`,
  close: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  back: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>`,
  check: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,
  cross: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`
};

// ---------- навигация ----------
const $view = document.getElementById('view');
const $top = document.getElementById('top');
const $tabs = document.getElementById('tabs');
const $overlay = document.getElementById('overlay');
let route = { name: 'home' };
let session = null; // текущая практика
const stack = [];

function go(r, push = true) {
  if (push) { stack.push(route); history.pushState({ d: stack.length }, ''); }
  route = r;
  render();
  window.scrollTo(0, 0);
}
function goTab(name) { stack.length = 0; route = { name }; render(); window.scrollTo(0, 0); }
function back() {
  if (stack.length) history.back();
  else goTab('home');
}
window.addEventListener('popstate', () => {
  if (session && route.name === 'practice') {
    if (!confirm('Выйти из практики? Набранные очки сохранятся.')) { history.pushState({ d: stack.length }, ''); return; }
    session = null;
  }
  route = stack.pop() || { name: 'home' };
  render();
});

function render() {
  reconcile();
  const full = route.name === 'practice' || route.name === 'result';
  document.body.classList.toggle('full', full);
  renderTabs();
  const r = route.name;
  if (r === 'home') viewHome();
  else if (r === 'lesson') viewLesson();
  else if (r === 'practice') viewPractice();
  else if (r === 'result') viewResult();
  else if (r === 'review') viewReview();
  else if (r === 'dict') viewDict();
  else if (r === 'profile') viewProfile();
}

function topBar(title, { backBtn = false, closeBtn = false } = {}) {
  const st = shownStreak();
  $top.innerHTML = `
    ${backBtn ? `<button class="icon-btn" data-act="back" aria-label="Назад">${I.back}</button>` : ''}
    ${closeBtn ? `<button class="icon-btn" data-act="quit" aria-label="Закрыть">${I.close}</button>` : ''}
    <h1>${esc(title)}</h1>
    ${S.freezes ? `<span class="chip ice" title="Заморозки серии">${I.ice(16)}${S.freezes}</span>` : ''}
    <button class="chip flame ${metToday() ? '' : 'off'}" data-act="tab" data-tab="profile" aria-label="Дней подряд: ${st}">${I.flame(18)}${st}</button>`;
  $top.hidden = false;
}

function renderTabs() {
  const due = dueWords().length;
  const t = (name, icon, label, badge) => `<button class="tab" data-act="tab" data-tab="${name}" ${tabOf(route.name) === name ? 'aria-current="page"' : ''}>${icon}<span>${label}</span>${badge ? `<span class="badge">${badge > 99 ? '99+' : badge}</span>` : ''}</button>`;
  $tabs.innerHTML = `<div class="tabs-in">${t('home', I.book, 'Курс')}${t('review', I.repeat, 'Повторение', due)}${t('dict', I.dict, 'Словарь')}${t('profile', I.user, 'Профиль')}</div>`;
}
const tabOf = n => (n === 'lesson' ? 'home' : n);

// ---------- главная ----------
function nextLesson() { return LESSONS.find(l => !(S.lessons[l.id] && S.lessons[l.id].done)) || null; }

function weekStrip() {
  const today = dayNum();
  const start = today - weekIdx(today);
  const met = new Set(S.met), fr = new Set(S.frozen);
  let h = '<div class="week">';
  for (let i = 0; i < 7; i++) {
    const d = start + i;
    const cls = met.has(d) ? 'met' : fr.has(d) ? 'frozen' : d > today ? 'future' : '';
    const ic = met.has(d) ? I.check(16) : fr.has(d) ? I.ice(15) : '';
    h += `<div><div class="d">${WEEK[i]}</div><div class="dot ${cls} ${d === today ? 'today' : ''}">${ic}</div></div>`;
  }
  return h + '</div>';
}

function todayCard() {
  const st = shownStreak(), xp = todayXP(), done = metToday();
  const pct = Math.min(100, Math.round(xp / S.goal * 100));
  const lbl = done ? 'Цель на сегодня выполнена' : st > 0 ? 'Позанимайся сегодня, чтобы не потерять серию' : 'Выполни дневную цель и начни серию';
  return `<section class="card today">
    <div class="today-head">
      <div class="flame-big ${done ? '' : 'off'}">${I.flame(30)}</div>
      <div class="grow"><div class="num">${st} ${plural(st, 'день', 'дня', 'дней')} подряд</div><div class="lbl">${lbl}</div></div>
    </div>
    <div><div class="goal-line"><span>Цель дня</span><span><b>${Math.min(xp, S.goal)}</b> из ${S.goal} XP</span></div>
    <div class="bar flame"><i style="width:${pct}%"></i></div></div>
    ${weekStrip()}
  </section>`;
}

function viewHome() {
  topBar('Турецкий с нуля');
  const nx = nextLesson();
  const due = dueWords().length;
  let h = todayCard();
  h += `<div class="continue">`;
  if (nx) {
    const n = LESSONS.indexOf(nx) + 1;
    h += `<button class="next-card" data-act="open" data-id="${nx.id}">${coverHTML(nx.id, true)}
      <span class="next-body"><span class="muted small">Урок ${n} · ${nx.unit}</span><span class="next-title">${esc(nx.title)}</span>
      <span class="btn block" style="margin-top:10px">${S.lessons[nx.id] ? 'Продолжить' : 'Начать'}</span></span></button>`;
  } else {
    h += `<p class="muted" style="text-align:center">Все уроки пройдены. Повторяй слова каждый день, чтобы держать серию.</p>`;
  }
  if (due) h += `<button class="btn ghost block" data-act="review-start">Повторить слова · ${due}</button>`;
  h += `</div>`;
  UNITS.forEach(u => {
    const ls = LESSONS.filter(l => l.unit === u.id);
    const done = ls.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length;
    h += `<h2 class="section-title">${esc(u.title)}</h2><p class="section-sub">${esc(u.sub)} · пройдено ${done} из ${ls.length}</p><div class="lessons">`;
    ls.forEach(l => {
      const n = LESSONS.indexOf(l) + 1, st = S.lessons[l.id];
      const cls = st && st.done ? 'done' : nx === l ? 'next' : '';
      h += `<button class="lesson-row ${cls}" data-act="open" data-id="${l.id}">
        <span class="n">${st && st.done ? I.check(20) : n}</span>
        <span class="grow"><span class="t">${esc(l.title)}</span><span class="s" style="display:block">${esc(l.goal)}</span></span>
        ${st && st.best != null ? `<span class="pct">${st.best}%</span>` : ''}
      </button>`;
    });
    h += `</div>`;
  });
  $view.innerHTML = h;
}

// ---------- урок ----------
function viewLesson() {
  const l = LESSONS.find(x => x.id === route.id);
  if (!l) return goTab('home');
  const n = LESSONS.indexOf(l) + 1;
  const tab = route.tab || 'theory';
  topBar('Урок ' + n, { backBtn: true });
  const tabs = [['theory', 'Теория'], ['words', 'Слова'], ...(l.dialog ? [['dialog', 'Диалог']] : [])];
  let h = coverHTML(l.id) + `<div class="lesson-head"><h2 style="font-size:24px">${esc(l.title)}</h2><p class="goal">${esc(l.goal)}</p></div>
    <div class="seg" role="tablist">${tabs.map(([k, t]) => `<button role="tab" aria-selected="${tab === k}" data-act="ltab" data-tab="${k}">${t}</button>`).join('')}</div>`;
  if (tab === 'theory') {
    h += `<article class="theory">${l.theory.replace(/<table>/g, '<div class="tbl-wrap"><table>').replace(/<\/table>/g, '</table></div>')}</article>`;
    h += `<p class="muted small" style="margin-top:18px">Нажми на любое турецкое слово, чтобы его услышать.</p>`;
  } else if (tab === 'words') {
    h += `<div class="row" style="margin-bottom:12px"><p class="muted small grow">${l.words.length} ${plural(l.words.length, 'слово', 'слова', 'слов')}. Полоски — насколько хорошо ты его знаешь.</p></div><div class="word-list">`;
    l.words.forEach(([tr, ru]) => { h += wordRow(tr, ru); });
    h += `</div>`;
  } else {
    h += `<div class="dialog">`;
    const first = l.dialog[0][0];
    l.dialog.forEach(([who, tr, ru]) => {
      h += `<div class="line ${who === first ? '' : 'me'}"><div class="who">${esc(who)}</div>
        <button class="bubble" data-act="say" data-text="${esc(tr)}"><div class="tr">${esc(tr)}</div><div class="ru">${esc(ru)}</div></button></div>`;
    });
    h += `</div><button class="btn ghost block" style="margin-top:16px" data-act="say-all">${I.speaker()} Прослушать весь диалог</button>`;
  }
  const st = S.lessons[l.id];
  h += `<div class="sticky-cta"><button class="btn accent block" data-act="practice" data-id="${l.id}">${st && st.done ? 'Практика ещё раз' : 'Перейти к практике'}</button></div>`;
  $view.innerHTML = h;
  S.lessons[l.id] = Object.assign({ best: null, runs: 0, done: false }, S.lessons[l.id], { seen: true });
  save();
}

function coverHTML(id, small) {
  const p = PHOTOS[id];
  if (!p) return '';
  const [src, cap, author, lic, page] = p;
  return `<figure class="cover ${small ? 'small' : ''}"><img src="${esc(src)}" alt="${esc(cap)}" loading="lazy" decoding="async" onerror="if(!this.dataset.r){this.dataset.r=1;setTimeout(()=>{this.src=this.src+'?r=1'},1500)}else{this.closest('figure').classList.add('noimg')}">
    ${small ? '' : `<figcaption>${esc(cap)} · <a href="${esc(page)}" target="_blank" rel="noopener">Фото: ${esc(author)}, ${esc(lic)}</a></figcaption>`}</figure>`;
}

function wordRow(tr, ru, extra = '') {
  const w = wstate(tr);
  const b = w ? w.b : 0;
  return `<button class="word" data-act="say" data-text="${esc(tr)}">
    <span class="spk">${PICS[tr] ? `<span class="pic">${PICS[tr]}</span>` : I.speaker(18)}</span>
    <span class="grow"><span class="tr" style="display:block">${esc(tr)}</span><span class="ru">${esc(ru)}</span>${extra}</span>
    <span class="lvl" aria-label="Уровень ${b} из 5">${[1, 2, 3, 4, 5].map(i => `<i class="${b >= i ? 'on' : ''}"></i>`).join('')}</span>
  </button>`;
}

// ---------- задания ----------
function acceptedTr(w) {
  const set = new Set([w.tr]);
  WORDS.forEach(x => { if (x.ru === w.ru) set.add(x.tr); });
  return [...set];
}
function wordTask(w, pool) {
  const st = wstate(w.tr);
  const types = ['tr2ru', 'ru2tr', 'tr2ru', 'type'];
  if (st && st.b >= 2) types.push('type', 'type');
  if (canListen()) types.push('listen', 'listen');
  if (PICS[w.tr]) types.push('pic', 'pic', 'pic');
  const t = types[Math.floor(Math.random() * types.length)];
  const others = pool.filter(x => x.tr !== w.tr && x.ru !== w.ru);
  const distract = (key) => {
    const seen = new Set([w[key]]);
    const out = [];
    for (const x of shuffle(others.length >= 3 ? others : WORDS.filter(x => x.tr !== w.tr && x.ru !== w.ru))) {
      if (!seen.has(x[key])) { seen.add(x[key]); out.push(x[key]); }
      if (out.length === 3) break;
    }
    return out;
  };
  if (t === 'tr2ru') return { kind: 'choice', prompt: 'Как переводится?', big: w.tr, bigTr: true, options: shuffle([w.ru, ...distract('ru')]), answer: w.ru, say: w.tr, word: w.tr };
  if (t === 'ru2tr') return { kind: 'choice', prompt: 'Выбери перевод', big: w.ru, options: shuffle([w.tr, ...distract('tr')]), answer: w.tr, say: w.tr, word: w.tr };
  if (t === 'pic') {
    const withPic = shuffle((others.length >= 3 ? others : WORDS).filter(x => PICS[x.tr] && x.tr !== w.tr));
    const opts = [w.tr];
    for (const x of [...withPic, ...shuffle(others)]) { if (!opts.includes(x.tr)) opts.push(x.tr); if (opts.length === 4) break; }
    return { kind: 'choice', prompt: 'Что на картинке?', pic: PICS[w.tr], options: shuffle(opts), answer: w.tr, say: w.tr, word: w.tr, note: w.tr + ' — ' + w.ru };
  }
  if (t === 'listen') return { kind: 'choice', prompt: 'Что ты слышишь?', listen: true, options: shuffle([w.tr, ...distract('tr')]), answer: w.tr, say: w.tr, word: w.tr, note: w.tr + ' — ' + w.ru };
  return { kind: 'type', prompt: 'Напиши по-турецки', big: w.ru, answers: acceptedTr(w), say: w.tr, word: w.tr };
}
function exTask(l, i) {
  const e = l.ex[i];
  const base = { ex: [l.id, i], note: e[3] || '' };
  if (e[0] === 'c') {
    const ans = e[2][0];
    return Object.assign(base, { kind: 'choice', prompt: 'Выбери правильный вариант', big: e[1], options: shuffle(e[2]), answer: ans, say: isTurkish(ans) ? ans : '' });
  }
  if (e[0] === 't') {
    const answers = e[2].split('|');
    return Object.assign(base, { kind: 'type', prompt: /[→:+]|^Напиши|^Число/.test(e[1]) ? 'Напиши ответ' : 'Переведи на турецкий', big: e[1], answers, say: answers[0] });
  }
  const words = e[2].replace(/[.,!?;:]/g, '').split(/\s+/);
  const inSent = new Set(words.map(w => norm(w)));
  const extra = pick(l.words.map(x => x[0]).filter(x => !x.includes(' ') && !inSent.has(norm(x))), words.length > 5 ? 2 : 3);
  return Object.assign(base, { kind: 'order', prompt: 'Составь фразу', big: e[1], answer: e[2], tiles: shuffle([...words, ...extra]), say: e[2] });
}

function lessonSession(l) {
  const done = new Set(S.ex[l.id] || []);
  const idx = l.ex.map((_, i) => i);
  const fresh = shuffle(idx.filter(i => !done.has(i)));
  const old = shuffle(idx.filter(i => done.has(i)));
  const exN = Math.min(l.ex.length, 11);
  const exs = [...fresh, ...old].slice(0, exN).map(i => exTask(l, i));
  const pool = l.words.map(([tr, ru]) => ({ tr, ru }));
  const sortedWords = shuffle(pool).sort((a, b) => ((wstate(a.tr) || { b: -1 }).b - (wstate(b.tr) || { b: -1 }).b));
  const wts = sortedWords.slice(0, 7).map(w => wordTask(w, pool));
  // слова чуть раньше грамматики: сначала разогрев
  const tasks = [...shuffle(wts.slice(0, 3)), ...shuffle([...wts.slice(3), ...exs])];
  return newSession({ type: 'lesson', lessonId: l.id, tasks });
}
function reviewSession() {
  const due = dueWords().slice(0, 15);
  let list = due;
  if (list.length < 5) {
    const seen = Object.keys(S.words).filter(tr => !due.includes(tr) && BY_TR.has(tr));
    list = list.concat(pick(seen, 12 - list.length));
  }
  if (!list.length) return null;
  const pool = list.map(tr => BY_TR.get(tr)[0]);
  const tasks = shuffle(pool).map(w => wordTask(w, WORDS.filter(x => x.li === w.li)));
  return newSession({ type: 'review', tasks });
}
function mistakesSession() {
  const weak = Object.keys(S.words).filter(tr => S.words[tr].b <= 1 && S.words[tr].n > 1 && BY_TR.has(tr)).slice(0, 15);
  if (!weak.length) return null;
  const tasks = shuffle(weak).map(tr => { const w = BY_TR.get(tr)[0]; return wordTask(w, WORDS.filter(x => x.li === w.li)); });
  return newSession({ type: 'review', tasks });
}
function newSession(o) {
  return Object.assign({ i: 0, total: o.tasks.length, firstOk: 0, xp: 0, mistakes: [], startMet: metToday(), answered: false, sel: null, chosen: [], startedAt: Date.now() }, o);
}

// ---------- экран практики ----------
function viewPractice() {
  if (!session) return goTab('home');
  $top.hidden = true;
  const t = session.tasks[session.i];
  const pct = Math.round(session.i / session.tasks.length * 100);
  let h = `<div class="practice"><div class="p-top">
    <button class="icon-btn" data-act="quit" aria-label="Выйти">${I.close}</button>
    <div class="bar"><i style="width:${pct}%"></i></div>
    <span class="chip flame ${metToday() ? '' : 'off'}">${I.flame(16)}${shownStreak()}</span>
  </div><div class="task">`;
  h += `<p class="prompt">${esc(t.prompt)}${t.retry ? ' · ещё раз' : ''}</p>`;
  if (t.pic) {
    h += `<div class="pic-big" aria-hidden="true">${t.pic}</div>`;
  } else if (t.listen) {
    h += `<button class="spk-big listen-btn" data-act="say" data-text="${esc(t.say)}" aria-label="Прослушать">${I.speaker(46)}</button>
      <button class="btn ghost small" style="margin:0 auto" data-act="say-slow" data-text="${esc(t.say)}">Медленнее</button>`;
  } else if (t.big) {
    const trBig = t.bigTr;
    h += `<div class="big ${trBig ? '' : 'ru'}">${trBig ? `<button class="spk-big" data-act="say" data-text="${esc(t.say)}" aria-label="Прослушать">${I.speaker(24)}</button>` : ''}<span>${esc(t.big)}</span></div>`;
  }
  if (t.kind === 'choice') {
    h += `<div class="options">` + t.options.map((o, i) => {
      let cls = '';
      if (session.answered) { if (o === t.answer) cls = 'right'; else if (o === session.sel) cls = 'wrong'; }
      return `<button class="opt ${cls}" data-act="opt" data-i="${i}" aria-pressed="${session.sel === o}" ${session.answered ? 'disabled' : ''}><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`;
    }).join('') + `</div>`;
  } else if (t.kind === 'type') {
    h += `<textarea class="answer-input" id="ans" rows="3" lang="tr" placeholder="Ответ по-турецки" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ${session.answered ? 'disabled' : ''}>${esc(session.typed || '')}</textarea>
      <div class="tr-keys">${['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'â'].map(c => `<button data-act="key" data-k="${c}" tabindex="-1">${c}</button>`).join('')}</div>`;
  } else if (t.kind === 'order') {
    h += `<div class="tiles answer">${session.chosen.map((ti, k) => `<button class="tile" data-act="untile" data-k="${k}" ${session.answered ? 'disabled' : ''}>${esc(t.tiles[ti])}</button>`).join('')}</div>
      <div class="tiles">${t.tiles.map((w, ti) => `<button class="tile ${session.chosen.includes(ti) ? 'used' : ''}" data-act="tile" data-i="${ti}" ${session.answered ? 'disabled' : ''}>${esc(w)}</button>`).join('')}</div>`;
  }
  h += `</div>`;
  if (!session.answered) {
    const ready = t.kind === 'choice' ? session.sel != null : t.kind === 'order' ? session.chosen.length > 0 : true;
    h += `<div class="p-actions"><button class="btn block" data-act="check" ${ready ? '' : 'disabled'} id="checkBtn">Проверить</button></div>`;
  } else {
    h += `<div style="height:190px"></div>`;
  }
  h += `</div>`;
  if (session.answered) h += feedbackHTML();
  $view.innerHTML = h;
  if (t.kind === 'type' && !session.answered) {
    const ta = document.getElementById('ans');
    ta.addEventListener('input', () => { session.typed = ta.value; });
    setTimeout(() => ta.focus(), 50);
  }
  if (t.listen && !session.answered && !session.spoken) { session.spoken = true; setTimeout(() => speak(t.say), 250); }
}

function feedbackHTML() {
  const r = session.result, t = session.tasks[session.i];
  const shown = t.kind === 'type' ? pretty(t.answers[0]) : t.kind === 'order' ? t.answer : t.answer;
  let body = '';
  if (r.ok && r.almost) body = `<div class="fb-ans">Правильно пишется: ${esc(shown)}</div><div class="fb-note">Засчитано, но обрати внимание на турецкие буквы.</div>`;
  else if (!r.ok) body = `<div class="fb-ans">Правильный ответ: ${esc(shown)}</div>`;
  if (t.note) body += `<div class="fb-note">${esc(t.note)}</div>`;
  return `<div class="feedback ${r.ok ? 'ok' : 'bad'}" role="status"><div class="feedback-in">
    <div class="fb-title">${r.ok ? I.check() : I.cross()} ${r.ok ? praise() : 'Не совсем'}</div>${body}
    <button class="btn ${r.ok ? 'ok' : 'bad'} block" data-act="next" id="nextBtn">Дальше</button></div></div>`;
}
const praise = () => ['Верно!', 'Отлично!', 'Так держать!', 'Правильно!', 'Супер!', 'Harika!', 'Çok iyi!'][Math.floor(Math.random() * 7)];

function check() {
  const t = session.tasks[session.i];
  let ok = false, almost = false;
  if (t.kind === 'choice') {
    if (session.sel == null) return;
    ok = session.sel === t.answer;
  } else if (t.kind === 'type') {
    const v = (session.typed || '').trim();
    if (!v) return;
    const n = norm(v);
    const idx = t.answers.findIndex(a => norm(a) === n);
    if (idx >= 0) ok = true;
    else if (t.answers.some(a => loose(a) === loose(v))) { ok = true; almost = true; }
  } else if (t.kind === 'order') {
    const v = session.chosen.map(i => t.tiles[i]).join(' ');
    ok = norm(v) === norm(t.answer);
  }
  session.answered = true;
  session.result = { ok, almost };
  if (!t.retry) {
    if (ok) { session.firstOk++; session.xp++; addXP(1); }
    if (t.word) markWord(t.word, ok && !almost);
    if (t.ex && ok) { const arr = S.ex[t.ex[0]] || (S.ex[t.ex[0]] = []); if (!arr.includes(t.ex[1])) arr.push(t.ex[1]); }
    save();
  }
  if (!ok) {
    session.mistakes.push({ q: t.listen ? 'На слух' : t.pic ? t.pic : (t.big || t.say), a: t.kind === 'type' ? pretty(t.answers[0]) : t.answer });
    if (!t.retry) session.tasks.push(Object.assign({}, t, { retry: true, options: t.options ? shuffle(t.options) : t.options, tiles: t.tiles ? shuffle(t.tiles) : t.tiles }));
  }
  if (S.autoplay && t.say) speak(t.say);
  viewPractice();
  const nb = document.getElementById('nextBtn');
  if (nb) nb.focus({ preventScroll: true });
}

function nextTask() {
  session.i++;
  session.answered = false; session.sel = null; session.typed = ''; session.chosen = []; session.spoken = false;
  if (session.i >= session.tasks.length) return finish();
  viewPractice();
  window.scrollTo(0, 0);
}

function finish() {
  const s = session;
  const acc = Math.round(s.firstOk / s.total * 100);
  let bonus = 5;
  if (s.mistakes.length === 0) bonus += 5;
  s.xp += bonus;
  const res = addXP(bonus);
  if (s.type === 'lesson') {
    const st = S.lessons[s.lessonId] = Object.assign({ best: null, runs: 0, done: false }, S.lessons[s.lessonId]);
    st.runs++;
    st.best = Math.max(st.best || 0, acc);
    if (acc >= 80) st.done = true;
    s.lessonDone = acc >= 80;
  }
  s.acc = acc;
  s.celebrate = !s.startMet && metToday();
  s.freezeEarned = res.freezeEarned || false;
  save();
  route = { name: 'result' };
  render();
  if (s.celebrate) speak('Harika!');
}

function viewResult() {
  const s = session;
  if (!s) return goTab('home');
  $top.hidden = true;
  let h = `<div class="result">`;
  if (s.celebrate) {
    h += `<div class="streak-hero"><div class="flame-huge">${I.flame(120)}</div><div class="n">${S.streak}</div>
      <div class="l">${plural(S.streak, 'день', 'дня', 'дней')} подряд!</div>
      <p class="muted">Дневная цель выполнена. Возвращайся завтра, чтобы огонёк не погас.</p>
      ${s.freezeEarned ? `<p class="chip ice" style="margin-top:6px">${I.ice(16)} Получена заморозка серии</p>` : ''}</div>
      <div class="card">${weekStrip()}</div>`;
  } else {
    const title = s.type === 'lesson' ? (s.lessonDone ? 'Урок пройден!' : 'Почти получилось') : 'Повторение завершено';
    h += `<h2>${title}</h2>`;
    if (s.type === 'lesson' && !s.lessonDone) h += `<p class="muted">Урок засчитывается от 80% верных ответов с первой попытки. Перечитай теорию и попробуй ещё раз.</p>`;
  }
  h += `<div class="stats">
    <div class="stat xp"><div class="v">+${s.xp}</div><div class="l">XP</div></div>
    <div class="stat"><div class="v">${s.acc}%</div><div class="l">с первой попытки</div></div>
    <div class="stat"><div class="v">${Math.min(todayXP(), 999)}/${S.goal}</div><div class="l">XP сегодня</div></div>
    <div class="stat"><div class="v">${Math.max(1, Math.round((Date.now() - s.startedAt) / 60000))}</div><div class="l">мин</div></div>
  </div>`;
  if (s.mistakes.length) {
    const uniq = []; const seen = new Set();
    s.mistakes.forEach(m => { const k = m.q + '|' + m.a; if (!seen.has(k)) { seen.add(k); uniq.push(m); } });
    h += `<div class="card mistakes"><b>Над чем поработать</b><ul>${uniq.map(m => `<li><div class="q">${esc(m.q)}</div><div class="a">${esc(m.a)}</div></li>`).join('')}</ul></div>`;
  }
  h += `<div class="stack">`;
  if (s.type === 'lesson' && s.lessonDone) {
    const nx = nextLesson();
    if (nx) h += `<button class="btn block" data-act="open-fresh" data-id="${nx.id}">Следующий урок</button>`;
    else h += `<button class="btn block" data-act="home">На главную</button>`;
  } else {
    h += `<button class="btn block" data-act="home">Продолжить</button>`;
  }
  if (s.type === 'lesson') h += `<button class="btn ghost block" data-act="practice" data-id="${s.lessonId}">Ещё раз</button>`;
  h += `</div></div>`;
  $view.innerHTML = h;
}

// ---------- повторение ----------
function viewReview() {
  topBar('Повторение');
  const due = dueWords();
  const total = Object.keys(S.words).length;
  const weak = Object.keys(S.words).filter(tr => S.words[tr].b <= 1 && S.words[tr].n > 1).length;
  let h = `<div class="stack">`;
  h += `<section class="card stack"><h2 style="font-size:20px">${due.length ? `${due.length} ${plural(due.length, 'слово ждёт', 'слова ждут', 'слов ждут')} повторения` : 'На сегодня всё повторено'}</h2>
    <p class="muted">Слова возвращаются через 1, 3, 7, 14 и 30 дней. Ошибся — слово вернётся завтра. Так они переходят в долгую память.</p>
    ${due.length ? `<button class="btn accent block" data-act="review-start">Повторить</button>` : total ? `<button class="btn ghost block" data-act="review-start">Тренировка на знакомых словах</button>` : '<p class="muted">Пройди первый урок, и здесь появятся слова.</p>'}
    ${weak ? `<button class="btn ghost block" data-act="mistakes-start">Работа над ошибками · ${weak}</button>` : ''}
  </section>`;
  h += `<div class="stats" style="grid-template-columns:repeat(3,1fr)">
    <div class="stat"><div class="v">${total}</div><div class="l">в изучении</div></div>
    <div class="stat"><div class="v">${learnedCount()}</div><div class="l">выучено</div></div>
    <div class="stat"><div class="v">${WORDS.length ? new Set(WORDS.map(w => w.tr)).size : 0}</div><div class="l">всего в курсе</div></div></div>`;
  if (due.length) {
    h += `<h2 class="section-title" style="font-size:18px">Ждут повторения</h2><div class="word-list">${due.slice(0, 40).map(tr => wordRow(tr, BY_TR.get(tr)[0].ru)).join('')}</div>`;
  }
  h += `</div>`;
  $view.innerHTML = h;
}

// ---------- словарь ----------
function viewDict() {
  topBar('Словарь');
  const q = route.q || '';
  $view.innerHTML = `<input class="search" id="q" type="search" placeholder="Поиск по-турецки или по-русски" value="${esc(q)}" autocomplete="off" autocapitalize="off" spellcheck="false" lang="tr">
    <p class="muted small" style="margin:10px 2px">Нажми на слово, чтобы услышать произношение.</p><div class="word-list" id="dl"></div>`;
  const inp = document.getElementById('q');
  const draw = () => {
    route.q = inp.value;
    const nq = norm(inp.value), lq = loose(inp.value);
    const seen = new Map();
    WORDS.forEach(w => {
      const cur = seen.get(w.tr);
      if (cur) { if (!cur.ru.includes(w.ru)) cur.ru += '; ' + w.ru; }
      else seen.set(w.tr, { tr: w.tr, ru: w.ru, li: w.li });
    });
    let list = [...seen.values()];
    if (nq) list = list.filter(w => norm(w.tr).includes(nq) || loose(w.tr).includes(lq) || w.ru.toLowerCase().includes(inp.value.trim().toLowerCase()));
    else list.sort((a, b) => a.tr.localeCompare(b.tr, 'tr'));
    document.getElementById('dl').innerHTML = list.length
      ? list.slice(0, 300).map(w => wordRow(w.tr, w.ru, ` <span class="ru">· урок ${w.li + 1}</span>`)).join('') + (list.length > 300 ? `<p class="muted small">Показаны первые 300. Уточни поиск.</p>` : '')
      : `<p class="empty">Ничего не нашлось</p>`;
  };
  inp.addEventListener('input', draw);
  draw();
}

// ---------- профиль ----------
function calendar() {
  const today = dayNum();
  const start = today - weekIdx(today) - 28;
  const met = new Set(S.met), fr = new Set(S.frozen);
  let h = `<div class="cal">${WEEK.map(d => `<div class="h">${d}</div>`).join('')}`;
  for (let d = start; d < start + 35; d++) {
    const cls = met.has(d) ? 'met' : fr.has(d) ? 'frozen' : d > today ? 'future' : '';
    h += `<div class="c ${cls} ${d === today ? 'today' : ''}">${dayDate(d).getDate()}</div>`;
  }
  return h + '</div>';
}
function viewProfile() {
  topBar('Профиль');
  const doneN = LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length;
  let h = `<div class="stack">`;
  h += `<section class="card stack"><div class="today-head"><div class="flame-big ${metToday() ? '' : 'off'}">${I.flame(30)}</div>
    <div class="grow"><div class="num">${shownStreak()} ${plural(shownStreak(), 'день', 'дня', 'дней')} подряд</div><div class="lbl">Рекорд: ${S.best} · заморозок: ${S.freezes} из 2</div></div></div>
    ${calendar()}
    <p class="muted small">Оранжевый — цель выполнена, синий — день спасла заморозка. Заморозку дают за каждые 7 дней подряд, она сама сработает, если пропустишь день.</p></section>`;
  h += `<div class="stats">
    <div class="stat xp"><div class="v">${S.total}</div><div class="l">XP всего</div></div>
    <div class="stat"><div class="v">${doneN}/${LESSONS.length}</div><div class="l">уроков</div></div>
    <div class="stat"><div class="v">${learnedCount()}</div><div class="l">слов выучено</div></div>
    <div class="stat"><div class="v">${S.met.length}</div><div class="l">дней с целью</div></div></div>`;
  h += `<section class="card stack"><h2 style="font-size:18px">Дневная цель</h2><div class="goals">${GOALS.map(g => `<button class="goal-opt" data-act="goal" data-xp="${g.xp}" aria-pressed="${S.goal === g.xp}"><div class="g1">${g.name} · ${g.xp} XP</div><div class="g2">${g.note}</div></button>`).join('')}</div>
    <p class="muted small">Одна практика урока даёт 15–25 XP: по 1 за каждый верный ответ и бонус за завершение.</p></section>`;
  h += `<section class="card"><h2 style="font-size:18px;margin-bottom:4px">Настройки</h2>
    <div class="setting"><div class="grow"><div>Озвучка</div><div class="muted small">${trVoice ? 'Голос: ' + esc(trVoice.name) : 'Турецкий голос не найден, задания на слух отключены'}</div></div><button class="switch" role="switch" aria-checked="${S.voice}" data-act="toggle" data-k="voice" aria-label="Озвучка"></button></div>
    <div class="setting"><div class="grow"><div>Озвучивать ответ</div><div class="muted small">После проверки звучит правильная фраза</div></div><button class="switch" role="switch" aria-checked="${S.autoplay}" data-act="toggle" data-k="autoplay" aria-label="Озвучивать ответ"></button></div>
    <div class="setting"><div class="grow"><div>Скорость речи</div></div><select data-act="rate" style="height:40px;border-radius:10px;border:1px solid var(--line);background:var(--surface);padding:0 8px">${[[0.7, 'Медленно'], [0.85, 'Спокойно'], [1, 'Обычно']].map(([v, t]) => `<option value="${v}" ${S.rate === v ? 'selected' : ''}>${t}</option>`).join('')}</select></div>
    <div class="setting"><div class="grow"><div>Тема</div></div><select data-act="theme" style="height:40px;border-radius:10px;border:1px solid var(--line);background:var(--surface);padding:0 8px">${[['auto', 'Как в системе'], ['light', 'Светлая'], ['dark', 'Тёмная']].map(([v, t]) => `<option value="${v}" ${S.theme === v ? 'selected' : ''}>${t}</option>`).join('')}</select></div>
  </section>`;
  h += `<section class="card stack"><h2 style="font-size:18px">Прогресс</h2>
    <p class="muted small">Прогресс хранится на этом устройстве. Чтобы перенести его на другое, сохрани файл и загрузи его там.</p>
    <div class="row wrap"><button class="btn ghost small" data-act="export">Сохранить в файл</button>
    <label class="btn ghost small">Загрузить из файла<input type="file" accept="application/json,.json" id="importFile" hidden></label>
    <button class="btn ghost small" data-act="reset" style="color:var(--bad)">Сбросить всё</button></div></section>`;
  h += `<p class="muted small" style="text-align:center;padding:10px 0">Турецкий с нуля · ${LESSONS.length} уроков · ${new Set(WORDS.map(w => w.tr)).size} слов</p></div>`;
  $view.innerHTML = h;
  const f = document.getElementById('importFile');
  f.addEventListener('change', () => {
    const file = f.files[0]; if (!file) return;
    file.text().then(txt => {
      const s = JSON.parse(txt);
      if (!s || s.v !== 1) throw new Error();
      S = Object.assign(defaults(), s); save(); applyTheme(); toast('Прогресс загружен'); render();
    }).catch(() => toast('Не получилось прочитать файл'));
  });
}

// ---------- мелочи ----------
function plural(n, one, few, many) {
  const a = Math.abs(n) % 100, b = a % 10;
  if (a > 10 && a < 20) return many;
  if (b > 1 && b < 5) return few;
  if (b === 1) return one;
  return many;
}
let toastTimer;
function toast(msg) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg; el.setAttribute('role', 'status');
  document.body.appendChild(el);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.remove(), 2400);
}
function applyTheme() {
  if (S.theme === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', S.theme);
}
function startSession(s, emptyMsg) {
  if (!s) { toast(emptyMsg || 'Пока нечего повторять'); return; }
  session = s;
  go({ name: 'practice' });
}
function sayDialog() {
  const l = LESSONS.find(x => x.id === route.id);
  if (!l || !l.dialog || !hasTTS) return;
  speechSynthesis.cancel();
  l.dialog.forEach(([, tr]) => {
    const u = new SpeechSynthesisUtterance(tr);
    u.lang = 'tr-TR'; if (trVoice) u.voice = trVoice; u.rate = S.rate;
    speechSynthesis.speak(u);
  });
}

// ---------- события ----------
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if (!b) {
    const tb = e.target.closest('.theory b');
    if (tb) speak(tb.textContent.replace(/[—–]/g, ' '));
    return;
  }
  const a = b.dataset.act;
  switch (a) {
    case 'tab': goTab(b.dataset.tab); break;
    case 'back': back(); break;
    case 'home': session = null; goTab('home'); break;
    case 'open': go({ name: 'lesson', id: b.dataset.id, tab: 'theory' }); break;
    case 'open-fresh': session = null; stack.length = 0; route = { name: 'home' }; go({ name: 'lesson', id: b.dataset.id, tab: 'theory' }); break;
    case 'ltab': route.tab = b.dataset.tab; render(); break;
    case 'practice': {
      const l = LESSONS.find(x => x.id === b.dataset.id);
      if (route.name === 'result') { session = lessonSession(l); route = { name: 'practice' }; render(); }
      else startSession(lessonSession(l));
      break;
    }
    case 'review-start': startSession(reviewSession(), 'Пройди хотя бы один урок, чтобы появились слова'); break;
    case 'mistakes-start': startSession(mistakesSession(), 'Ошибок нет'); break;
    case 'say': speak(b.dataset.text); break;
    case 'say-slow': speak(b.dataset.text, 0.6); break;
    case 'say-all': sayDialog(); break;
    case 'quit':
      if (route.name === 'practice') { if (session.i > 0 && !confirm('Выйти из практики? Набранные очки сохранятся.')) break; session = null; back(); }
      else back();
      break;
    case 'opt': {
      if (session.answered) break;
      session.sel = session.tasks[session.i].options[+b.dataset.i];
      viewPractice();
      break;
    }
    case 'tile': {
      const i = +b.dataset.i;
      if (!session.chosen.includes(i)) { session.chosen.push(i); viewPractice(); }
      break;
    }
    case 'untile': session.chosen.splice(+b.dataset.k, 1); viewPractice(); break;
    case 'key': {
      const ta = document.getElementById('ans');
      if (!ta) break;
      const s = ta.selectionStart, en = ta.selectionEnd;
      ta.value = ta.value.slice(0, s) + b.dataset.k + ta.value.slice(en);
      ta.selectionStart = ta.selectionEnd = s + 1;
      session.typed = ta.value;
      ta.focus();
      break;
    }
    case 'check': check(); break;
    case 'next': nextTask(); break;
    case 'goal': S.goal = +b.dataset.xp; if (todayXP() >= S.goal && S.lastGoal !== dayNum()) addXP(0); save(); render(); break;
    case 'toggle': S[b.dataset.k] = !S[b.dataset.k]; save(); render(); break;
    case 'export': {
      const blob = new Blob([JSON.stringify(S)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = 'turkish-progress-' + isoDay(dayNum()) + '.json';
      document.body.appendChild(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      break;
    }
    case 'reset':
      if (confirm('Удалить весь прогресс, серию и слова на этом устройстве?')) { S = defaults(); save(); applyTheme(); render(); toast('Прогресс сброшен'); }
      break;
  }
});
document.addEventListener('change', e => {
  const el = e.target;
  if (el.dataset.act === 'rate') { S.rate = +el.value; save(); speak('Merhaba, nasılsın?'); }
  if (el.dataset.act === 'theme') { S.theme = el.value; save(); applyTheme(); }
});
// pointerdown на турецких буквах, чтобы поле ввода не теряло фокус и клавиатура не пряталась
document.addEventListener('pointerdown', e => { if (e.target.closest('.tr-keys button')) e.preventDefault(); });
document.addEventListener('keydown', e => {
  if (route.name !== 'practice' || !session) return;
  const t = session.tasks[session.i];
  if (e.key === 'Enter') {
    if (e.target.id === 'ans' || e.target === document.body || e.target.closest('.practice') || e.target.id === 'nextBtn') {
      e.preventDefault();
      if (session.answered) nextTask(); else check();
    }
  } else if (!session.answered && t.kind === 'choice' && /^[1-9]$/.test(e.key) && e.target.id !== 'ans') {
    const o = t.options[+e.key - 1];
    if (o != null) { session.sel = o; viewPractice(); }
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && route.name !== 'practice') render();
});

applyTheme();
history.replaceState({ d: 0 }, '');
render();
})();
