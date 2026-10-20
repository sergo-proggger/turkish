// Виджет «Турецкий с нуля» для приложения Scriptable (iPhone).
// Назови этот скрипт в Scriptable точно: Turkish
// Курс передаёт сюда прогресс кнопкой «Обновить виджет». Если день пропущен,
// виджет сам пересчитает серию в полночь, даже без обновления.

const APP_URL = 'https://sergo-proggger.github.io/turkish/';
const FILE = 'turkish-streak.json';

const ORANGE = new Color('#E8590C');
const ORANGE_SOFT = new Color('#E8590C', 0.16);
const BLUE = new Color('#2C79B0');
const GREEN = new Color('#2E9E5B');
const GRAY = new Color('#8E8E93');
const EMPTY = new Color('#8E8E93', 0.22);
const BG = Color.dynamic(new Color('#FFFDF9'), new Color('#1C1B18'));
const FG = Color.dynamic(new Color('#1F1C18'), new Color('#F1ECE3'));
const MUTED = Color.dynamic(new Color('#6E665B'), new Color('#A59C8E'));

const fm = FileManager.local();
const path = fm.joinPath(fm.documentsDirectory(), FILE);

// 1. Пришли новые данные из курса — сохраняем
const params = args.queryParameters || {};
if (params.data) {
  try { JSON.parse(params.data); fm.writeString(path, params.data); } catch (e) {}
}
let D = null;
try { if (fm.fileExists(path)) D = JSON.parse(fm.readString(path)); } catch (e) {}

// 2. Считаем серию на сегодня
const pad = n => String(n).padStart(2, '0');
const iso = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const diffDays = (a, b) => Math.round((parse(a) - parse(b)) / 864e5);
const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
const now = new Date();
const today = iso(now);

let streak = 0, status = 'none', freezes = 0, best = 0, todayXP = 0, goal = 20;
const met = new Set(), frozen = new Set();
if (D) {
  best = D.b || 0; goal = D.g || 20; freezes = D.f || 0;
  (D.m || []).forEach(x => met.add(x));
  (D.fr || []).forEach(x => frozen.add(x));
  todayXP = D.td === today ? (D.tx || 0) : 0;
  if (D.lg && D.s > 0) {
    const gap = diffDays(today, D.lg);
    if (gap <= 0) { status = 'done'; streak = D.s; }
    else if (gap === 1) { status = 'pending'; streak = D.s; }
    else {
      const missed = gap - 1;
      if (freezes >= missed) {
        status = 'frozen'; streak = D.s; freezes -= missed;
        for (let i = 1; i <= missed; i++) frozen.add(addDays(D.lg, i));
      } else { status = 'lost'; streak = 0; }
    }
  }
  if (met.has(today)) status = 'done';
}

const plural = (n, one, few, many) => {
  const a = Math.abs(n) % 100, b = a % 10;
  if (a > 10 && a < 20) return many;
  if (b > 1 && b < 5) return few;
  if (b === 1) return one;
  return many;
};
const STATUS = {
  done: ['Цель на сегодня выполнена', GREEN],
  pending: ['Позанимайся сегодня, серия ждёт', ORANGE],
  frozen: ['Заморозка спасла серию. Позанимайся сегодня', BLUE],
  lost: ['Серия сгорела. Начни новую сегодня', ORANGE],
  none: [D ? 'Выполни цель дня и начни серию' : 'Открой курс и нажми «Обновить виджет»', ORANGE]
};

// 3. Рисуем календарь: недели с понедельника, последняя неделя — текущая
function calendarImage(weeks, cell, gap, labels) {
  const cols = 7, labelH = labels ? 16 : 0;
  const w = cols * cell + (cols - 1) * gap;
  const h = labelH + weeks * cell + (weeks - 1) * gap;
  const ctx = new DrawContext();
  ctx.size = new Size(w, h);
  ctx.opaque = false;
  ctx.respectScreenScale = true;
  if (labels) {
    ctx.setFont(Font.mediumSystemFont(10));
    ctx.setTextColor(GRAY);
    ctx.setTextAlignedCenter();
    ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].forEach((t, i) => ctx.drawTextInRect(t, new Rect(i * (cell + gap), 0, cell, 14)));
  }
  const wd = (now.getDay() + 6) % 7;
  const start = addDays(today, -wd - (weeks - 1) * 7);
  for (let r = 0; r < weeks; r++) {
    for (let c = 0; c < cols; c++) {
      const day = addDays(start, r * 7 + c);
      const x = c * (cell + gap), y = labelH + r * (cell + gap);
      const rect = new Rect(x, y, cell, cell);
      const p = new Path();
      p.addRoundedRect(rect, cell * 0.28, cell * 0.28);
      const future = diffDays(day, today) > 0;
      if (future) continue;
      ctx.addPath(p);
      ctx.setFillColor(met.has(day) ? ORANGE : frozen.has(day) ? BLUE : EMPTY);
      ctx.fillPath();
      if (day === today && !met.has(day)) {
        const ring = new Path();
        ring.addRoundedRect(new Rect(x + 1, y + 1, cell - 2, cell - 2), cell * 0.26, cell * 0.26);
        ctx.addPath(ring);
        ctx.setStrokeColor(ORANGE);
        ctx.setLineWidth(2);
        ctx.strokePath();
      }
    }
  }
  return ctx.getImage();
}

function barImage(width, height, pct, color) {
  const ctx = new DrawContext();
  ctx.size = new Size(width, height);
  ctx.opaque = false;
  ctx.respectScreenScale = true;
  const bg = new Path(); bg.addRoundedRect(new Rect(0, 0, width, height), height / 2, height / 2);
  ctx.addPath(bg); ctx.setFillColor(EMPTY); ctx.fillPath();
  if (pct > 0) {
    const fg = new Path(); fg.addRoundedRect(new Rect(0, 0, Math.max(height, width * Math.min(1, pct)), height), height / 2, height / 2);
    ctx.addPath(fg); ctx.setFillColor(color); ctx.fillPath();
  }
  return ctx.getImage();
}

function flame(size, on) {
  const sym = SFSymbol.named('flame.fill');
  sym.applyFont(Font.systemFont(size));
  return { img: sym.image, color: on ? ORANGE : GRAY };
}

// 4. Собираем виджет нужного размера
const family = config.widgetFamily || 'large';
const W = new ListWidget();
W.backgroundColor = BG;
W.url = APP_URL;
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 2);
W.refreshAfterDate = new Date(Math.min(tomorrow.getTime(), now.getTime() + 3 * 3600e3));
const on = status === 'done';
const [stText, stColor] = STATUS[status];

function header(stack, big) {
  const row = stack.addStack();
  row.centerAlignContent();
  const f = flame(big ? 30 : 20, on);
  const im = row.addImage(f.img);
  im.tintColor = f.color;
  im.imageSize = new Size(big ? 30 : 20, big ? 30 : 20);
  row.addSpacer(6);
  const t = row.addText('Турецкий');
  t.font = Font.semiboldSystemFont(big ? 15 : 13);
  t.textColor = MUTED;
  row.addSpacer();
  if (freezes > 0) {
    const s = SFSymbol.named('snowflake'); s.applyFont(Font.systemFont(13));
    const si = row.addImage(s.image); si.tintColor = BLUE; si.imageSize = new Size(13, 13);
    row.addSpacer(3);
    const ft = row.addText(String(freezes)); ft.font = Font.semiboldSystemFont(13); ft.textColor = BLUE;
  }
}

if (family === 'small') {
  W.setPadding(14, 14, 14, 14);
  header(W, false);
  W.addSpacer();
  const n = W.addText(String(streak));
  n.font = Font.heavyRoundedSystemFont(46);
  n.textColor = on ? ORANGE : FG;
  n.minimumScaleFactor = 0.6;
  const l = W.addText(plural(streak, 'день подряд', 'дня подряд', 'дней подряд'));
  l.font = Font.semiboldSystemFont(13); l.textColor = FG;
  W.addSpacer(8);
  W.addImage(calendarImage(1, 15, 4, false)).centerAlignImage();
} else if (family === 'medium') {
  W.setPadding(16, 16, 16, 16);
  const row = W.addStack();
  const left = row.addStack();
  left.layoutVertically();
  header(left, false);
  left.addSpacer();
  const n = left.addText(String(streak));
  n.font = Font.heavyRoundedSystemFont(50); n.textColor = on ? ORANGE : FG; n.minimumScaleFactor = 0.6;
  const l = left.addText(plural(streak, 'день подряд', 'дня подряд', 'дней подряд'));
  l.font = Font.semiboldSystemFont(14); l.textColor = FG;
  left.addSpacer(4);
  const st = left.addText(stText); st.font = Font.mediumSystemFont(11); st.textColor = stColor; st.lineLimit = 2;
  row.addSpacer(14);
  const right = row.addStack();
  right.layoutVertically();
  right.addSpacer();
  right.addImage(calendarImage(4, 17, 4, true));
  right.addSpacer();
} else {
  // большой: шапка, число дней, статус и XP, календарь на 4 недели, следующий урок
  W.setPadding(16, 18, 16, 18);
  header(W, true);
  W.addSpacer(4);
  const row = W.addStack();
  row.centerAlignContent();
  const n = row.addText(String(streak));
  n.font = Font.heavyRoundedSystemFont(52); n.textColor = on ? ORANGE : FG;
  row.addSpacer(8);
  const lw = row.addStack(); lw.layoutVertically();
  const l = lw.addText(plural(streak, 'день', 'дня', 'дней'));
  l.font = Font.boldSystemFont(20); l.textColor = FG;
  const l2 = lw.addText('подряд');
  l2.font = Font.mediumSystemFont(14); l2.textColor = MUTED;
  row.addSpacer();
  const rec = row.addStack(); rec.layoutVertically();
  const rv = rec.addText(String(Math.max(best, streak))); rv.font = Font.boldRoundedSystemFont(20); rv.textColor = FG; rv.rightAlignText();
  const rl = rec.addText('рекорд'); rl.font = Font.mediumSystemFont(12); rl.textColor = MUTED; rl.rightAlignText();

  const sr = W.addStack(); sr.centerAlignContent();
  const st = sr.addText(stText);
  st.font = Font.semiboldSystemFont(13); st.textColor = stColor; st.lineLimit = 1; st.minimumScaleFactor = 0.75;
  sr.addSpacer(6);
  const xt = sr.addText(Math.min(todayXP, goal) + '/' + goal + ' XP');
  xt.font = Font.mediumMonospacedSystemFont(12); xt.textColor = MUTED;
  W.addSpacer(6);
  const bar = W.addImage(barImage(300, 7, todayXP / goal, ORANGE));
  bar.resizable = true;
  W.addSpacer(10);
  const cal = W.addStack();
  cal.addSpacer();
  cal.addImage(calendarImage(4, 26, 7, true));
  cal.addSpacer();
  W.addSpacer();
  if (D) {
    const nx = W.addText('Дальше: ' + (D.n || '') + ' · слов: ' + (D.w || 0));
    nx.font = Font.semiboldSystemFont(12); nx.textColor = MUTED; nx.lineLimit = 1; nx.minimumScaleFactor = 0.8;
  }
}

if (config.runsInWidget) {
  Script.setWidget(W);
} else {
  await W.presentLarge();
}
Script.complete();
