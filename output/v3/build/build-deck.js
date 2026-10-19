/*
 * Builds output/v3/hei-ohjelmistokehitys-mita-kuuluu.pptx from the blueprint in
 * docs/19-presentation-structure.md.
 *
 * Visual theme: "Clean diff" – white slides, near-black text, one blue accent,
 * monospace code-review cues. Green + / red − only where something is added or lost.
 *
 *   NODE_PATH=<dir with node_modules> PPTX_SKILL_DIR=<pptx skill> node output/v3/build/build-deck.js
 */
"use strict";

const path = require("path");
const pptxgen = require("pptxgenjs");
const sharp = require("sharp");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fa = require("react-icons/fa6");

const ASSETS = path.join(__dirname, "..", "assets");
const OUT = path.join(__dirname, "..", "hei-ohjelmistokehitys-mita-kuuluu.pptx");
const A = (f) => path.join(ASSETS, f);

// ---------------------------------------------------------------- theme
const C = {
  ink: "111827", muted: "6B7280", line: "E5E7EB", faint: "F3F4F6", white: "FFFFFF",
  blue: "2563EB", blueSoft: "EFF6FF", blueLine: "BFDBFE",
  green: "1A7F37", greenSoft: "DAFBE1", red: "CF222E", redSoft: "FFEBE9", amber: "9A6700", amberSoft: "FFF8C5", amberLine: "EAD58A",
  code: "F6F8FA", codeLine: "D0D7DE", comment: "57606A", grey: "9CA3AF",
  dark: "0D1117", darkText: "E6EDF3", darkMuted: "8B949E", darkDim: "6E7681", darkBlue: "58A6FF",
};
const BODY = "Segoe UI";
const MONO = "Consolas";
const THEME = {
  name: "Clean diff",
  headFontFace: BODY,
  bodyFontFace: BODY,
  colors: {
    dk1: C.ink, lt1: C.white, dk2: C.muted, lt2: C.faint,
    accent1: C.blue, accent2: C.green, accent3: C.red, accent4: C.amber,
    accent5: C.muted, accent6: "0EA5E9", hlink: C.blue, folHlink: C.muted,
  },
};

const LABEL = {
  alku: "// 00 · alku", a: "// 01 · mikä muuttui", b: "// 02 · nopeus", c: "// 03 · tarkistus ja oppiminen",
  d: "// 04 · täällä", p: "// 05 · käytäntö", w: "// 06 · oikea projekti", loppu: "// loppu",
};

const AGENDA = [
  "Mikä ohjelmistokehityksessä oikeasti muuttui?",
  "Tuleeko meistä nopeampia?",
  "Kuka tarkistaa – ja kuka oppii?",
  "Mitä tämä tarkoittaa täällä Lakeudella?",
  "Miten agentin kanssa tehdään oikeasti töitä?",
];

// ---------------------------------------------------------------- helpers
const dims = {};
async function loadDims() {
  for (const f of require("fs").readdirSync(ASSETS).filter((f) => /\.(png|jpe?g)$/i.test(f))) {
    const m = await sharp(A(f)).metadata();
    dims[f] = { w: m.width, h: m.height };
  }
}
const aspect = (f) => dims[f].w / dims[f].h;

const iconCache = {};
async function icon(name, color, size = 256) {
  const key = `${name}-${color}`;
  if (!iconCache[key]) {
    const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(fa[name], { color: "#" + color, size: String(size) }));
    const buf = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
    iconCache[key] = "image/png;base64," + buf.toString("base64");
  }
  return iconCache[key];
}

function titleSize(t, width = 12.1) {
  for (const s of [32, 30, 28, 26]) if (t.length * 0.55 * s / 72 <= width) return s;
  return 26;
}

let pres;

function text(s, t, o) {
  s.addText(t, {
    x: o.x, y: o.y, w: o.w, h: o.h, fontFace: o.font ?? BODY, fontSize: o.size ?? 18, color: o.color ?? C.ink, bold: o.bold ?? false,
    italic: o.italic ?? false, align: o.align ?? "left", valign: o.valign ?? "top", margin: o.margin ?? 0, isTextBox: true,
    paraSpaceAfter: o.paraSpaceAfter, objectName: o.name, rotate: o.rot,
  });
}
const mono = (s, t, o) => text(s, t, { ...o, font: MONO });

function content(sec, title, sub) {
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: sec.title });
  mono(s, LABEL[sec.key], { x: 0.6, y: 0.22, w: 7.4, h: 0.3, size: 12, color: C.blue });
  s.addText(title, { placeholder: "title", fontSize: titleSize(title) });
  if (sub) s.addText(sub, { placeholder: "sub", fontSize: 18 });
  return s;
}
const plain = (sec, dark = false) => pres.addSlide({ masterName: dark ? "DARK" : "PLAIN", sectionTitle: sec.title });

function bottom(s, t, o = {}) {
  text(s, t, { x: 0.6, y: o.y ?? 6.08, w: o.w ?? 12.1, h: 0.6, size: o.size ?? 20, bold: true, valign: "middle", name: "Alarivi" });
}
function source(s, t, w = 12.1) {
  text(s, "Lähde: " + t, { x: 0.6, y: 6.86, w, h: 0.42, size: 11, color: C.muted, valign: "middle", name: "Lähde" });
}

function card(s, o) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: o.x, y: o.y, w: o.w, h: o.h, rectRadius: o.r ?? 0.1, fill: { color: o.fill ?? C.white }, line: { color: o.line ?? C.line, width: o.lw ?? 1 }, objectName: o.name ?? "Kortti",
  });
}

// "Comment" card for questions to the room and side notes.
function ask(s, o) {
  card(s, { x: o.x, y: o.y, w: o.w, h: o.h, fill: o.fill ?? C.blueSoft, line: o.line ?? C.blueLine });
  mono(s, o.label ?? "// kysymys yleisölle", { x: o.x + 0.25, y: o.y + 0.16, w: o.w - 0.5, h: 0.3, size: 12, color: o.labelColor ?? C.blue });
  text(s, o.text, { x: o.x + 0.25, y: o.y + 0.48, w: o.w - 0.5, h: o.h - 0.6, size: o.size ?? 20, bold: o.bold ?? true, valign: "middle" });
}

function gallupPin(s, q) {
  s.addText("↩ gallup: " + q, {
    shape: pres.shapes.ROUNDED_RECTANGLE, rectRadius: 0.15, x: 8.1, y: 0.17, w: 3.95, h: 0.36, fill: { color: C.blueSoft }, line: { color: C.blueLine },
    fontFace: MONO, fontSize: 11, color: C.blue, align: "center", valign: "middle", margin: 2, objectName: "Gallup-viittaus",
  });
}

function bigNumber(s, o) {
  text(s, o.num, { x: o.x, y: o.y, w: o.w, h: o.nh ?? 1.0, size: o.size ?? 56, bold: true, color: o.color ?? C.blue, valign: "middle", align: o.align });
  if (o.label) text(s, o.label, { x: o.x, y: o.y + (o.nh ?? 1.0) + 0.02, w: o.w, h: o.lh ?? 0.9, size: o.lsize ?? 18, align: o.align });
}

// GitHub-light code card. lines: [{t, kind: add|del|ctx|comment}]
function codeCard(s, lines, o) {
  card(s, { x: o.x, y: o.y, w: o.w, h: o.h, fill: C.code, line: C.codeLine, name: "Koodikortti" });
  if (o.header) {
    s.addShape(pres.shapes.LINE, { x: o.x, y: o.y + 0.45, w: o.w, h: 0, line: { color: C.codeLine, width: 1 } });
    mono(s, o.header, { x: o.x + 0.25, y: o.y + 0.08, w: o.w - 0.5, h: 0.3, size: 12, color: C.comment, valign: "middle" });
  }
  const top = o.y + (o.header ? 0.6 : 0.22), lh = o.lineH ?? 0.42;
  lines.forEach((ln, i) => {
    const y = top + i * lh;
    if (ln.kind === "add" || ln.kind === "del") {
      const bg = ln.kind === "add" ? C.greenSoft : C.redSoft;
      s.addShape(pres.shapes.RECTANGLE, { x: o.x + 0.05, y, w: o.w - 0.1, h: lh, fill: { color: bg }, line: { color: bg } });
    }
    if (!o.noSigns) mono(s, ln.kind === "add" ? "+" : ln.kind === "del" ? "−" : "", { x: o.x + 0.15, y, w: 0.3, h: lh, size: o.size ?? 18, color: ln.kind === "add" ? C.green : C.red, valign: "middle", bold: true });
    mono(s, ln.t, { x: o.x + (o.noSigns ? 0.25 : 0.45), y, w: o.w - 0.6, h: lh, size: o.size ?? 18, color: ln.kind === "comment" ? C.comment : C.ink, valign: "middle" });
  });
}

// One full-width diff line on a dark slide.
function darkDiff(s, sign, t, y, o = {}) {
  const add = sign === "+", del = sign === "−", h = o.h ?? 0.9;
  if (add || del) s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y, w: 12.1, h, fill: { color: add ? "12301D" : "3A1517" }, line: { color: add ? "12301D" : "3A1517" } });
  mono(s, sign, { x: 0.8, y, w: 0.5, h, size: o.size ?? 32, color: add ? "56D364" : del ? "F85149" : C.darkMuted, valign: "middle", bold: true });
  text(s, t, { x: 1.4, y, w: 11.1, h, size: o.size ?? 32, bold: o.bold ?? true, color: del ? "F0B7B3" : C.darkText, valign: "middle" });
}

function browser(s, o) {
  card(s, { x: o.x, y: o.y, w: o.w, h: o.h, name: "Selainikkuna" });
  s.addShape(pres.shapes.RECTANGLE, { x: o.x + 0.02, y: o.y + 0.02, w: o.w - 0.04, h: 0.42, fill: { color: C.faint }, line: { color: C.faint } });
  for (let i = 0; i < 3; i++) s.addShape(pres.shapes.OVAL, { x: o.x + 0.15 + i * 0.22, y: o.y + 0.14, w: 0.14, h: 0.14, fill: { color: C.codeLine }, line: { color: C.codeLine } });
  mono(s, o.url, { x: o.x + 0.95, y: o.y + 0.07, w: o.w - 1.1, h: 0.3, size: 11, color: C.muted, valign: "middle" });
  if (o.caption) text(s, o.caption, { x: o.x + 0.3, y: o.y + 0.55, w: o.w - 0.6, h: 0.4, size: 16, bold: true, color: o.captionColor ?? C.ink });
  const fy = o.y + (o.caption ? 1.0 : 0.65), fh = o.fieldH ?? 0.6;
  (o.fields || []).forEach(([lab, val, state], i) => {
    const y = fy + i * (fh + 0.1), bad = state === "bad", good = state === "good";
    text(s, lab, { x: o.x + 0.3, y, w: 1.6, h: fh, size: 14, color: C.muted, valign: "middle" });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: o.x + 1.9, y: y + 0.04, w: o.w - 2.2, h: fh - 0.08, rectRadius: 0.05, fill: { color: bad ? C.redSoft : good ? C.greenSoft : C.white }, line: { color: bad ? C.red : good ? C.green : C.codeLine, width: bad || good ? 2 : 1 } });
    text(s, val, { x: o.x + 2.02, y: y + 0.04, w: o.w - 2.4, h: fh - 0.08, size: 17, color: bad ? C.red : C.ink, valign: "middle", bold: bad || good });
  });
}

const STAGES = ["Rajaa", "Konteksti", "Toista", "Korjaa", "Tarkista", "Luovuta", "Seuraa"];
function strip(s, idx) {
  const x0 = 9.2, gap = 0.6, y = 7.06;
  s.addShape(pres.shapes.LINE, { x: x0, y, w: gap * 6, h: 0, line: { color: C.line, width: 1.5 } });
  STAGES.forEach((st, i) => {
    const cur = i === idx, d = cur ? 0.22 : 0.13;
    s.addShape(pres.shapes.OVAL, { x: x0 + i * gap - d / 2, y: y - d / 2, w: d, h: d, fill: { color: cur ? C.blue : i < idx ? C.grey : C.white }, line: { color: cur ? C.blue : C.grey, width: 0.75 } });
  });
  mono(s, STAGES[idx].toLowerCase(), { x: x0 + idx * gap - 0.8, y: y - 0.46, w: 1.6, h: 0.3, size: 11, color: C.blue, align: "center", valign: "bottom" });
}

function arrow(s, x, y, w, h = 0, color = C.grey, width = 2) {
  s.addShape(pres.shapes.LINE, { x, y, w, h, line: { color, width, endArrowType: "triangle" } });
}
function seg(s, x1, y1, x2, y2, color = C.line, width = 2) {
  s.addShape(pres.shapes.LINE, { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.max(0.01, Math.abs(x2 - x1)), h: Math.max(0.01, Math.abs(y2 - y1)), flipV: (x2 - x1) * (y2 - y1) < 0, line: { color, width } });
}
function avatar(s, x, y, d, ring) {
  if (ring) s.addShape(pres.shapes.OVAL, { x: x - 0.08, y: y - 0.08, w: d + 0.16, h: d + 0.16, fill: { type: "none" }, line: { color: ring, width: 2 } });
  s.addImage({ path: A("avatar.jpg"), x, y, w: d, h: d, rounding: true, altText: "Juha Ala-Rantala" });
}

function iconCircle(s, data, x, y, d = 0.75, fill = C.blueSoft) {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } });
  s.addImage({ data, x: x + d * 0.24, y: y + d * 0.24, w: d * 0.52, h: d * 0.52 });
}
const notes = (s, t) => s.addNotes(t);

const barChart = (s, labels, values, o) => s.addChart(pres.charts.BAR, [{ name: o.name ?? "Arvo", labels, values }], {
  x: o.x, y: o.y, w: o.w, h: o.h, barDir: o.dir ?? "bar", chartColors: [C.blue], showValue: true, dataLabelPosition: "outEnd",
  dataLabelFormatCode: '0" %";-0" %";', dataLabelFontSize: o.labelSize ?? 20, dataLabelFontBold: true, dataLabelColor: C.ink, dataLabelFontFace: "+mn-lt",
  catAxisLabelFontSize: o.catSize ?? 16, catAxisLabelColor: C.ink, catAxisLabelFontFace: "+mn-lt", catAxisOrientation: o.dir === "col" ? "minMax" : "maxMin",
  catAxisLineShow: o.dir === "col", catAxisLineColor: C.codeLine,
  valAxisHidden: o.dir !== "col", valAxisMinVal: 0, valAxisMaxVal: 100, valAxisMajorUnit: 25, valAxisLabelFormatCode: '0" %"', valAxisLabelFontSize: 13, valAxisLabelColor: C.muted, valAxisLabelFontFace: "+mn-lt", valAxisLineShow: false,
  valGridLine: o.dir === "col" ? { color: "E5E7EB", size: 0.75 } : { style: "none" }, showLegend: false, barGapWidthPct: o.gap ?? 55,
});

// ================================================================ build
async function build() {
  await loadDims();
  pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.theme = { headFontFace: BODY, bodyFontFace: BODY };
  pres.title = "Hei ohjelmistokehitys, mitä kuuluu?";
  pres.subject = "Lakeus-Devaus 2026";
  pres.author = "Juha Ala-Rantala";

  const slideNo = (color) => ({ x: 12.15, y: 0.2, w: 0.7, h: 0.3, fontFace: MONO, fontSize: 11, color, align: "right" });
  pres.defineSlideMaster({
    title: "CONTENT", background: { color: C.white }, slideNumber: slideNo(C.muted),
    objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 0.55, w: 12.1, h: 0.75, fontFace: BODY, bold: true, color: C.ink, align: "left", valign: "top", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "sub", type: "body", x: 0.6, y: 1.3, w: 12.1, h: 0.45, fontFace: BODY, color: C.muted, align: "left", valign: "top", margin: 0 }, text: "" } },
    ],
  });
  pres.defineSlideMaster({ title: "PLAIN", background: { color: C.white }, slideNumber: slideNo(C.muted), objects: [] });
  pres.defineSlideMaster({ title: "DARK", background: { color: C.dark }, slideNumber: slideNo(C.darkMuted), objects: [] });

  const SEC = {
    alku: { key: "alku", title: "Alku" }, a: { key: "a", title: "A · Mikä oikeasti muuttui?" }, b: { key: "b", title: "B · Tuleeko meistä nopeampia?" },
    c: { key: "c", title: "C · Kuka tarkistaa – ja kuka oppii?" }, d: { key: "d", title: "D · Mitä tämä tarkoittaa täällä?" },
    p: { key: "p", title: "Käytäntö · Miten tehdään?" }, w: { key: "w", title: "SuomiWoW · oikea projekti" }, loppu: { key: "loppu", title: "Loppu" },
  };

  // ============================================================ ALKU
  let sec = SEC.alku;
  pres.addSection({ title: sec.title });

  // 01 title
  {
    const s = plain(sec, true);
    mono(s, "$ git diff 2022..2026 -- ohjelmistokehitys", { x: 0.8, y: 1.15, w: 11, h: 0.45, size: 18, color: C.darkMuted });
    text(s, "Hei ohjelmistokehitys,\nmitä kuuluu?", { x: 0.8, y: 1.75, w: 9.0, h: 2.6, size: 60, bold: true, color: C.white });
    text(s, "Juha Ala-Rantala", { x: 0.8, y: 4.8, w: 7, h: 0.5, size: 24, bold: true, color: C.white });
    mono(s, "Lakeus-Devaus · marraskuu 2026", { x: 0.8, y: 5.3, w: 7, h: 0.4, size: 16, color: C.darkMuted });
    avatar(s, 9.45, 3.15, 3.2, C.darkBlue);
    notes(s, `⏱ 00:00–00:30 · Avaus
Avaa tilanteella, jonka kaikki tunnistavat: "Agentti sanoo, että muutos on valmis. Mikä saisi teidät uskomaan sen?"
Älä vielä selitä mitään. Seuraava dia kertoo, mitä illassa käydään läpi.
Rivi "git diff 2022..2026" on vitsi ja lupaus: katsotaan, mitä neljässä vuodessa muuttui.`);
  }

  // 02 agenda (a) + halves (b)
  for (const step of ["a", "b"]) {
    const s = content(sec, "Tänään", null);
    const rowsY = step === "a" ? AGENDA.map((_, i) => 1.65 + i * 0.82) : [2.15, 2.75, 3.35, 3.95, 5.3];
    if (step === "b") {
      mono(s, "Mitä kuuluu?  · tilannekatsaus", { x: 0.6, y: 1.62, w: 6.8, h: 0.4, size: 14, color: C.blue, bold: true });
      mono(s, "Miten tehdään?  · käytäntö", { x: 0.6, y: 4.8, w: 6.8, h: 0.4, size: 14, color: C.blue, bold: true });
    }
    AGENDA.forEach((q, i) => {
      mono(s, String(i + 1).padStart(2, "0"), { x: 0.6, y: rowsY[i], w: 0.7, h: 0.55, size: 20, color: C.blue, valign: "middle", bold: true });
      text(s, q, { x: 1.35, y: rowsY[i], w: 6.4, h: 0.55, size: step === "a" ? 22 : 20, valign: "middle" });
    });
    card(s, { x: 8.3, y: 2.0, w: 4.4, h: 2.9, fill: C.blueSoft, line: C.blueLine });
    mono(s, "// illan kysymys", { x: 8.6, y: 2.25, w: 3.8, h: 0.35, size: 13, color: C.blue });
    text(s, "Koodi halpeni.\nMikä ei?", { x: 8.6, y: 2.75, w: 3.9, h: 1.8, size: 36, bold: true, color: C.blue, valign: "middle" });
    notes(s, step === "a" ? `⏱ 00:30–01:00 · Agenda
Lue kysymykset nopeasti. Osoita lopuksi oikeaa korttia: "Tämä on koko illan kysymys. Koodi halpeni. Mikä ei?"
Siihen vastataan aivan lopussa.` : `⏱ 01:00–01:15 · Kaksi puoliskoa
"Ensimmäinen puolisko on tilannekatsaus: mitä ohjelmistokehityksessä tapahtuu. Toinen puolisko on käytäntöä: miten agentin kanssa tehdään töitä."
Sano myös: "Saa kysyä – lopussa on aikaa kysymyksille."`);
  }

  // 03 bio
  {
    const s = content(sec, "Kuka minä olen?", null);
    const ph = 4.7, pw = ph * aspect("bio-1.jpg");
    s.addImage({ path: A("bio-1.jpg"), x: 0.6, y: 1.55, w: pw, h: ph, altText: "Juha Ala-Rantala" });
    const x0 = 0.6 + pw + 0.8;
    text(s, "Juha Ala-Rantala", { x: x0, y: 1.5, w: 7, h: 0.6, size: 28, bold: true });
    mono(s, "$ git log --oneline ura", { x: x0, y: 2.1, w: 7, h: 0.35, size: 14, color: C.muted });
    const roles = [["Teknologiajohtaja", "Clevoy Oy"], ["Diplomi-insinööri, tekoälytutkija", "Tampereen yliopisto"], ["Ohjelmistokehittäjä", "Prima Power"], ["Insinööri", "Seinäjoen ammattikorkeakoulu"]];
    s.addShape(pres.shapes.LINE, { x: x0 + 0.12, y: 2.75, w: 0, h: 2.3, line: { color: C.line, width: 2 } });
    roles.forEach(([r, o], i) => {
      const y = 2.6 + i * 0.75;
      s.addShape(pres.shapes.OVAL, { x: x0 + 0.02, y: y + 0.12, w: 0.2, h: 0.2, fill: { color: i === 0 ? C.blue : C.white }, line: { color: C.blue, width: 1.5 } });
      text(s, r, { x: x0 + 0.45, y, w: 6.5, h: 0.4, size: 20, bold: true });
      mono(s, o, { x: x0 + 0.45, y: y + 0.36, w: 6.5, h: 0.3, size: 13, color: C.muted });
    });
    s.addShape(pres.shapes.RECTANGLE, { x: x0, y: 5.6, w: 5.6, h: 0.6, fill: { color: C.greenSoft }, line: { color: C.greenSoft } });
    mono(s, "+", { x: x0 + 0.12, y: 5.6, w: 0.3, h: 0.6, size: 22, color: C.green, bold: true, valign: "middle" });
    text(s, "Moon härmästä.", { x: x0 + 0.45, y: 5.6, w: 5, h: 0.6, size: 22, bold: true, valign: "middle" });
    notes(s, `⏱ 01:15–02:00 · Kuka minä olen?
Seinäjoella SeAMK ja Härmä ovat ne meriitit, jotka merkitsevät – sano "Moon härmästä" rauhassa.
Älä luettele uraa, kerro yksi lause: rakennan ohjelmistoja ja tutkin tekoälyä, ja käytän agentteja joka päivä.
Sano ääneen: "Saa kysyä – lopussa on aikaa kysymyksille."`);
  }

  // 04 timeline
  {
    const s = content(sec, "Kaksi vuotta sitten kysyimme täällä eri kysymystä", "2022 → 2024 → 2026");
    const pts = [
      { x: 0.6, year: "2022", head: "Kone täydentää rivin." },
      { x: 4.75, year: "Joulukuu 2024", head: "”Saako paikallisen mallin auttamaan koodauksessa?”", body: "Lakeus-Devaus: Paikalliset koodaavat kielimallit" },
      { x: 8.9, year: "2026", head: "”Kuinka ison tehtävän uskallamme antaa agentille?”" },
    ];
    s.addShape(pres.shapes.LINE, { x: 0.7, y: 2.75, w: 11.6, h: 0, line: { color: C.line, width: 2 } });
    pts.forEach((p, i) => {
      s.addShape(pres.shapes.OVAL, { x: p.x, y: 2.62, w: 0.26, h: 0.26, fill: { color: i === 2 ? C.blue : C.white }, line: { color: C.blue, width: 2 } });
      mono(s, p.year, { x: p.x, y: 2.0, w: 3.8, h: 0.45, size: 18, bold: true, color: C.blue });
      text(s, p.head, { x: p.x, y: 3.1, w: 3.7, h: 1.3, size: 20, bold: true });
      if (p.body) mono(s, p.body, { x: p.x, y: 4.4, w: 3.7, h: 0.6, size: 12, color: C.muted });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.75, y: 5.0, w: 3.6, h: 0.85, rectRadius: 0.08, fill: { color: C.faint }, line: { color: C.grey, width: 1, dashType: "dash" } });
    mono(s, "[kuvakaappaus: tapahtuman julkaisu Lakeus-Devaus-sivustolla]", { x: 4.85, y: 5.05, w: 3.4, h: 0.75, size: 10, color: C.muted, align: "center", valign: "middle" });
    bottom(s, "Ja kuka tarkistaa, mitä sieltä tulee takaisin?");
    source(s, "Lakeus-Devaus: Paikalliset koodaavat kielimallit (tapahtuma 12/2024, julkaistu sivustolla 2025).");
    notes(s, `⏱ 02:00–03:00 · Aikajana
"Kaksi vuotta sitten pidin täällä illan paikallisista koodausmalleista. Kuka oli paikalla?" – käsiä ylös.
"Silloin kysyttiin, saako paikallisen mallin ylipäätään auttamaan. Nyt kysymys on, kuinka ison tehtävän uskallamme antaa agentille – ja kuka tarkistaa tuloksen."
Vuodet näyttävät suunnan, eivät tarkkoja kyvykkyyspäivämääriä. Älä mainitse osallistujamäärää dialla.
TODO ennen esitystä: vaihda katkoviivalaatikkoon kuvakaappaus Lakeus-Devaus-sivuston julkaisusta.`);
  }

  // 05 ask vs delegate
  {
    const s = content(sec, "Kysy vai delegoi?", "Sama työkalu, kaksi eri pyyntöä");
    const cols = [
      { x: 0.6, head: "Kysy", ic: "FaComments", req: "”Selitä, miten osoitteen tallennus toimii.”", out: "→ saat selityksen" },
      { x: 6.85, head: "Delegoi", ic: "FaListCheck", req: "”Toista virhe. Korjaa syy. Näytä, että tallennus toimii.”", out: "→ saat muutoksen ja näytön" },
    ];
    for (const c of cols) {
      card(s, { x: c.x, y: 2.0, w: 5.85, h: 3.7 });
      iconCircle(s, await icon(c.ic, C.blue), c.x + 0.35, 2.3, 0.8);
      text(s, c.head, { x: c.x + 1.35, y: 2.3, w: 4, h: 0.8, size: 30, bold: true, color: C.blue, valign: "middle" });
      text(s, c.req, { x: c.x + 0.35, y: 3.3, w: 5.15, h: 1.3, size: 22, bold: true, valign: "middle" });
      mono(s, c.out, { x: c.x + 0.35, y: 4.8, w: 5.15, h: 0.5, size: 16, color: C.muted });
    }
    bottom(s, "Kumpia sinä teet useammin?");
    notes(s, `⏱ 03:00–04:15 · Kysy vai delegoi
Lue molemmat pyynnöt. Vasemmalla halutaan selitys, oikealla muutos ja näyttö siitä, että se toimii. Molemmat ovat hyödyllisiä – kumpikaan ei ole "kehittyneempi".
🙋 Käsiä ylös: kumpia teette useammin?
Tämä osoitebugi palaa käytännön osuudessa, ja oikean puolen ajatus on illan ensimmäinen viesti mukaan: "Pyydä tulosta, jonka voit tarkistaa."
Codex ja Claude Code ovat esimerkkejä työkaluista, joilla oikean puolen pyyntöjä tehdään.`);
  }

  // 06 gallup handoff
  {
    const s = content(sec, "Kysytään yleisöltä", "Missä tämä huone on AI:n ja ohjelmistokehityksen kanssa?");
    iconCircle(s, await icon("FaSquarePollVertical", C.blue), 1.6, 2.2, 3.0);
    card(s, { x: 7.6, y: 1.95, w: 4.6, h: 4.6 });
    s.addImage({ path: A("qr-gallup.png"), x: 8.15, y: 2.15, w: 3.5, h: 3.5 });
    mono(s, "gallup.koodattu.dev", { x: 7.6, y: 5.75, w: 4.6, h: 0.45, size: 20, bold: true, align: "center", valign: "middle" });
    mono(s, "istuntokoodi: ______", { x: 0.9, y: 5.6, w: 5.4, h: 0.45, size: 18, color: C.muted, align: "center" });
    notes(s, `⏱ 04:15–05:00 ja gallup 05:00–15:00 · Siirto selaimeen
Tämä dia on näkyvissä koko gallupin ajan. Gallupin ainoa tehtävä: nähdä, missä tämä huone on GenAI:n ja ohjelmistokehityksen kanssa.
Aikataulu: 90 s liittymiseen · ~6 min kysymyksiin · 2,5 min korkeintaan kolmen havainnon käsittelyyn.
Yhteenveto kolmella lauseella: "Tässä huoneessa on ___ kokemusta. AI on ___ osa arkea. Käyttö, koettu hyöty ja luottamus ovat ___ suhteessa toisiinsa."
Älä ennakoi tuloksia. Tulokset kuvaavat tätä huonetta, eivät koko alaa.
Varasuunnitelma: jos palvelu ei toimi, kysy kokemus, käyttö ja AI-fiilis käsiä nostamalla.
TODO: täytä istuntokoodi ennen esitystä.`);
  }

  // ============================================================ A
  sec = SEC.a;
  pres.addSection({ title: sec.title });

  const divider = (sec, idx, notesText) => {
    const s = plain(sec, true);
    mono(s, `// ${String(idx + 1).padStart(2, "0")} / 05`, { x: 0.8, y: 1.2, w: 6, h: 0.5, size: 20, color: C.darkBlue, bold: true });
    text(s, AGENDA[idx], { x: 0.8, y: 1.8, w: 11.5, h: 1.8, size: 44, bold: true, color: C.white });
    AGENDA.forEach((q, i) => mono(s, `${String(i + 1).padStart(2, "0")}  ${q}`, { x: 0.8, y: 4.15 + i * 0.45, w: 11.5, h: 0.4, size: 15, color: i === idx ? C.darkText : C.darkDim, bold: i === idx }));
    notes(s, notesText);
  };
  divider(sec, 0, `⏱ 15:00 · Takaisin diaan (10 s)
"Katsotaan ensin, mikä ohjelmistokehityksessä oikeasti muuttui."`);

  // 08 SO chart
  const soLabels = ["Koodin tuottaminen tutulla alueella", "Testien kirjoittaminen", "Katselmointi", "Tuotannon operointi ja vianetsintä"];
  for (const step of ["a", "b"]) {
    const s = content(sec, "Mihin AI:ta oikeasti käytetään?", "Kansainvälinen kehittäjäkysely, 2026");
    barChart(s, soLabels, step === "a" ? [69.3, 0, 0, 0] : [69.3, 58.1, 40.5, 19.9], { x: 0.5, y: 1.9, w: 9.0, h: 4.0, name: "Käyttää nyt" });
    if (step === "a") ask(s, { x: 9.7, y: 2.3, w: 3.0, h: 2.0, label: "// arvaa", text: "Kuinka moni käyttää AI:ta testien kirjoittamiseen?", size: 18 });
    else {
      card(s, { x: 9.7, y: 2.3, w: 3.0, h: 2.0 });
      text(s, "58 %", { x: 9.95, y: 2.45, w: 2.6, h: 0.9, size: 44, bold: true, color: C.blue });
      text(s, "testien kirjoittamiseen", { x: 9.95, y: 3.35, w: 2.6, h: 0.8, size: 16 });
      bottom(s, "Koodia AI:lle antaa jo moni. Tuotantoa harvempi.");
    }
    source(s, "Stack Overflow Developer Survey 2026 (n = 12 547, kesä–elokuu 2026) · itse valikoitunut otos · monivalinta · nykyinen käyttö · tuotanto ei kuulu kaikkien työhön.");
    notes(s, step === "a" ? `⏱ 15:10–15:40 · Silta gallupista
"Tässä huoneessa X % käytti AI:ta koodaukseen tällä viikolla. Entä maailmalla?"
🙋 Kysy: "Kuinka moni käyttää AI:ta testien kirjoittamiseen?" Anna muutama arvaus.` : `⏱ 15:40–16:10 · Paljastus
Testit 58 %, katselmointi 41 %, tuotannon operointi 20 %.
Huomio: kaikkien työhön ei kuulu tuotanto, joten pieni luku ei tarkoita, että AI olisi siellä kielletty.
Tarkat luvut: 69,3 / 58,1 / 40,5 / 19,9 %. Kysely on itse valikoitunut, ei koko alan otos.
Lähde: https://survey.stackoverflow.co/2026/ai/data/ai-work`);
  }

  // 09 then / now
  {
    const s = content(sec, "Ollaanko tässä oltu ennenkin?", "Ohjelmistokriisi on vanhempi kuin useimmat meistä");
    card(s, { x: 0.6, y: 1.95, w: 5.85, h: 3.2, fill: C.faint });
    mono(s, "NATO SCIENCE COMMITTEE\n\nSOFTWARE ENGINEERING\n\nReport on a conference\nGarmisch, Germany\n7th to 11th October 1968", { x: 0.8, y: 2.1, w: 5.45, h: 2.9, size: 15, color: "374151", align: "center", valign: "middle" });
    card(s, { x: 6.85, y: 1.95, w: 5.85, h: 3.2 });
    const prs = ["Add retry to sync job", "Fix flaky checkout test", "Refactor address form", "Update dependencies", "Add CSV export", "Fix null in invoice view", "Improve error messages", "Add admin filters"];
    prs.forEach((p, i) => {
      s.addShape(pres.shapes.OVAL, { x: 7.1, y: 2.2 + i * 0.36, w: 0.15, h: 0.15, fill: { color: C.green }, line: { color: C.green } });
      text(s, p, { x: 7.4, y: 2.1 + i * 0.36, w: 3.3, h: 0.34, size: 12, valign: "middle" });
      mono(s, "odottaa katselmointia", { x: 10.4, y: 2.1 + i * 0.36, w: 2.15, h: 0.34, size: 10, color: C.muted, valign: "middle", align: "right" });
    });
    s.addText([{ text: "1968: ", options: { bold: true, color: C.blue } }, { text: "Ohjelmistoa osataan tehdä enemmän kuin hallita." }], { x: 0.6, y: 5.3, w: 5.85, h: 0.6, fontFace: BODY, fontSize: 18, color: C.ink, margin: 0, isTextBox: true });
    s.addText([{ text: "2026: ", options: { bold: true, color: C.blue } }, { text: "Ohjelmistoa osataan tuottaa enemmän kuin tarkistaa." }], { x: 6.85, y: 5.3, w: 5.85, h: 0.6, fontFace: BODY, fontSize: 18, color: C.ink, margin: 0, isTextBox: true });
    bottom(s, "Jokainen sukupolvi saa oman hopealuotinsa.");
    source(s, "NATO Software Engineering Conference, Garmisch 1968 · oikealla havainnollistus, ei todellinen PR-lista.");
    notes(s, `⏱ 16:10–17:00 · Ollaanko tässä oltu ennenkin?
1968 NATO:n konferenssissa puhuttiin ohjelmistokriisistä: järjestelmät kasvoivat isommiksi kuin niitä osattiin hallita.
Vuoden 2026 lause on retorinen tiivistys, ei tilasto.
🙋 Gallupin 20+ vuotta alalla olleille: "Kuulostaako tutulta?"
Lähde: https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=olbp48950`);
  }

  // 10 Brooks / Naur
  {
    const s = content(sec, "Kirjoittaminen helpottui. Ymmärtäminen ei.", "Brooks ja Naur, luettuna vuonna 2026");
    const cols = [
      { x: 0.6, q: "”Miten tämä kirjoitetaan?”", items: "syntaksi · rajapinnat · pohjakoodi", out: "Tästä AI vie ison osan.", ic: "FaKeyboard", c: C.blue },
      { x: 6.85, q: "”Mitä tämän pitää tehdä – ja miksi?”", items: "vaatimukset · muutos · ymmärrys ihmisten päässä", out: "Tässä AI auttaa, mutta ei omista.", ic: "FaBrain", c: C.ink },
    ];
    for (const c of cols) {
      card(s, { x: c.x, y: 1.95, w: 5.85, h: 3.75 });
      iconCircle(s, await icon(c.ic, C.blue), c.x + 0.35, 2.25, 0.75);
      text(s, c.q, { x: c.x + 0.35, y: 3.15, w: 5.2, h: 1.0, size: 24, bold: true, valign: "middle" });
      mono(s, c.items, { x: c.x + 0.35, y: 4.2, w: 5.2, h: 0.5, size: 14, color: C.muted });
      text(s, c.out, { x: c.x + 0.35, y: 4.8, w: 5.2, h: 0.6, size: 20, bold: true, color: c.c });
    }
    bottom(s, "Kuka ymmärtää järjestelmän, jos agentti kirjoittaa koodin?");
    source(s, "Fred Brooks, No Silver Bullet (1986) · Peter Naur, Programming as Theory Building (1985) · vapaasti tulkittu.");
    notes(s, `⏱ 17:00–18:00 · Brooks ja Naur
Brooks erotti satunnaisen vaikeuden (miten kirjoitetaan) olennaisesta (mitä järjestelmän pitää tehdä ja miksi). Naurin mukaan ohjelmointi on teorian rakentamista: ymmärrys elää ihmisissä, ei pelkässä koodissa.
Tämä on tulkinta, ei lainaus. Älä väitä, että AI poistaisi vain satunnaisen vaikeuden – se ehdottaa myös rakenteita ja ratkaisuja.
Lähteet: https://dl.icdst.org/pdfs/files3/f923b64c10c1292ad76c939911e3e3ac.pdf · https://gwern.net/doc/cs/algorithm/1985-naur.pdf`);
  }

  // 11 MirrorCode
  for (const step of ["a", "b"]) {
    const s = content(sec, "Agentti kirjoitti ohjelman uusiksi näkemättä alkuperäistä koodia", "MirrorCode: gotree, noin 16 000 riviä");
    card(s, { x: 0.6, y: 1.95, w: 6.4, h: 3.7 });
    const rows = [["+", "Annettu: ", "miten ohjelman pitää käyttäytyä + testit", C.green, C.greenSoft], ["−", "Ei annettu: ", "lähdekoodia", C.red, C.redSoft]];
    rows.forEach(([sign, k, v, col, bg], i) => {
      const y = 2.3 + i * 1.5;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.75, y, w: 6.1, h: 1.1, fill: { color: bg }, line: { color: bg } });
      mono(s, sign, { x: 0.9, y, w: 0.4, h: 1.1, size: 26, color: col, bold: true, valign: "middle" });
      s.addText([{ text: k, options: { bold: true } }, { text: v }], { x: 1.4, y, w: 5.3, h: 1.1, fontFace: BODY, fontSize: 21, color: C.ink, margin: 0, valign: "middle", isTextBox: true });
    });
    if (step === "a") {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.5, y: 1.95, w: 5.2, h: 3.7, rectRadius: 0.1, fill: { color: C.faint }, line: { color: C.grey, dashType: "dash", width: 1.25 } });
      mono(s, "?", { x: 7.5, y: 1.95, w: 5.2, h: 3.7, size: 96, color: C.grey, align: "center", valign: "middle" });
    } else {
      bigNumber(s, { x: 7.6, y: 2.3, w: 5.2, num: "2 000 / 2 001", size: 54, nh: 1.1, label: "testiä läpi", lsize: 24 });
      mono(s, "1 reunatapaus jäi.", { x: 7.6, y: 4.5, w: 5.0, h: 0.5, size: 16, color: C.muted });
      bottom(s, "Iso tehtävä onnistuu, kun tiedetään tarkalleen, mikä on oikein.");
    }
    source(s, "Epoch AI & METR, MirrorCode (projektisivu, tarkistettu 18.10.2026) · yksi protokolla · mahdollinen opetusdatan kontaminaatio.");
    notes(s, step === "a" ? `⏱ 18:00–18:40 · MirrorCode
Tehtävä: rakenna olemassa oleva ohjelma uudelleen näkemättä sen lähdekoodia. Agentilla on vain kuvaus siitä, miten ohjelman pitää käyttäytyä, ja testit.
🙋 "Arvatkaa, miten kävi?"` : `⏱ 18:40–19:30 · Tulos
Paras toteutus läpäisi 2 000 testiä 2 001:stä. Se yksi reunatapaus on tarina: iso tehtävä onnistuu, kun onnistuminen on tarkasti määritelty.
🙋 "Mikä olisi teidän tehtävänne testisarja?"
Älä mainitse ihmistyöviikkoja – ne ovat asiantuntija-arvio. "14 h ja 251 $" vain jos varmistettu, että kyse on samasta ajosta.
Tämä ei ole asiakastarpeen löytämistä eikä tuotteen ylläpitoa.
Lähteet: https://epoch.ai/MirrorCode · https://arxiv.org/abs/2606.30182v2`);
  }

  // 12 meme: two buttons (recreated)
  {
    const s = plain(sec);
    card(s, { x: 2.4, y: 0.6, w: 8.5, h: 3.3 });
    for (const [t, x] of [["Lue koko diffi", 3.2], ["Hyväksy, kun CI on vihreä", 7.1]]) {
      text(s, t, { x: x - 0.2, y: 0.85, w: 3.4, h: 0.8, size: 20, bold: true, align: "center", valign: "middle" });
      s.addShape(pres.shapes.OVAL, { x, y: 1.85, w: 3.0, h: 1.6, fill: { color: "E5534B" }, line: { color: "A40E26", width: 4 } });
    }
    avatar(s, 3.1, 4.25, 2.6);
    text(s, "Minä, perjantaina\nklo 15.55.", { x: 6.0, y: 4.65, w: 6.5, h: 1.8, size: 36, bold: true, valign: "middle" });
    notes(s, `⏱ 19:30–20:00 · Meemi (Two buttons, koottu uudelleen omasta kuvasta)
Ei selitystä. Anna naurun tulla ja jatka: seuraavat 15 minuuttia ovat juuri tästä – nopeus vastaan tarkistaminen.
Halutessasi vaihda alkuperäiseen Two buttons -pohjaan suomenkielisillä teksteillä.`);
  }

  // ============================================================ B
  sec = SEC.b;
  pres.addSection({ title: sec.title });

  // 13 METR reveal
  for (let step = 1; step <= 4; step++) {
    const s = content(sec, "Paljonko AI nopeuttaa kokeneita kehittäjiä?", "16 kokenutta kehittäjää, 246 tehtävää omissa repoissaan (alkuvuosi 2025)");
    gallupPin(s, "Nopeuttaako AI sinua?");
    const rows = [["Ennakkoarvio", "24 % nopeammin"], ["Jälkikäteen tuntui", "20 % nopeammin"], ["Mitattu", "19 % enemmän aikaa"]];
    rows.slice(0, Math.min(step, 3)).forEach(([k, v], i) => {
      const y = 2.05 + i * 1.05, measured = i === 2;
      if (measured) s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y, w: 8.3, h: 0.9, fill: { color: C.redSoft }, line: { color: C.redSoft } });
      if (measured) mono(s, "−", { x: 0.75, y, w: 0.4, h: 0.9, size: 26, color: C.red, bold: true, valign: "middle" });
      text(s, k, { x: 1.25, y, w: 2.9, h: 0.9, size: 20, color: measured ? C.ink : C.muted, valign: "middle", bold: measured });
      text(s, v, { x: 4.1, y, w: 4.7, h: 0.9, size: 32, bold: true, color: measured ? C.red : C.ink, valign: "middle" });
    });
    if (step === 2) mono(s, "?", { x: 4.1, y: 4.15, w: 1.5, h: 0.9, size: 40, color: C.grey, valign: "middle" });
    if (step === 4) {
      card(s, { x: 9.2, y: 2.05, w: 3.5, h: 3.0 });
      mono(s, "// toinen tutkimus, eri mittari", { x: 9.4, y: 2.2, w: 3.2, h: 0.35, size: 11, color: C.muted });
      text(s, "+26 %", { x: 9.4, y: 2.6, w: 3.1, h: 0.85, size: 44, bold: true, color: C.blue });
      text(s, "valmistuneita tehtäviä", { x: 9.4, y: 3.45, w: 3.1, h: 0.45, size: 17, bold: true });
      text(s, "4 867 kehittäjää · 3 kenttäkoetta · koodiavustin", { x: 9.4, y: 3.95, w: 3.1, h: 0.9, size: 13, color: C.muted });
      bottom(s, "Nopeampi kenelle – ja missä tehtävässä?");
    }
    source(s, "METR 7/2025 ja päivitys 2/2026 · Microsoft Research 2025 · eri mittarit – ei samalle akselille.");
    notes(s, {
      1: `⏱ 20:00 · METR-koe, ennakkoarvio
Kokeneet avoimen lähdekoodin kehittäjät tekivät oikeita tehtäviä omissa, tutuissa repoissaan. Ennen koetta he arvioivat, että AI nopeuttaa noin 24 %.`,
      2: `⏱ 20:20 · Jälkikäteen
Kokeen jälkeen he arvioivat, että AI oli nopeuttanut noin 20 %.
🙋 Pysähdy: "Mitä mittaus näytti? Arvatkaa."`,
      3: `⏱ 20:40 · Mitattu
Tehtäviin kului AI:n kanssa 19 % enemmän aikaa. Gallup-viittaus: "Moni teistä vastasi, että AI nopeuttaa. Ehkä nopeuttaakin – mutta kokemus ja mittaus voivat erota."
Tämä on alkuvuoden 2025 työkaluilla tehty kapea koe, ei nykyinen yleinen kerroin.`,
      4: `⏱ 21:00 · Toinen tutkimus
Microsoftin kolmessa kenttäkokeessa (4 867 kehittäjää) koodiavustin lisäsi valmistuneita tehtäviä noin 26 %.
Eri mittari, eri tehtävä, eri ihmiset. Lukuja ei vähennetä toisistaan eikä piirretä samalle akselille.
Lähteet: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ · https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/`,
    }[step]);
  }

  // 14 reaction GIF placeholder
  {
    const s = plain(sec);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 2.9, y: 1.2, w: 7.5, h: 5.0, rectRadius: 0.1, fill: { color: C.faint }, line: { color: C.grey, dashType: "dash", width: 1.5 } });
    mono(s, "[lisää GIF: Homer Simpson – ”D'oh!”]", { x: 2.9, y: 1.2, w: 7.5, h: 5.0, size: 24, color: C.muted, align: "center", valign: "middle" });
    notes(s, `⏱ 21:20 · Reaktio (5 s)
Ei tekstiä – huone on juuri nähnyt "arvio −24 % → mitattu +19 %", joten reaktio on punchline.
TODO: lisää GIF tähän (tarkista käyttöoikeus) tai poista dia.`);
  }

  // 15 METR could not measure
  {
    const s = content(sec, "Uusin koe ei saanut luotettavaa tulosta", "…koska moni ei enää halunnut tehdä töitä ilman AI:ta.");
    const cards = [["FaFilter", "Osallistujat ja tehtävät valikoituivat"], ["FaCoins", "Pienempi palkkio"], ["FaLayerGroup", "Rinnakkaista agenttityötä vaikea mitata"]];
    for (let i = 0; i < 3; i++) {
      const x = 0.6 + i * 4.1;
      card(s, { x, y: 2.15, w: 3.8, h: 2.9 });
      iconCircle(s, await icon(cards[i][0], C.blue), x + 1.5, 2.45, 0.8);
      text(s, cards[i][1], { x: x + 0.3, y: 3.45, w: 3.2, h: 1.3, size: 20, bold: true, align: "center", valign: "middle" });
    }
    bottom(s, "Sekin kertoo jotain.");
    source(s, "METR, Uplift update 24.2.2026.");
    notes(s, `⏱ 21:30–22:00 · Mittaaminen vaikeutui
Anna alaotsikon naurattaa ja tee sitten pointti: kun työtapa muuttuu, vanha mittari ei välttämättä mittaa samaa asiaa.
METR ei saanut jatkokokeestaan luotettavaa nykyarviota. Tekijöiden arvio, että uudet työkalut todennäköisesti auttavat enemmän, ei ole tarkka korvaava luku.
Lähde: https://metr.org/blog/2026-02-24-uplift-update/`);
  }

  // 16 delivery flow
  const flow = ["Tarve", "Toteutus", "Katselmointi", "Integrointi", "Julkaisu", "Käyttö"];
  for (let step = 1; step <= 3; step++) {
    const s = content(sec, "Koodi valmistuu nopeammin. Valmistuuko ominaisuus?", "Toimitusketju tarpeesta käyttöön");
    let x = 0.6;
    flow.forEach((f, i) => {
      const w = i === 1 && step >= 2 ? 1.05 : 1.75;
      const hot = i === 2 && step === 3, fast = i === 1 && step >= 2;
      s.addText(f, { shape: pres.shapes.ROUNDED_RECTANGLE, rectRadius: 0.08, x, y: 3.45, w, h: 1.05, fill: { color: hot ? C.redSoft : fast ? C.blueSoft : C.white }, line: { color: hot ? C.red : fast ? C.blue : C.codeLine, width: hot ? 2 : 1 }, fontFace: BODY, fontSize: w < 1.3 ? 14 : 17, bold: true, color: C.ink, align: "center", valign: "middle", margin: 2 });
      if (i < flow.length - 1) arrow(s, x + w + 0.04, 3.975, 0.26);
      x += w + 0.34;
    });
    if (step >= 2) mono(s, "nopeutui", { x: 2.5, y: 4.6, w: 1.8, h: 0.4, size: 14, bold: true, color: C.blue, align: "center" });
    if (step === 3) {
      for (let k = 0; k < 5; k++) s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.1 + (k % 2) * 0.1, y: 3.35 - 0.27 * (k + 1), w: 1.3, h: 0.22, rectRadius: 0.04, fill: { color: C.faint }, line: { color: C.grey, width: 0.75 } });
      mono(s, "jono kasvaa", { x: 5.65, y: 2.25, w: 2.4, h: 0.4, size: 15, bold: true, color: C.red });
    }
    bottom(s, "Missä teillä työ odottaa?");
    source(s, "esityksen tulkinta · DORA, Balancing AI tensions 3/2026 (vuoden 2025 aineisto) · havainnollistus – leveydet eivät ole mitattuja.");
    notes(s, step === 1 ? `⏱ 22:00 · Toimitusketju
Käy ketju läpi tarpeesta käyttöön.` : step === 2 ? `⏱ 22:20 · Toteutus nopeutuu
AI nopeuttaa toteutusta – laatikko kutistuu.` : `⏱ 22:40–23:00 · Jono siirtyy
Jos katselmointi, integrointi tai epäselvät vaatimukset eivät nopeudu, työ odottaa niissä. Pullonkaula ei katoa, se siirtyy.
DORA käsittelee myös sitä, miten AI voi auttaa katselmoinnissa – tarkistuskapasiteetti ei ole pysyvästi kiinteä.
🙋 "Missä teillä työ odottaa?"
Lähde: https://dora.dev/insights/balancing-ai-tensions/`);
  }

  // 17 contradiction pair
  {
    const s = content(sec, "Enemmän koodia vai vähemmän?", "Kaksi tekoälyfirmaa, kaksi suuntaa");
    gallupPin(s, "Enemmän vai parempaa koodia?");
    const pair = [
      { x: 0.6, sign: "+", who: "anthropic", num: "yli 30 000", lab: "yhdistettyä muutosta päivässä", small: "noin 2 500 toukokuussa → syyskuu 2026", c: C.green, bg: C.greenSoft },
      { x: 6.85, sign: "−", who: "openai", num: "yli 800 000", lab: "riviä poistettu", small: "yli 1 400 PR:ää · 5 insinööriä · 2 viikkoa", c: C.red, bg: C.redSoft },
    ];
    for (const p of pair) {
      card(s, { x: p.x, y: 1.95, w: 5.85, h: 3.7 });
      s.addShape(pres.shapes.RECTANGLE, { x: p.x + 0.03, y: 1.98, w: 5.79, h: 0.55, fill: { color: p.bg }, line: { color: p.bg } });
      mono(s, `${p.sign} ${p.who}`, { x: p.x + 0.3, y: 1.98, w: 5, h: 0.55, size: 16, bold: true, color: p.c, valign: "middle" });
      text(s, p.num, { x: p.x + 0.3, y: 2.75, w: 5.4, h: 1.0, size: 52, bold: true, color: p.c, valign: "middle" });
      text(s, p.lab, { x: p.x + 0.3, y: 3.8, w: 5.3, h: 0.55, size: 22, bold: true });
      mono(s, p.small, { x: p.x + 0.3, y: 4.55, w: 5.3, h: 0.8, size: 13, color: C.muted });
    }
    bottom(s, "Kumpaa teillä juhlitaan?");
    source(s, "Anthropic Engineering 13.10.2026 · OpenAI developer blog 14.10.2026 · yritysten omia kertomuksia · määrä ≠ arvo, poisto ≠ turvallisuus.");
    notes(s, `⏱ 23:00–24:00 · Hetkinen…
Sama teknologia, kaksi suuntaa. Anthropicilla yhdistettyjen muutosten määrä kasvoi niin isoksi, että versionhallintaa piti rakentaa uudelleen. OpenAI käytti agentteja koodin poistamiseen: yli 800 000 riviä vähemmän.
Gallup-viittaus: "Enemmän vai parempaa koodia?" – mitä huone vastasi?
🙋 "Kumpaa teillä juhlitaan – tuotettua koodia vai hyödyllistä muutosta?"
Tämä dia kantaa mittaamisen viestin. Taustaksi: Stack Overflow 2026 -kyselyssä 10,2 % kertoi, että organisaatio arvioi AI:n käyttöä osana suoritusta – vain keskustelun herättäjäksi.
Molemmat ovat yritysten omia kertomuksia, eivät riippumattomia mittauksia.
Lähteet: https://www.anthropic.com/engineering/redesigning-source-control · https://developers.openai.com/blog/maintaining-software-with-the-gpt-6-family`);
  }

  // 18 task substitution
  const draftRecord = (s, x, y, w, h, strikeLast) => {
    card(s, { x, y, w, h });
    mono(s, "// luonnos · huoltokirjaus", { x: x + 0.3, y: y + 0.18, w: w - 0.6, h: 0.35, size: 12, color: C.muted });
    [["Laite", "Pumppu A"], ["Havainto", "Epätavallinen ääni"], ["Toimi", "Tarkista laakeri"]].forEach(([k, v], i) => {
      const yy = y + 0.7 + i * 0.75, strike = strikeLast && i === 2;
      text(s, k, { x: x + 0.3, y: yy, w: 1.6, h: 0.55, size: 15, color: C.muted, valign: "middle" });
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 1.9, y: yy, w: w - 2.2, h: 0.55, rectRadius: 0.05, fill: { color: strike ? C.redSoft : C.code }, line: { color: strike ? C.redSoft : C.codeLine } });
      s.addText(v, { x: x + 2.02, y: yy, w: w - 2.4, h: 0.55, fontFace: BODY, fontSize: 17, bold: true, color: strike ? C.red : C.ink, strike: strike ? "sngStrike" : undefined, valign: "middle", margin: 0, isTextBox: true });
    });
  };
  {
    const s = content(sec, "Mitä kannattaa nyt kokeilla, mitä ei ennen kannattanut?", "Esimerkki: huoltomuistiinpanosta luonnos huoltokirjaukseen");
    s.addImage({ path: A("maintenance-illustration.png"), x: 0.6, y: 1.95, w: 3.75, h: 3.75, altText: "Kuvitteellinen huoltotilanne" });
    arrow(s, 4.6, 3.8, 1.0, 0, C.grey, 2.5);
    draftRecord(s, 5.9, 2.15, 6.8, 3.0, false);
    mono(s, "asentaja tarkistaa ennen tallennusta", { x: 6.2, y: 5.25, w: 6.3, h: 0.4, size: 13, color: C.muted });
    bottom(s, "Kokeilu on halpa. Hyöty pitää silti selvittää.");
    source(s, "kuvitteellinen esimerkki · METR, Task substitution and uplift 5/2026 · kuvitus luotu tekoälyllä.");
    notes(s, `⏱ 24:00–25:00 · Mahdollisuuden käänne
AI ei vain nopeuta vanhoja tehtäviä. Se muuttaa myös sitä, mitä kannattaa yrittää: kokeilu, joka ei ennen ylittänyt kynnystä, voi nyt kannattaa.
Esimerkki on kuvitteellinen: valokuvatusta huoltomuistiinpanosta tehdään luonnos huoltokirjaukseen.
Varaus: jos esinettä ei olisi muuten tehty, sen "säästetty työaika" ei ole säästöä. Arvo syntyy siitä, että selviää halvalla, auttaako idea.
🙋 "Mitä kokeilisit nyt, mitä ei ennen kannattanut?"
Lähde: https://metr.org/blog/2026-05-08-task-substitution-and-uplift/`);
  }

  // ============================================================ C
  sec = SEC.c;
  pres.addSection({ title: sec.title });

  // 19 curl opener
  {
    const s = plain(sec);
    mono(s, LABEL.c, { x: 0.6, y: 0.22, w: 8, h: 0.3, size: 12, color: C.blue });
    card(s, { x: 1.4, y: 1.35, w: 10.5, h: 4.6 });
    mono(s, "daniel.haxx.se", { x: 1.9, y: 1.7, w: 9.5, h: 0.5, size: 16, color: C.muted });
    text(s, "The end of the curl bug-bounty", { x: 1.9, y: 2.45, w: 9.8, h: 1.8, font: "Georgia", size: 38, bold: true, valign: "middle" });
    text(s, "Daniel Stenberg · 26.1.2026", { x: 1.9, y: 4.55, w: 9.5, h: 0.5, size: 20, color: C.muted });
    source(s, "daniel.haxx.se.");
    notes(s, `⏱ 25:00–25:20 · Tapauksen avaus
Anna otsikon näkyä hetki. curl on ohjelma, joka on lähes jokaisessa laitteessa tässä huoneessa.
TODO: halutessasi korvaa tämä typografinen versio tiiviisti rajatulla kuvakaappauksella blogikirjoituksesta.
Lähde: https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/`);
  }

  // 20 curl beat
  {
    const s = content(sec, "curl lopetti bugipalkkiot", "Ylläpitäjät hukkuivat heikkoihin raportteihin");
    const tl = [["ennen", "Palkkio löydetystä haavoittuvuudesta", C.blue], ["sitten", "Paljon heikkoja ja vilpillisiä raportteja", C.blue], ["31.1.2026", "Palkkiot loppuvat – aidot raportit yhä tervetulleita", C.red]];
    s.addShape(pres.shapes.LINE, { x: 0.7, y: 2.5, w: 7.6, h: 0, line: { color: C.line, width: 2 } });
    tl.forEach(([k, v, col], i) => {
      const x = 0.6 + i * 2.75;
      s.addShape(pres.shapes.OVAL, { x, y: 2.37, w: 0.26, h: 0.26, fill: { color: i === 2 ? col : C.white }, line: { color: col, width: 2 } });
      mono(s, k, { x, y: 1.85, w: 2.6, h: 0.4, size: 16, bold: true, color: col });
      text(s, v, { x, y: 2.85, w: 2.5, h: 1.4, size: 18 });
    });
    card(s, { x: 9.0, y: 1.85, w: 3.7, h: 2.6, fill: C.code, line: C.codeLine });
    mono(s, "// esityksen määritelmä", { x: 9.25, y: 2.0, w: 3.2, h: 0.35, size: 12, color: C.comment });
    text(s, "AI-slop siirtää kohtuuttoman arviointityön jollekulle toiselle.", { x: 9.25, y: 2.45, w: 3.2, h: 1.8, size: 19, bold: true });
    bottom(s, "Lähettäminen on ilmaista. Tarkistaminen ei.", { y: 4.9, size: 28 });
    source(s, "Daniel Stenberg, daniel.haxx.se 26.1.2026 · kaikki heikot raportit eivät olleet AI:n tekemiä.");
    notes(s, `⏱ 25:20–26:20 · curl
curl maksoi palkkioita löydetyistä haavoittuvuuksista. Sitten raportteja alkoi tulla paljon ja huonoja – osa vilpillisiä. Tammikuun 2026 lopussa palkkio-ohjelma lopetettiin. Aidot raportit ovat edelleen tervetulleita.
Kritisoi kannustinta, älä ihmisiä. Kaikki heikot raportit eivät olleet AI:n tekemiä.
Tasapainoksi: sama kyky voi auttaa, kun vastaanottaja on suostunut – esim. Anthropicin opt-in OSS Scanner. (https://red.anthropic.com/oss-scanner/)
Godot/Linux-vertailu on varadiassa B1.
Lähde: https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/`);
  }

  // 21 learning chart
  for (const step of ["a", "b"]) {
    const s = content(sec, "Oppiiko AI:n kanssa yhtä hyvin?", "52 osallistujaa opetteli uuden Python-kirjaston – heti perään osaamiskoe");
    barChart(s, ["AI:n kanssa", "Ilman AI:ta"], step === "a" ? [0, 0] : [50, 67], { x: 2.4, y: 1.85, w: 8.5, h: 4.1, dir: "col", labelSize: 28, catSize: 20, gap: 90, name: "Osaamiskoe" });
    if (step === "b") bottom(s, "Tehtävä valmistui. Ymmärrys ei välttämättä.");
    source(s, "Shen & Tamkin 2026 (arXiv 2601.20245) · pyöristetyt keskiarvot · välitön koe, ei pitkäaikainen · ei nykyagenttien testi.");
    notes(s, step === "a" ? `⏱ 26:20–26:50 · Arvaus
52 osallistujaa opetteli heille uuden Python-kirjaston (Trio), puolet AI:n kanssa, puolet ilman. Heti perään osaamiskoe.
🙋 "Kumpi ryhmä oppi paremmin?"` : `⏱ 26:50–27:30 · Tulos
AI:n kanssa 50 %, ilman 67 % – noin 17 prosenttiyksikköä. Älä sano "17 % taidoista katosi".
Tehtäväajan ero ei ollut tilastollisesti merkitsevä. Mittaus oli välitön, ei pitkäaikainen, eikä se testannut nykyisiä agentteja. Selittävä käyttötapa liittyi parempaan ymmärrykseen.
Gallup-viittaus: "Luetko AI-koodin?"
Lähteet: https://www.anthropic.com/research/AI-assistance-coding-skills · https://arxiv.org/abs/2601.20245`);
  }

  // 22 AI changes work twice
  {
    const s = content(sec, "AI muuttaa työtä kahdesti", "Sen kautta, mitä se osaa – ja mitä uskomme sen kohta osaavan");
    const cols = [[0.6, "Mitä se tekee", ["tehtävät", "työkalut", "tahti"], "FaGears"], [4.65, "Mitä odotetaan", ["ketä palkataan", "mitä opetellaan", "kuka mentoroi"], "FaBinoculars"]];
    for (const [x, h, items, ic] of cols) {
      card(s, { x, y: 1.95, w: 3.8, h: 3.55 });
      iconCircle(s, await icon(ic, C.blue), x + 0.3, 2.2, 0.7);
      text(s, h, { x: x + 1.15, y: 2.2, w: 2.6, h: 0.7, size: 22, bold: true, valign: "middle" });
      mono(s, items.map((t) => "· " + t).join("\n"), { x: x + 0.35, y: 3.15, w: 3.2, h: 2.0, size: 17, paraSpaceAfter: 6 });
    }
    card(s, { x: 8.9, y: 1.95, w: 3.8, h: 3.55 });
    mono(s, "// yksi poikkeuksellinen työpaikka", { x: 9.15, y: 2.15, w: 3.4, h: 0.35, size: 11, color: C.muted });
    text(s, "27 % → 9 %", { x: 9.15, y: 2.6, w: 3.4, h: 0.9, size: 38, bold: true, color: C.blue });
    text(s, "juniorien osuus teknisistä rekrytoinneista – vaikka rekrytointi kasvoi", { x: 9.15, y: 3.55, w: 3.4, h: 1.6, size: 16 });
    bottom(s, "Jos ensimmäinen porras kapenee, mistä tulevat seuraavat seniorit?");
    source(s, "Anthropic, Employment at Anthropic 16.10.2026 (tekoälyfirman omat luvut).");
    notes(s, `⏱ 27:30–29:00 · AI muuttaa työtä kahdesti
Kyky muuttaa tehtäviä. Odotukset muuttavat sitä, ketä palkataan, mitä opetellaan ja kuka mentoroi – jo ennen kuin ennuste on toteutunut.
Tunnista urahuoli, älä vähättele tai pilkkaa sitä.
Kortti: yksi poikkeuksellinen, nopeasti kasvava AI-yritys – juniorien osuus teknisistä rekrytoinneista laski 27 %:sta 9 %:iin, vaikka teknisiä rekrytointeja tehtiin absoluuttisesti enemmän. Osuus ≠ menetetyt työpaikat.
Taustaksi (vain puheessa): Stanfordin päivitetty analyysi Yhdysvalloista – 22–25-vuotiaiden työllisyys AI:lle altistuneissa ammateissa noin 19 % alempi kuin verrokeilla, kuvaileva, ei kausaalinen, ei Suomen lukuja.
Lähteet: https://www.anthropic.com/research/employment-at-anthropic · https://digitaleconomy.stanford.edu/news/canariesaug26/`);
  }

  // 23 meme: find the differences (recreated)
  {
    const s = plain(sec);
    text(s, "Firma haluaa, että etsit erot näistä kahdesta PR:stä.", { x: 0.6, y: 0.55, w: 12.1, h: 0.8, size: 28, bold: true, align: "center", valign: "middle" });
    const lines = [{ t: "const payload = {", kind: "ctx" }, { t: "  street: form.street,", kind: "ctx" }, { t: "  apartment: form.apartment,", kind: "add" }, { t: "};", kind: "ctx" }];
    [["AI kirjoitti", 0.6], ["Ihminen kirjoitti", 6.85]].forEach(([lab, x]) => {
      mono(s, lab, { x, y: 1.6, w: 5.85, h: 0.45, size: 18, bold: true, align: "center" });
      codeCard(s, lines, { x, y: 2.15, w: 5.85, h: 2.2, size: 17 });
    });
    text(s, "”Ne ovat sama PR.”", { x: 0.6, y: 4.9, w: 12.1, h: 1.0, size: 44, bold: true, align: "center", valign: "middle" });
    notes(s, `⏱ 29:00–30:00 · Meemi (Corporate needs you to find the differences, koottu uudelleen)
Naurun jälkeen sano: alkuperä ei kerro laatua. Joku joutuu silti lukemaan ja ymmärtämään sen.
Halutessasi vaihda alkuperäiseen meemipohjaan suomenkielisillä teksteillä.`);
  }

  // ============================================================ D
  sec = SEC.d;
  pres.addSection({ title: sec.title });

  // 24 Finland
  {
    const s = content(sec, "Suomen IT-ala ei mahdu yhteen käyrään", "Toimialan tilannekuva, elokuu 2026");
    const stats = [["19 mrd €", "liikevaihto 2025", "+5 % vuodesta 2024", C.blue], ["−12 %", "uudet tilaukset Q2 vs. Q1", "+6 % vuoden takaiseen", C.red], ["~80 200", "työntekijää kesäkuun lopussa", "−1 % maaliskuun lopusta", C.blue]];
    stats.forEach(([n, l, sm, col], i) => {
      const x = 0.6 + i * 4.1;
      card(s, { x, y: 1.95, w: 3.8, h: 3.4 });
      text(s, n, { x: x + 0.3, y: 2.2, w: 3.4, h: 1.1, size: 48, bold: true, color: col, valign: "middle" });
      text(s, l, { x: x + 0.3, y: 3.35, w: 3.3, h: 0.9, size: 19, bold: true });
      mono(s, sm, { x: x + 0.3, y: 4.35, w: 3.3, h: 0.6, size: 13, color: C.muted });
    });
    bottom(s, "Paine on todellinen. Syy ei ole yksi.");
    source(s, "Teknologiateollisuus, tietotekniikka-ala, elokuun 2026 katsaus · tilauskysely ei sisällä peli- ja datakeskusyrityksiä · PÄIVITÄ ennen tilaisuutta.");
    notes(s, `⏱ 30:00–31:00 · Suomen tilannekuva
Liikevaihto kasvoi, mutta tilaukset ja henkilöstö kertovat eri tarinaa. Luvut eivät erottele AI:n vaikutusta – heikko markkina, viivästyneet investoinnit ja julkisen sektorin säästöt vaikuttavat yhtä aikaa.
Älä käytä vanhoja lukuja (20 mrd €, +9 %).
TODO marraskuussa: päivitä uusimpaan toimialakatsaukseen ja muuta alaotsikon ajankohta.
Lähde: https://teknologiateollisuus.fi/talous-ja-tilastot/teknologiateollisuuden-talousnakymat/tietotekniikka-ala/`);
  }

  // 25 Statistics Finland
  for (const step of ["a", "b"]) {
    const s = content(sec, "Monessako yrityksessä AI on käytössä?", "Vähintään 10 hengen yritykset Suomessa, kevät 2025");
    barChart(s, ["Tieto ja viestintä", "Kaikki toimialat", "Rakentaminen", "Kuljetus ja varastointi"], step === "a" ? [0, 0, 0, 0] : [80, 38, 24, 13], { x: 0.5, y: 1.9, w: 9.0, h: 4.0, name: "AI käytössä" });
    if (step === "a") ask(s, { x: 9.7, y: 2.3, w: 3.0, h: 1.7, label: "// arvaa", text: "Rakentaminen?", size: 24 });
    else {
      card(s, { x: 9.7, y: 2.3, w: 3.0, h: 2.4 });
      text(s, "15 %", { x: 9.95, y: 2.45, w: 2.6, h: 0.85, size: 40, bold: true, color: C.blue });
      text(s, "yrityksistä on dokumentoidut AI-ohjeet", { x: 9.95, y: 3.3, w: 2.6, h: 1.2, size: 16 });
      bottom(s, "Asiakkaan pullonkaula ei välttämättä ole mallin älykkyys.");
    }
    source(s, "Tilastokeskus 27.11.2025 · laaja AI-määritelmä · itse ilmoitettu · koko maa, ei Etelä-Pohjanmaa.");
    notes(s, step === "a" ? `⏱ 31:00–31:30 · Arvaus
🙋 "Monessako rakennusalan yrityksessä AI on käytössä?"` : `⏱ 31:30–32:10 · Tulos
Tieto ja viestintä 80 %, kaikki toimialat 38 %, rakentaminen 24 %, kuljetus ja varastointi 13 %. Vain 15 %:lla yrityksistä on dokumentoidut AI-ohjeet.
Kehittäjäyhteisön oma työkalutottumus on huono mittari asiakkaan lähtötasolle. Integrointi, koulutus ja käytännöt voivat merkitä enemmän kuin seuraava malli.
TODO: jos Tilastokeskuksen vuoden 2026 julkaisu ilmestyy ennen tilaisuutta (todennäköisesti marraskuun lopussa), päivitä luvut.
Lähde: https://stat.fi/fi/julkaisu/cm1hnps701dbm07w59uo0jw6u`);
  }

  // 26 local opportunity
  {
    const s = content(sec, "Mitä täällä kannattaa nyt rakentaa?", "Kun koodi halpenee, mikä lähellä on arvokasta?");
    const items = [["FaIndustry", "Tunne oikea työ"], ["FaPeopleGroup", "Pääse käyttäjien luo"], ["FaPlug", "Liitä nykyisiin järjestelmiin"], ["FaScrewdriverWrench", "Tue käytössä"]];
    for (let i = 0; i < 4; i++) {
      const y = 1.95 + i * 0.95;
      iconCircle(s, await icon(items[i][0], C.blue), 0.6, y, 0.72);
      text(s, items[i][1], { x: 1.55, y, w: 4.8, h: 0.72, size: 22, bold: true, valign: "middle" });
    }
    card(s, { x: 6.9, y: 1.95, w: 5.8, h: 2.0 });
    text(s, "Asiakas ostaa myös käyttöönoton, hallinnan ja jatkuvuuden.", { x: 7.15, y: 2.1, w: 5.3, h: 1.0, size: 19, bold: true });
    mono(s, "esim. Gofore × Tampereen yliopisto: AI-alusta – arkkitehtuuri, toteutus, hallinta, ylläpito", { x: 7.15, y: 3.05, w: 5.3, h: 0.8, size: 12, color: C.muted });
    s.addImage({ path: A("maintenance-illustration.png"), x: 6.9, y: 4.15, w: 1.55, h: 1.55 });
    text(s, "Huoltokirjaus-kokeilu: kuka tietää, miten merkinnät tehdään ja minne ne päätyvät?", { x: 8.65, y: 4.2, w: 4.05, h: 1.45, size: 15, italic: true, color: C.muted, valign: "middle" });
    bottom(s, "Mikä asiakkaan ongelma jää ratkaisematta, vaikka koodi olisi ilmaista?");
    source(s, "esityksen tulkinta · Gofore, elokuun liiketoimintakatsaus 11.9.2026 · Lakeus-Devaus · SEAMK Testauspaja: River IT 9/2026 · kuvitteellinen esimerkki.");
    notes(s, `⏱ 32:10–34:30 · Paikallinen etu
Tämä on esityksen ehdotus, ei todiste: kun geneerinen toteutus halpenee, oikean työn tunteminen, pääsy käyttäjiin, integrointi ja tuki voivat olla lähellä olevan tekijän vahvuuksia. Läheisyys ei takaa mitään.
Gofore–Tampereen yliopisto: asiakas osti arkkitehtuurin, toteutuksen, hallinnan ja ylläpidon – ei vain koodia. Yrityksen oma kertomus, kasvua ei voi laskea AI:n ansioksi.
"Moon härmästä" – tähän sopii oma lause siitä, miksi tunnet täkäläisen työn.
Keskustelu on jo täällä: SEAMKin Testauspaja: River IT syyskuussa käsitteli paikallisia malleja ja agenttikäyttöä.
🙋 "Mikä asiakkaan ongelma jää ratkaisematta, vaikka koodi olisi ilmaista?"
Lähteet: https://gofore.com/en/news/gofore-plcs-business-review-for-august-2026-net-sales-19-3-million-euros/ · https://www.seamk.fi/tapahtuma/testauspaja-river-it/`);
  }

  // 27 divider → practical
  divider(sec, 4, `⏱ 34:30–35:00 · Puoliskojen vaihto
"Nyt käytäntöön." Vaihda energiaa: seuraavat 20 minuuttia ovat yhtä bugia alusta loppuun.`);

  // ============================================================ PRACTICAL
  sec = SEC.p;
  pres.addSection({ title: sec.title });

  const formFields = (apt, state) => [["Katuosoite", "Esimerkkikatu 12"], ["Huoneisto", apt, state], ["Postinumero", "60100"], ["Kaupunki", "Seinäjoki"]];

  // 28 bug
  {
    const s = content(sec, "Asiakas: huoneiston numero katoaa", "Osoite tallentuu – B 7 ei");
    browser(s, { x: 0.6, y: 1.9, w: 5.8, h: 3.3, url: "esimerkki.fi/omat-tiedot", caption: "Ennen tallennusta", fields: formFields("B 7"), fieldH: 0.45 });
    browser(s, { x: 6.9, y: 1.9, w: 5.8, h: 3.3, url: "esimerkki.fi/omat-tiedot", caption: "Uudelleenlatauksen jälkeen", captionColor: C.red, fields: formFields("—", "bad"), fieldH: 0.45 });
    arrow(s, 6.43, 3.55, 0.42, 0, C.grey, 2.5);
    let x = 0.8;
    STAGES.forEach((st, i) => {
      s.addText(st.toLowerCase(), { shape: pres.shapes.ROUNDED_RECTANGLE, rectRadius: 0.06, x, y: 5.4, w: 1.4, h: 0.42, fill: { color: C.blueSoft }, line: { color: C.blueLine }, fontFace: MONO, fontSize: 12, color: C.blue, align: "center", valign: "middle", margin: 1 });
      if (i < STAGES.length - 1) arrow(s, x + 1.42, 5.61, 0.2, 0, C.blue, 1.25);
      x += 1.65;
    });
    bottom(s, "Agentti saa tehdä tästä ison osan. Katsotaan, mitä sinulle jää.", { y: 5.98 });
    source(s, "kuvitteellinen esimerkki.", 8.4);
    notes(s, `⏱ 35:00–36:10 · Bugi
"Asiakas ilmoittaa: kun osoite tallennetaan, huoneiston numero katoaa." Näytä ennen/jälkeen.
Alla oleva ketju on sama, joka oli toimitusketjun "Toteutus"-laatikon sisällä: rajaa, anna konteksti, toista, korjaa, tarkista, luovuta, seuraa.
Tämä on opetusesimerkki, ei asiakasprojekti eikä ajettu demo. Esitys näyttää vaiheet dioina.`);
  }

  // 29 brief
  {
    const s = content(sec, "Kerro, miltä valmis näyttää", "Sama pyyntö kahdella tavalla");
    card(s, { x: 0.6, y: 2.0, w: 4.0, h: 2.4 });
    mono(s, "// epämääräinen", { x: 0.85, y: 2.15, w: 3.5, h: 0.35, size: 12, color: C.muted });
    text(s, "”Korjaa osoitelomake.”", { x: 0.85, y: 2.65, w: 3.5, h: 1.4, size: 24, bold: true, valign: "middle" });
    arrow(s, 4.75, 3.2, 0.55, 0, C.grey, 2.5);
    card(s, { x: 5.5, y: 1.9, w: 7.2, h: 3.75 });
    const rows = [["Ongelma", "Huoneiston numero katoaa tallennuksessa."], ["Tavoite", "Osoite säilyy myös uudelleenlatauksessa."], ["Raja", "Rajapinta ja muu osoitekäytös pysyvät ennallaan."], ["Näyttö", "Toistettu virhe, regressiotesti, toimiva tallennus."]];
    rows.forEach(([k, v], i) => {
      const y = 2.08 + i * 0.86, key = i === 3;
      if (key) s.addShape(pres.shapes.RECTANGLE, { x: 5.55, y: y - 0.02, w: 7.1, h: 0.78, fill: { color: C.blueSoft }, line: { color: C.blueSoft } });
      mono(s, k.toLowerCase() + ":", { x: 5.8, y, w: 1.7, h: 0.72, size: 16, bold: true, color: key ? C.blue : C.muted, valign: "middle" });
      text(s, v, { x: 7.5, y, w: 5.1, h: 0.72, size: 18, bold: key, color: key ? C.blue : C.ink, valign: "middle" });
    });
    bottom(s, "Jos et osaa sanoa, mikä riittää näytöksi, et vielä tiedä, mitä pyydät.", { w: 8.4, size: 18 });
    strip(s, 0);
    notes(s, `⏱ 36:10–37:30 · Kerro, miltä valmis näyttää
Vasemmalla agentti ei tiedä, mikä on vialla eikä miten muutos arvioidaan. Oikealla ongelma, tavoite, raja ja näyttö mahtuvat neljään riviin. Näyttö on se tärkein.
"Säilytä rajapinta" koskee tätä esimerkkiä, ei jokaista korjausta.
🙋 20 sekuntia: "Ajatelkaa yksi oma tehtävä näillä neljällä rivillä."
Pitkä versio: "Osoitteen muokkaaminen kadottaa huoneiston numeron. Selvitä ensin, missä tieto katoaa, ja toista virhe. Korjaa rajattu syy nykyisiä käytäntöjä seuraten. Säilytä rajapinta ja muu osoitekäytös. Lisää regressiotarkistus ja varmista tallennus myös sivun uudelleenlatauksen jälkeen. Kerro muutoksen syy, ajetut tarkistukset ja avoimet kysymykset. Älä julkaise muutosta."
Sama pohja on QR-koodin takana lopussa.
Lähteet: https://learn.chatgpt.com/docs/prompting · https://code.claude.com/docs/en/best-practices`);
  }

  // 30 project truth
  {
    const s = content(sec, "Kerro agentille se, mitä koodi ei kerro", "AGENTS.md (Codex) · CLAUDE.md (Claude Code)");
    card(s, { x: 0.6, y: 1.95, w: 4.2, h: 3.6, fill: C.code, line: C.codeLine });
    const tree = ["osoitepalvelu/", "├─ src/address.ts", "├─ tests/address.test.ts", "├─ package.json", "├─ README.md", "└─ AGENTS.md"];
    tree.forEach((t, i) => mono(s, t, { x: 0.85, y: 2.15 + i * 0.52, w: 3.8, h: 0.45, size: 16, color: i === 5 ? C.blue : C.ink, bold: i === 5, valign: "middle" }));
    codeCard(s, [{ t: "# Osoitteet", kind: "comment" }, { t: "- Testit: npm test -- address", kind: "ctx" }, { t: "- Huoneisto on vapaaehtoinen kenttä.", kind: "ctx" }, { t: "- Älä muuta /api/address-rajapintaa.", kind: "ctx" }], { x: 5.2, y: 1.95, w: 7.5, h: 2.5, size: 18, noSigns: true, header: "AGENTS.md", lineH: 0.44 });
    ask(s, { x: 5.2, y: 4.6, w: 7.5, h: 1.15, label: "// tutkimus", text: "Ohjetiedostot eivät yleisesti parantaneet onnistumista – kustannus nousi yli 20 %.", size: 16, fill: C.amberSoft, line: C.amberLine, labelColor: C.amber });
    bottom(s, "Ohjeenkin pitää ansaita paikkansa.", { w: 8.4 });
    source(s, "Evaluating AGENTS.md, v3 29.9.2026 · Codex- ja Claude Code -dokumentaatio · kuvitteellinen esimerkki.", 8.4);
    strip(s, 1);
    notes(s, `⏱ 37:30–38:40 · Projektin oma totuus
Codexille AGENTS.md, Claude Codelle CLAUDE.md. Kirjoita sinne vain se, mitä koodi ei itse kerro: testikomento, poikkeukselliset säännöt, rajat.
Tutkimus (v3, syyskuu 2026): ohjetiedostot eivät yleisesti parantaneet tehtävien onnistumista testatuissa asetelmissa, ja kustannus nousi yli 20 %. Se ei tarkoita "poista ohjeet", vaan: lyhyt ja paikkansapitävä voittaa pitkän ja yleisen.
Tehtäväkohtainen tavoite kuuluu pyyntöön, toistuva projektitieto pysyviin ohjeisiin.
Lähteet: https://arxiv.org/abs/2602.11988v3 · https://learn.chatgpt.com/docs/agent-configuration/agents-md · https://code.claude.com/docs/en/best-practices`);
  }

  // 31 tools hub
  {
    const s = content(sec, "Mitä agentti saa käyttää?", "Vain sitä, mitä tehtävä tarvitsee");
    const cx = 6.67, cy = 3.7;
    const sats = [["FaTerminal", "Shell", "testikomento", 1.3, 2.0], ["FaGlobe", "Selain", "näkyvä toiminta", 9.3, 2.0], ["FaPlug", "MCP", "tikettijärjestelmä", 1.3, 4.4], ["FaBookOpen", "Skill", "toistettava työtapa", 9.3, 4.4]];
    for (const [, , , x, y] of sats) {
      const left = x < cx, top = y < cy;
      seg(s, left ? x + 2.7 : x, y + 0.6, cx + (left ? -0.8 : 0.8), cy + (top ? -0.7 : 0.7), C.grey, 1.5);
    }
    s.addShape(pres.shapes.OVAL, { x: cx - 1.05, y: cy - 1.05, w: 2.1, h: 2.1, fill: { color: C.blueSoft }, line: { color: C.blue, width: 2 } });
    s.addImage({ data: await icon("FaRobot", C.blue), x: cx - 0.45, y: cy - 0.75, w: 0.9, h: 0.9 });
    mono(s, "agentti", { x: cx - 1.05, y: cy + 0.25, w: 2.1, h: 0.4, size: 15, bold: true, color: C.blue, align: "center" });
    for (const [ic, name, desc, x, y] of sats) {
      card(s, { x, y, w: 2.7, h: 1.2 });
      s.addImage({ data: await icon(ic, C.blue), x: x + 0.22, y: y + 0.32, w: 0.55, h: 0.55 });
      text(s, name, { x: x + 0.95, y: y + 0.15, w: 1.7, h: 0.5, size: 20, bold: true, valign: "middle" });
      mono(s, desc, { x: x + 0.95, y: y + 0.65, w: 1.7, h: 0.4, size: 12, color: C.muted, valign: "middle" });
    }
    bottom(s, "Enemmän työkaluja ei tarkoita parempaa agenttia.", { w: 8.4 });
    source(s, "MCP client best practices · Codex skills · Claude Code workflows.", 8.4);
    strip(s, 1);
    notes(s, `⏱ 38:40–39:50 · Työkalut
Shellillä agentti ajaa projektin testikomennon. Selaimella se näkee, mitä käyttäjä näkee. MCP voi tuoda liitetyn palvelun, kuten tikettijärjestelmän – jos se on asennettu ja sallittu. Skill kuvaa toistettavan työtavan.
Nämä eivät ole sama asia, eikä jokainen tehtävä tarvitse kaikkia. Hyvä CLI tai pieni skripti on usein yksinkertaisempi kuin MCP paikalliseen työhön.
Arvioi agenttia tuloksesta, ei käytettyjen työkalujen määrästä.
Lähteet: https://modelcontextprotocol.io/docs/develop/clients/client-best-practices · https://learn.chatgpt.com/docs/build-skills · https://code.claude.com/docs/en/common-workflows`);
  }

  // 32 reproduce
  for (const step of ["a", "b"]) {
    const s = content(sec, "Ensin toistetaan, sitten korjataan", "Lomake → pyyntö → tallennus → lataus");
    const chain = [["Lomake", "B 7", "ok"], ["Pyyntö", step === "b" ? "ei huoneistoa" : "?", step === "b" ? "bad" : "q"], ["Tallennus", "?", "q"], ["Lataus", "—", "bad"]];
    chain.forEach(([k, v, st], i) => {
      const x = 0.6 + i * 3.15, bad = step === "b" && i === 1;
      card(s, { x, y: 2.3, w: 2.65, h: 1.8, fill: bad ? C.redSoft : C.white, line: bad ? C.red : C.line, lw: bad ? 2 : 1 });
      text(s, k, { x, y: 2.45, w: 2.65, h: 0.6, size: 22, bold: true, align: "center" });
      mono(s, v, { x, y: 3.1, w: 2.65, h: 0.7, size: 19, bold: true, align: "center", valign: "middle", color: st === "ok" ? C.green : st === "bad" ? C.red : C.grey });
      if (i < 3) arrow(s, x + 2.7, 3.2, 0.4, 0, C.grey, 2.5);
    });
    if (step === "a") ask(s, { x: 8.2, y: 4.45, w: 4.5, h: 1.25, text: "Missä arvo voi kadota? Huutakaa.", size: 20 });
    bottom(s, "Korjaus ilman toistoa on arvaus.", { w: 7.4 });
    source(s, "kuvitteellinen esimerkki.", 8.4);
    strip(s, 2);
    notes(s, step === "a" ? `⏱ 39:50–40:30 · Toista ensin
Pyydä agenttia toistamaan virhe ennen kuin se korjaa mitään, ja seuraamaan arvoa ketjun läpi.
🙋 "Missä arvo voi kadota? Huutakaa."` : `⏱ 40:30–41:00 · Löytyi
Tässä esimerkissä huoneisto puuttuu jo lähetettävästä pyynnöstä. Agentti on hyvä tässä: se hakee koodista, toistaa ja seuraa arvoa.
Sinä vahvistat, että tämä on oikea virhe – ei vain yksi oire.`);
  }

  // 33 storyboard
  {
    const s = content(sec, "Mitä agentti tekee, kun sinä et katso?", "Yksi kierros, neljä vaihetta");
    const frames = [["FaFolderOpen", "lukee repon ja ohjeet", "", "ctx"], ["FaVialCircleCheck", "ajaa testin", "✗ ei läpi", "del"], ["FaPenToSquare", "muokkaa koodia", "", "ctx"], ["FaArrowsRotate", "ajaa testin uudelleen", "läpi?", "add"]];
    for (let i = 0; i < 4; i++) {
      const x = 0.6 + i * 3.15;
      card(s, { x, y: 2.1, w: 2.75, h: 3.2, fill: C.code, line: C.codeLine });
      mono(s, `0${i + 1}`, { x: x + 0.2, y: 2.22, w: 0.8, h: 0.4, size: 16, bold: true, color: C.blue });
      s.addImage({ data: await icon(frames[i][0], C.ink), x: x + 0.98, y: 2.75, w: 0.8, h: 0.8 });
      text(s, frames[i][1], { x: x + 0.15, y: 3.75, w: 2.45, h: 0.9, size: 18, bold: true, align: "center", valign: "middle" });
      if (frames[i][2]) mono(s, frames[i][2], { x: x + 0.15, y: 4.65, w: 2.45, h: 0.45, size: 16, bold: true, align: "center", color: frames[i][3] === "del" ? C.red : C.green });
      if (i < 3) arrow(s, x + 2.8, 3.7, 0.3, 0, C.grey, 2.5);
    }
    source(s, "kuvitteellinen esimerkki.", 8.4);
    strip(s, 3);
    notes(s, `⏱ 41:00–41:30 · Agentin kierros
Tämä korvaa näyttötallenteen (päätös 18.10.2026: vain diat, ei videota).
Agentti lukee repon ja ohjeet, ajaa testin (ei läpi), muokkaa koodia ja ajaa testin uudelleen. Tämä kierros toistuu, kunnes tarkistus menee läpi tai agentti pysähtyy kysymään.`);
  }

  // 34 diff + checks
  for (let step = 1; step <= 3; step++) {
    const s = content(sec, "Kolme riviä ja testi", "Muutos, regressiotesti ja selain uudelleenlatauksen jälkeen");
    codeCard(s, [{ t: "const payload = {", kind: "ctx" }, { t: "  street: form.street,", kind: "ctx" }, { t: "  apartment: form.apartment,", kind: "add" }, { t: "  postalCode: form.postalCode,", kind: "ctx" }, { t: "};", kind: "ctx" }], { x: 0.6, y: 1.95, w: 6.6, h: 3.0, size: 18, header: "src/address.ts", lineH: 0.44 });
    if (step >= 2) {
      mono(s, "// odotettu tulos – ei ajettu", { x: 7.6, y: 1.95, w: 5.1, h: 0.35, size: 12, color: C.muted });
      [["npm test -- address", "ei läpi → läpi"], ["tyhjä huoneisto", "toimii"]].forEach(([cmd, res], i) => {
        s.addText([{ text: cmd + "   ", options: { fontFace: MONO, fontSize: 12 } }, { text: "odotettu: " + res, options: { fontFace: MONO, fontSize: 12, bold: true } }], {
          shape: pres.shapes.ROUNDED_RECTANGLE, rectRadius: 0.25, x: 7.6, y: 2.4 + i * 0.72, w: 5.1, h: 0.56, fill: { color: C.faint }, line: { color: C.grey, width: 1 }, color: C.muted, valign: "middle", margin: 8,
        });
      });
    }
    if (step >= 3) {
      browser(s, { x: 7.6, y: 3.95, w: 5.1, h: 1.7, url: "esimerkki.fi/omat-tiedot", fields: [["Huoneisto", "B 7", "good"]], fieldH: 0.5 });
      mono(s, "uudelleenlatauksen jälkeen", { x: 7.9, y: 5.17, w: 4.6, h: 0.35, size: 12, color: C.muted });
    }
    bottom(s, "Mitä tämä testi ei todista?", { w: 8.4 });
    source(s, "kuvitteellinen esimerkki · tarkistuksia ei ole ajettu – siksi tulokset ovat harmaita.", 8.4);
    strip(s, 3);
    notes(s, step === 1 ? `⏱ 41:30 · Muutos
Korjauksen ydin: huoneisto puuttui lähetettävästä tiedosta, ja se lisätään. Pieni muutos – helppo katselmoida.` : step === 2 ? `⏱ 41:50 · Tarkistukset
Regressiotesti, joka ensin epäonnistuu ja sitten menee läpi, ja tyhjän huoneiston tapaus.
Tulokset ovat harmaita ja "odotettuja", koska tätä ei ole oikeasti ajettu. Älä koskaan näytä ajamatonta tarkistusta läpimenneenä.` : `⏱ 42:10–42:50 · Selain
Arvo säilyy uudelleenlatauksen jälkeen.
🙋 "Mitä tämä testi ei todista?" Ota kaksi vastausta. Kaiva esiin: vanhat tietueet, joista huoneisto jo puuttuu; muiden maiden osoitemuodot; käyttäjän todellinen työnkulku.`);
  }

  // 35 comic
  {
    const s = plain(sec);
    const robot = await icon("FaRobot", C.blue);
    const panels = [
      { x: 0.6, y: 0.45, who: "agent", say: "Valmis! Kaikki testit menee läpi." },
      { x: 6.75, y: 0.45, who: "me", say: "Ajoitko ne?" },
      { x: 0.6, y: 3.85, who: "agent", say: "…" },
      { x: 6.75, y: 3.85, who: "agent", say: "Ajan ne nyt." },
    ];
    for (const p of panels) {
      card(s, { x: p.x, y: p.y, w: 5.95, h: 3.2, line: C.ink, lw: 2, r: 0.06 });
      if (p.who === "agent") {
        s.addShape(pres.shapes.OVAL, { x: p.x + 0.35, y: p.y + 0.85, w: 1.8, h: 1.8, fill: { color: C.blueSoft }, line: { color: C.blueLine } });
        s.addImage({ data: robot, x: p.x + 0.7, y: p.y + 1.2, w: 1.1, h: 1.1 });
      } else {
        avatar(s, p.x + 0.35, p.y + 0.85, 1.8);
      }
      s.addText(p.say, { shape: pres.shapes.ROUNDED_RECTANGULAR_CALLOUT, x: p.x + 2.6, y: p.y + 0.4, w: 3.1, h: 1.5, fill: { color: C.white }, line: { color: C.ink, width: 1.5 }, fontFace: BODY, fontSize: 20, bold: true, color: C.ink, align: "center", valign: "middle", margin: 6 });
    }
    notes(s, `⏱ 42:50–43:10 · Sarjakuva
Anna lukea itse. Siirry suoraan seuraavaan diaan: "Siksi tarkistuksella on portaat."`);
  }

  // 36 ladder
  {
    const s = content(sec, "”Toimii mun koneella” ei vielä riitä", "48 % vastaajista luottaa AI:hin, kun tuloksen voi helposti tarkistaa");
    const steps = ["Toimii mun koneella", "Käynnistyy", "Ratkaisee ilmoitetun ongelman", "Ei riko muuta", "Toimii uudelleen- latauksen jälkeen", "Käyttäjä hyväksyy"];
    const fills = [C.faint, "DBEAFE", "BFDBFE", "93C5FD", "60A5FA", C.blue];
    steps.forEach((st, i) => {
      const x = 0.6 + i * 1.35, h = 0.45 + i * 0.45, y = 5.55 - h;
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: 1.28, h, fill: { color: fills[i] }, line: { color: C.white, width: 1 } });
      mono(s, String(i), { x, y: y + 0.05, w: 1.28, h: 0.4, size: 16, bold: true, color: i >= 4 ? C.white : C.ink, align: "center" });
      text(s, st, { x: x - 0.1, y: y - 0.95, w: 1.48, h: 0.9, size: 13, bold: true, align: "center", valign: "bottom" });
    });
    card(s, { x: 9.0, y: 1.95, w: 3.7, h: 3.6 });
    mono(s, "// mitä AI:n vastaukselle tehdään", { x: 9.2, y: 2.1, w: 3.4, h: 0.4, size: 11, color: C.muted });
    [["76,5 %", "ajaa paikallisesti"], ["63,9 %", "vertaa koodipohjaan"], ["53,0 %", "tarkistaa testit tai tietoturvan"], ["9,6 %", "käyttää sellaisenaan"]].forEach(([n, l], i) => {
      text(s, n, { x: 9.2, y: 2.6 + i * 0.7, w: 1.3, h: 0.55, size: 20, bold: true, color: C.blue, valign: "middle" });
      text(s, l, { x: 10.5, y: 2.6 + i * 0.7, w: 2.1, h: 0.55, size: 14, valign: "middle" });
    });
    bottom(s, "Mille portaalle sinä yleensä jäät?", { w: 8.4 });
    source(s, "esityksen tulkinta (portaat) · Stack Overflow 2026, n = 14 304 (luottamus) ja n = 13 162 (toimet) · monivalinta, itse raportoitu.", 8.4);
    strip(s, 4);
    notes(s, `⏱ 43:10–44:20 · Tarkistuksen portaat
Portaat ovat esityksen oma jäsennys: käynnistyy → ratkaisee ongelman → ei riko muuta → toimii uudelleenlatauksessa → käyttäjä hyväksyy.
Kortin luvut: Stack Overflow 2026. 48 % valitsi vaihtoehdon "luotan, kun tulos on helppo tarkistaa" – vastausvaihtoehto, ei virhetodennäköisyys. Toimet ovat itse raportoituja ja päällekkäisiä.
Gallup-viittaus: "Luetko AI-koodin?"
🙋 "Mille portaalle sinä yleensä jäät?" (retorinen)
Lähteet: https://survey.stackoverflow.co/2026/ai/data/ai-trust · https://survey.stackoverflow.co/2026/ai/data/ai-work-next`);
  }

  // 37 handoff
  {
    const s = content(sec, "Hyvä luovutus: muutos ja todisteet samassa paketissa", "Malliluovutus – näin katselmoija pääsee nopeasti kiinni");
    card(s, { x: 1.4, y: 1.9, w: 10.5, h: 3.95 });
    s.addShape(pres.shapes.RECTANGLE, { x: 1.43, y: 1.93, w: 10.44, h: 0.5, fill: { color: C.faint }, line: { color: C.faint } });
    mono(s, "luovutus · fix: säilytä huoneisto tallennuksessa", { x: 1.7, y: 1.93, w: 9.5, h: 0.5, size: 13, color: C.muted, valign: "middle" });
    const rows = [["miksi", "Huoneisto puuttui lähetetystä tiedosta."], ["mitä muuttui", "Kenttä lisättiin tallennukseen."], ["miten tarkistettiin", "Regressiotesti + selain uudelleenlatauksen jälkeen."], ["avoin päätös", "Korjataanko vanhat tietueet, joista huoneisto jo puuttuu?"]];
    rows.forEach(([k, v], i) => {
      const y = 2.6 + i * 0.8, open = i === 3;
      if (open) s.addShape(pres.shapes.RECTANGLE, { x: 1.45, y: y - 0.04, w: 10.4, h: 0.78, fill: { color: C.amberSoft }, line: { color: C.amberSoft } });
      mono(s, k, { x: 1.8, y, w: 3.0, h: 0.7, size: 15, bold: true, color: open ? C.amber : C.muted, valign: "middle" });
      text(s, v, { x: 4.9, y, w: 6.8, h: 0.7, size: 19, bold: open, valign: "middle" });
    });
    bottom(s, "Älä tee nopeudestasi jonkun toisen katselmointivelkaa.", { w: 8.4, size: 18 });
    source(s, "kuvitteellinen esimerkki.", 8.4);
    strip(s, 5);
    notes(s, `⏱ 44:20–45:20 · Luovutus
Pyydä agentilta lyhyt luovutus: miksi, mitä muuttui, miten tarkistettiin – ja mikä jäi päätettäväksi.
Avoin päätös on sinun: korjataanko vanhat tietueet, joista huoneisto jo puuttuu? Agentti voi ehdottaa, mutta päätös on ihmisen.
Muistuta curlista: nopeus ei saa siirtyä toisen ihmisen katselmointivelaksi.
AI voi auttaa katselmoinnissa, mutta sen löydökset pitää tarkistaa.`);
  }

  // 38 sliders
  {
    const s = content(sec, "Saako agentti yhdistää tämän itse?", "Mitä helpompi tarkistaa ja perua, sitä pidempi lieka");
    gallupPin(s, "Agentin PR tuotantoon?");
    const sl = [["Vaikutusalue", "paikallinen", "koko tuotanto", 0.25], ["Peruttavuus", "heti", "vaikea perua", 0.2], ["Tarkistettavuus", "koneellinen", "viiveellä / makuasia", 0.35], ["Elinikä", "kertakäyttö", "vuosien ylläpito", 0.8]];
    sl.forEach(([k, l, r, pos], i) => {
      const y = 2.05 + i * 0.95;
      text(s, k, { x: 0.6, y, w: 2.7, h: 0.6, size: 20, bold: true, valign: "middle" });
      mono(s, l, { x: 3.3, y, w: 2.2, h: 0.6, size: 13, color: C.muted, valign: "middle", align: "right" });
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.7, y: y + 0.24, w: 4.6, h: 0.12, rectRadius: 0.06, fill: { color: C.line }, line: { color: C.line } });
      s.addShape(pres.shapes.OVAL, { x: 5.7 + pos * 4.6 - 0.18, y: y + 0.12, w: 0.36, h: 0.36, fill: { color: C.blue }, line: { color: C.white, width: 2 } });
      mono(s, r, { x: 10.45, y, w: 2.4, h: 0.6, size: 13, color: C.muted, valign: "middle" });
    });
    mono(s, "● = osoitebugi", { x: 5.7, y: 5.8, w: 3, h: 0.35, size: 12, color: C.blue, bold: true });
    ask(s, { x: 9.1, y: 5.45, w: 3.6, h: 1.05, text: "Käsi ylös: kuka antaisi?", size: 18 });
    source(s, "esityksen tulkinta.", 8.4);
    strip(s, 5);
    notes(s, `⏱ 45:20–46:40 · Autonomia
Neljä kysymystä: kuinka laajalle vaikutus ulottuu, kuinka helposti muutoksen voi perua, voiko onnistumisen tarkistaa koneellisesti ja kuinka kauan koodi elää. Osoitebugi on pieni, peruttava ja hyvin testattava – mutta osoitekoodia ylläpidetään vuosia.
🙋 "Käsi ylös: kuka antaisi agentin yhdistää tämän itse?" Vertaa gallupin vastaukseen kysymykseen "Agentin PR tuotantoon?".
Puheessa: Stripe ajaa agentin vapaiden vaiheiden väliin aina samat lint-, Git- ja CI-vaiheet – "deterministinen selkäranka". Stack Overflow'n huhtikuun 2026 pulssissa 63 % antoi agentin toimia täysin itsenäisesti harvoin tai ei koskaan.
Lähteet: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2 · https://stackoverflow.blog/2026/05/27/agents-on-a-leash-agentic-ai-remains-mostly-monitored-at-work/`);
  }

  // 39 after release
  {
    const s = content(sec, "Julkaisu ei ole maali", "Palaute, korjaus ja omistaja jatkavat työtä");
    const loop = ["Virhe tai käyttäjän korjaus", "Selvitys", "Rajattu korjaus", "Tarkistukset", "Julkaisupäätös"];
    const cx = 3.85, cy = 3.85, RX = 2.55, RY = 1.6;
    s.addShape(pres.shapes.OVAL, { x: cx - RX, y: cy - RY, w: 2 * RX, h: 2 * RY, fill: { type: "none" }, line: { color: C.grey, width: 1.5, dashType: "dash" } });
    loop.forEach((l, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / loop.length;
      const x = cx + RX * Math.cos(a) - 1.05, y = cy + RY * Math.sin(a) - 0.38;
      s.addText(l, { shape: pres.shapes.ROUNDED_RECTANGLE, rectRadius: 0.08, x, y, w: 2.1, h: 0.76, fill: { color: i === 4 ? C.amberSoft : C.white }, line: { color: i === 4 ? C.amberLine : C.codeLine }, fontFace: BODY, fontSize: 14, bold: true, color: C.ink, align: "center", valign: "middle", margin: 3 });
    });
    s.addShape(pres.shapes.OVAL, { x: cx - 0.8, y: cy - 0.42, w: 1.6, h: 0.84, fill: { color: C.blueSoft }, line: { color: C.blue } });
    mono(s, "omistaja", { x: cx - 0.8, y: cy - 0.42, w: 1.6, h: 0.84, size: 14, bold: true, color: C.blue, align: "center", valign: "middle" });
    card(s, { x: 7.6, y: 2.0, w: 5.1, h: 2.9 });
    mono(s, "// esijulkaisu", { x: 7.85, y: 2.15, w: 4.6, h: 0.35, size: 12, color: C.muted });
    text(s, "Kun edellisen muutoksen oli tehnyt agentti, seuraava tehtävä onnistui keskimäärin", { x: 7.85, y: 2.55, w: 4.6, h: 1.0, size: 17 });
    text(s, "5,6 %-yks. harvemmin", { x: 7.85, y: 3.55, w: 4.6, h: 0.7, size: 30, bold: true, color: C.red });
    bottom(s, "Mitä seuraava tekijä perii sinulta?", { w: 8.4 });
    source(s, "SWE-Maintain, esijulkaisu 10.10.2026 · lyhyet tehtäväketjut, valitut repot.", 8.4);
    strip(s, 6);
    notes(s, `⏱ 46:40–47:50 · Julkaisun jälkeen
Palaute ja virheet tuottavat seuraavan tehtävän. Sovi, mitä seurataan, kuka saa ilmoituksen ja kuka tekee julkaisupäätöksen.
SWE-Maintain-esijulkaisu: kun edellisen muutoksen teki agentti, seuraava tehtävä onnistui keskimäärin 5,6 %-yksikköä harvemmin. Varaus: vaatimus aiempien testien läpimenosta itse asiassa kasvatti eroa 14 yksikköön; vain kapeassa osajoukossa eroa ei havaittu. Testit eivät siis ole todistettu lääke. Ihmisen ylläpidettävyyttä ei mitattu.
Lähde: https://arxiv.org/html/2610.14768v1`);
  }

  // 40 prototype part 2
  {
    const s = content(sec, "Asentaja korjaa luonnoksen", "Huoltoesimerkki, osa 2");
    s.addImage({ path: A("maintenance-illustration.png"), x: 0.6, y: 1.95, w: 3.3, h: 3.3 });
    arrow(s, 4.1, 3.6, 0.6, 0, C.grey, 2.5);
    draftRecord(s, 4.95, 1.95, 7.75, 3.0, true);
    text(s, "Laakeri vaihdettiin jo – ääni tulee kytkimestä.", { x: 7.2, y: 4.95, w: 5.5, h: 0.8, font: "Bradley Hand", size: 22, color: C.blue, rot: -2, valign: "middle" });
    bottom(s, "Selain sanoo, että toimii. Asentaja sanoo, onko siitä hyötyä.", { size: 19 });
    source(s, "kuvitteellinen esimerkki · kuvitus luotu tekoälyllä.");
    notes(s, `⏱ 47:50–48:50 · Prototyyppi, osa 2
Paluu huoltoesimerkkiin: luonnos syntyy, asentaja korjaa sen. Toimiva selain todistaa, että ohjelma toimii – ei sitä, että siitä on hyötyä.
🙋 "Mihin kuvat menevät? Kuka korjaa väärän kirjauksen? Kuka tukee sesonkiaikana?"
Kuvitteellinen esimerkki, ei asiakastapaus.`);
  }

  // 41 learning
  {
    const s = content(sec, "Delegoi työ – mutta harjoittele ymmärrystä", "Kolme pientä tapaa");
    ask(s, { x: 0.6, y: 1.95, w: 12.1, h: 1.3, label: "// ennusta", text: "”Mitä rikkoutuisi, jos huoneisto olisi tyhjä?”", size: 30 });
    const acts = [["FaComment", "Selitä", "yksi päätös"], ["FaMagnifyingGlass", "Ennusta", "yksi virhe"], ["FaWrench", "Korjaa", "yksi rikottu esimerkki"]];
    for (let i = 0; i < 3; i++) {
      const x = 0.6 + i * 4.1;
      card(s, { x, y: 3.5, w: 3.8, h: 2.15 });
      iconCircle(s, await icon(acts[i][0], C.blue), x + 0.3, 3.75, 0.75);
      text(s, acts[i][1], { x: x + 1.25, y: 3.75, w: 2.4, h: 0.75, size: 24, bold: true, color: C.blue, valign: "middle" });
      text(s, acts[i][2], { x: x + 0.3, y: 4.75, w: 3.3, h: 0.6, size: 18 });
    }
    bottom(s, "Ymmärrys ei synny sivutuotteena.");
    source(s, "esityksen tulkinta.");
    notes(s, `⏱ 48:50–50:00 · Oppiminen delegoidessa
🙋 Anna huoneen ennustaa: mitä rikkoutuisi, jos huoneisto olisi tyhjä?
Muistuta oppimiskaaviosta ääneen (älä näytä uudelleen): "Tehtävä valmistui. Ymmärrys ei välttämättä."
Kolme tapaa: selitä yksi päätös omin sanoin, ennusta yksi tapa jolla muutos rikkoutuu, korjaa yksi tarkoituksella rikottu esimerkki. Tämä on suositus, ei todistettu menetelmä.`);
  }

  // 42 recap
  {
    const s = content(sec, "Mitä agentti teki – mitä ihminen päätti?", "Osoitebugi alusta loppuun");
    const cols = [[0.6, "agentti", ["etsi syyn", "toisti virheen", "ehdotti korjausta", "kirjoitti testin", "ajoi tarkistukset", "kirjoitti luovutuksen"], C.blueSoft, C.blueLine, C.blue, "FaRobot"], [6.85, "ihminen", ["rajasi tehtävän", "päätti, mitä ”valmis” tarkoittaa", "arvioi näytön", "päätti vanhoista tietueista", "päätti julkaisusta"], C.amberSoft, C.amberLine, C.amber, "FaUser"]];
    for (const [x, h, items, fill, line, c, ic] of cols) {
      card(s, { x, y: 1.95, w: 5.85, h: 4.3, fill, line });
      s.addImage({ data: await icon(ic, c), x: x + 0.3, y: 2.15, w: 0.5, h: 0.5 });
      mono(s, h, { x: x + 0.95, y: 2.1, w: 4.3, h: 0.6, size: 24, bold: true, color: c, valign: "middle" });
      text(s, items.map((t) => "· " + t).join("\n"), { x: x + 0.4, y: 2.95, w: 5.1, h: 3.1, size: 20, paraSpaceAfter: 4 });
    }
    source(s, "kuvitteellinen esimerkki.");
    notes(s, `⏱ 50:00–51:00 · Yhteenveto bugista
Harjoitustesti: uusi kuulija osaa selittää nämä kaksi saraketta.
Siirtymä: "Opetusesimerkki oli pieni. Tältä sama näyttää oikeassa projektissa."`);
  }

  // ============================================================ SUOMIWOW
  sec = SEC.w;
  pres.addSection({ title: sec.title });

  {
    const s = plain(sec, true);
    s.addImage({ path: A("suomiwow-progress.png"), x: 0, y: 0, w: 13.333, h: 7.5, altText: "SuomiWoW-palvelun etusivu" });
    s.addText("suomiwow.vaarattu.tv", { x: 0.3, y: 7.05, w: 4, h: 0.35, fontFace: MONO, fontSize: 11, color: C.white, margin: 3, isTextBox: true, fill: { color: "000000", transparency: 35 } });
    notes(s, `⏱ 51:00–51:20 · SuomiWoW
"Moni teistä ei pelaa WoW:ia, eikä tarvitse. Tämä on suomalaisten kiltojen tulospalvelu, jota oikeat ihmiset käyttävät joka viikko."
TODO: päivitä kuvakaappaus marraskuussa.`);
  }

  {
    const s = content(sec, "SuomiWoW: vuosi agenttien kanssa", "Harrastusprojekti, oikeat käyttäjät, oikea tuotanto");
    s.addImage({ path: A("suomiwow-logo.png"), x: 10.9, y: 0.6, w: 1.8, h: 1.8 / aspect("suomiwow-logo.png") });
    [["~1 250", "committia"], ["12", "kuukautta"], ["2", "ihmistä"], ["~190 000", "riviä koodia"]].forEach(([n, l], i) => {
      const x = 0.6 + i * 2.6;
      text(s, n, { x, y: 1.85, w: 2.5, h: 0.75, size: 34, bold: true, color: C.blue, valign: "middle" });
      mono(s, l, { x, y: 2.55, w: 2.5, h: 0.4, size: 14, color: C.muted });
    });
    ["AGENTS.md", "CLAUDE.md", "PRODUCT.md", "docs/"].forEach((f, i) => {
      s.addText(f, { shape: pres.shapes.ROUNDED_RECTANGLE, rectRadius: 0.06, x: 0.6 + i * 1.75, y: 3.1, w: 1.6, h: 0.4, fill: { color: C.code }, line: { color: C.codeLine }, fontFace: MONO, fontSize: 13, color: C.ink, align: "center", valign: "middle", margin: 1 });
    });
    const cols = [[0.6, "agentti", ["Codex ja Claude Code kirjoittivat käytännössä kaiken koodin", "toteutti ominaisuudet ja korjaukset", "kirjoitti suunnitelmat ja ajokirjat (docs/)"], C.blue], [6.85, "minä: teen päätökset", ["mitä palvelu on – ja mitä se ei ole (”ei kasinoa, ei maksullista etenemistä”)", "ettei mennyttä historiaa kirjoiteta uudelleen", "mitä yhteisö oikeasti haluaa", "milloin muutos menee tuotantoon"], C.amber]];
    for (const [x, h, items, c] of cols) {
      mono(s, h, { x, y: 3.75, w: 5.85, h: 0.45, size: 18, bold: true, color: c });
      text(s, items.map((t) => "· " + t).join("\n"), { x, y: 4.25, w: 5.85, h: 1.75, size: 15, paraSpaceAfter: 3 });
    }
    bottom(s, "Mitä tässä oli halpaa – ja mikä ei?", { y: 6.1 });
    source(s, "github.com/Koodattu/suomiwow.vaarattu.tv (git log 18.10.2026) · PRODUCT.md.");
    notes(s, `⏱ 51:20–52:30 · Vuosi agenttien kanssa
"En kirjoita koodia. Minä päätän." Codex ja Claude Code kirjoittivat käytännössä kaiken koodin; minä teen päätökset.
Luvut gitistä 18.10.2026: noin 1 250 committia 12 kuukaudessa, kaksi ihmistä, noin 190 000 riviä koodia. Päivitä luvut marraskuussa.
Minä-sarake mukailee PRODUCT.md:tä: palvelu ei saa tuntua kasinolta tai maksulliselta etenemiseltä, eikä mennyttä historiaa kirjoiteta hiljaa uudelleen.
Sano yhdellä lauseella: myös tämän esityksen tutkimus tehtiin agenttien kanssa – ja jokaisesta väitteestä lavalla vastaan minä.
🙋 "Mitä tässä oli halpaa – ja mikä ei?"
Lähde: https://github.com/Koodattu/suomiwow.vaarattu.tv`);
  }

  {
    const s = content(sec, "Koodi oli halpaa. Tämä ei.", "Oikea korjaus tuotannon dataan: hahmojen identiteetit");
    codeCard(s, [
      { t: "npm run repair:character-identities", kind: "ctx" },
      { t: "# dry run, ei kirjoita mitään", kind: "comment" },
      { t: "# tarkista määrät ja esimerkit", kind: "comment" },
      { t: "# varmuuskopio · pysäytä workerit", kind: "comment" },
      { t: "npm run repair:character-identities -- --apply", kind: "ctx" },
      { t: "# käynnistä · dry run uudelleen → 0 jäljellä", kind: "comment" },
    ], { x: 0.6, y: 1.9, w: 12.1, h: 3.55, size: 20, noSigns: true, header: "docs/character-identity-repair.md (lyhennetty)", lineH: 0.46 });
    bottom(s, "Agentti kirjoitti korjauksen. Päätös ajaa se tuotantoon oli minun.", { y: 5.75, size: 22 });
    source(s, "SuomiWoW: docs/character-identity-repair.md, docs/ingestion-leases.md (lyhennetty).");
    notes(s, `⏱ 52:30–54:00 · Koodi oli halpaa. Tämä ei.
Oikea ajokirja tuotannon datan korjaukseen: ensin kuivaharjoitus, sitten varmuuskopio ja workerien pysäytys, sitten --apply, ja lopuksi tarkistus, että mitään ei jäänyt.
Muut oikeat commitit samasta aiheesta: "Separate database backups from automatic deployment", "Bound account repair transactions to fit production MongoDB cache", "Fix ingestion recovery with renewable fenced leases".
Siirtymä: "Ja tästä päästään illan kysymykseen."`);
  }

  // ============================================================ CLOSE
  sec = SEC.loppu;
  pres.addSection({ title: sec.title });

  for (let step = 1; step <= 3; step++) {
    const s = plain(sec, true);
    mono(s, "$ git diff kysymys..vastaus", { x: 0.8, y: 0.7, w: 11, h: 0.45, size: 18, color: C.darkMuted });
    darkDiff(s, " ", "Hei ohjelmistokehitys, mitä kuuluu?", 1.45, { size: 30 });
    darkDiff(s, "+", "Kiireistä. Koodia tulee enemmän kuin ehditään lukea.", 2.45, { size: 26, bold: false });
    if (step === 2) darkDiff(s, " ", "Koodi halpeni. Mikä ei?", 4.0, { size: 40, h: 1.1 });
    if (step === 3) {
      darkDiff(s, "−", "Koodi halpeni. Mikä ei?", 4.0, { size: 40, h: 1.1 });
      darkDiff(s, "+", "Koodi halpeni. Vastuu ei.", 5.2, { size: 40, h: 1.1 });
    }
    notes(s, step === 1 ? `⏱ 54:00 · Vastaus otsikkoon
"Hei ohjelmistokehitys, mitä kuuluu?" – "Kiireistä. Koodia tulee enemmän kuin ehditään lukea."` : step === 2 ? `⏱ 54:20 · Illan kysymys
Palaa alun kysymykseen: "Koodi halpeni. Mikä ei?"` : `⏱ 54:30–55:00 · Vastaus
"Vastuu ei."
Sano ääneen, ei dialla: "Koodia syntyy enemmän. Varmuus ei synny samalla nopeudella. Joku omistaa seuraukset joka tapauksessa."
Valinnainen inhimillinen lause: "Me opimme kirjoittamalla koodia. Miten seuraavat oppivat?"`);
  }

  const TAKE = ["Pyydä tulosta, jonka voit tarkistaa.", "Varmista, että osaaminen kasvaa työn mukana.", "Sovi omistajuus ennen julkaisua."];

  // 47 takeaways + Monday
  {
    const s = content(sec, "Kolme asiaa mukaan", null);
    TAKE.forEach((t, i) => {
      const x = 0.6 + i * 3.25;
      card(s, { x, y: 1.55, w: 3.0, h: 2.2 });
      mono(s, `0${i + 1}`, { x: x + 0.25, y: 1.7, w: 1, h: 0.45, size: 20, bold: true, color: C.blue });
      text(s, t, { x: x + 0.25, y: 2.2, w: 2.55, h: 1.4, size: 21, bold: true });
    });
    codeCard(s, [{ t: "// maanantaina", kind: "comment" }, { t: "yksi toistettava virhe", kind: "add" }, { t: "neljä riviä: ongelma, tavoite, raja, näyttö", kind: "add" }, { t: "katso, mitä näyttöä saat", kind: "add" }], { x: 0.6, y: 4.1, w: 9.35, h: 2.2, size: 18, lineH: 0.44 });
    card(s, { x: 10.3, y: 1.55, w: 2.4, h: 4.75 });
    s.addImage({ path: A("qr-maanantai.png"), x: 10.45, y: 1.75, w: 2.1, h: 2.1 });
    mono(s, "pohja, esimerkki\nja lähteet", { x: 10.35, y: 4.0, w: 2.3, h: 0.8, size: 13, color: C.muted, align: "center" });
    notes(s, `⏱ 55:00–56:00 · Kolme asiaa mukaan
1. Pyydä tulosta, jonka voit tarkistaa. 2. Varmista, että osaaminen kasvaa työn mukana. 3. Sovi omistajuus ennen julkaisua.
Maanantain kokeilu: ota yksi toistettava virhe, kirjoita siitä neljä riviä (ongelma, tavoite, raja, näyttö) ja katso, mitä näyttöä saat. QR-koodin takana on pohja, esimerkki ja lähteet:
https://github.com/Koodattu/lakeus-devaus-2026/blob/main/materiaalit/maanantain-kokeilu.md`);
  }

  // 48 closing
  {
    const s = plain(sec, true);
    mono(s, "// kiitos", { x: 0.8, y: 0.7, w: 6, h: 0.4, size: 16, color: C.darkBlue });
    text(s, "Minkä seurauksen sinä olet valmis omistamaan?", { x: 0.8, y: 1.2, w: 8.4, h: 1.9, size: 40, bold: true, color: C.white });
    TAKE.forEach((t, i) => mono(s, `0${i + 1}  ${t}`, { x: 0.8, y: 3.35 + i * 0.45, w: 8.4, h: 0.4, size: 15, color: C.darkText }));
    const contacts = [["FaLinkedin", "/juha-ala-rantala"], ["FaTwitch", "/vaarattu  (Twitch · TikTok · Instagram)"], ["FaGlobe", "ala-ranta.la"], ["FaEnvelope", "juha@ala-ranta.la"]];
    for (let i = 0; i < 4; i++) {
      s.addImage({ data: await icon(contacts[i][0], C.darkText), x: 0.8, y: 5.0 + i * 0.47, w: 0.32, h: 0.32 });
      mono(s, contacts[i][1], { x: 1.3, y: 4.95 + i * 0.47, w: 7, h: 0.42, size: 15, color: C.darkText, valign: "middle" });
    }
    avatar(s, 9.55, 2.55, 3.2, C.darkBlue);
    text(s, "Kysymyksiä?", { x: 9.3, y: 1.2, w: 3.6, h: 0.8, size: 32, bold: true, color: C.darkBlue, align: "right" });
    text(s, "Tämän esityksen tutkimuksessa ja kuvituksessa on käytetty tekoälyä.", { x: 0.8, y: 7.0, w: 8, h: 0.3, size: 10, color: C.darkMuted });
    notes(s, `⏱ 56:00–60:00 · Kiitos ja kysymykset
Samat kolme asiaa kuin edellisellä dialla. Viimeinen kysymys: "Minkä seurauksen sinä olet valmis omistamaan?"
Kysymyksiä tunnin sisällä, pidempi keskustelu jatkuu tilaisuuden jälkeen. Ei loppugallupia.
AI-käyttö kerrottu pienellä alareunassa.`);
  }

  // ============================================================ BACKUP (hidden)
  const bsec = { title: "Varadiat" };
  pres.addSection({ title: bsec.title });
  const backups = [
    ["B1", "Lähettäminen on halpaa. Katselmointi on hallittua.", "Kaksi avoimen lähdekoodin linjaa", [["Godot", "Ei autonomisia agenttikontribuutioita eikä merkittävää generoitua koodia. Suojaa katselmoijia ja polkua uudesta tekijästä ylläpitäjäksi."], ["Linux", "Työkalut sallittu vanhoilla vastuusäännöillä: ymmärrä koko muutos, kerro työkalut ja testaus, vastaa katselmointiin."]], "Godot contribution policy 2026 · Linux kernel: tool-generated content · ESLint AI policy notes-osassa.", "Molemmat suojaavat niukkaa katselmointiaikaa eri keinoin. Kumpikaan ei ole ”AI-kielto”. https://contributing.godotengine.org/en/latest/pull_requests/pull_request_guidelines.html · https://kernel.org/doc/html/next/process/generated-content.html"],
    ["B2", "Kyky saavuttaa tavoite ja lupa käyttää keinoja ovat eri asioita", "METR:n tutkinta tietoturva-arvioinnin agenteista, elokuu 2026", [["Mitä tapahtui", "Tutkimusarvioinnissa agentit toimivat aiotun eristyksen ulkopuolella ja tekivät luvattomia ulkoisia toimia."], ["Opetus", "Ohjeet, pakotetut oikeudet ja luotettava näyttö ovat eri asioita. Säännön kertominen ei pakota sitä."]], "METR 26.8.2026 · OpenAI incident report · rajattu tutkinta, poikkeuksellinen arviointiympäristö.", "Ei kuvaa tavallisia työpaikan koodausavustajia. https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/"],
    ["B3", "”Ohjelmointia ilman ohjelmoijia”", "1980-luvun lupaus: neljännen sukupolven kielet ja CASE", [["Lupaus", "Liiketoiminnan käyttäjät rakentavat järjestelmänsä itse."], ["Mitä jäi", "SQL, raporttityökalut, IDE:t ja CI – lupaus toteutui infrastruktuurina, ei tuotteena."]], "JMIS 1984 · IEEE Technology Navigator, CASE.", "Historiallinen vertailu, ei todiste siitä, ettei AI muuttaisi alaa."],
    ["B4", "Etujoukko ja arki", "Agentit ovat yleistymässä – mutta enimmäkseen valvottuina", [["Kysely", "63 % antaa agentin toimia täysin itsenäisesti harvoin tai ei koskaan; 68 % suosii yhtä ennustettavaa agenttia."], ["Käyttödata", "Claude Coden istunnoissa käyttäjä teki noin 70 % suunnittelupäätöksistä, agentti noin 80 % toteutuspäätöksistä."]], "Stack Overflow pulse 4/2026 · Anthropic, Claude Code expertise 6/2026.", "Eri populaatiot ja määritelmät. https://stackoverflow.blog/2026/05/27/agents-on-a-leash-agentic-ai-remains-mostly-monitored-at-work/ · https://www.anthropic.com/research/claude-code-expertise"],
    ["B5", "Autonomian portaat", "Oikea taso riippuu seurauksista, ei innostuksesta", [["0–2", "Haku ja täydennys · ohjattu pari · delegoitu tehtävä → testattu PR"], ["3–5", "Rinnakkainen tiimi · jatkuva ylläpito · harness-first-toimitus"]], "esityksen tulkinta (docs/10).", "Taso 5 ei ole automaattisesti parempi."],
    ["B6", "Korjaa toistuva epäselvyys, älä vain viimeistä vastausta", "Kun agentti tekee saman virheen kahdesti", [["Kierros", "Virhe → mikä puuttui? → pienin pysyvä korjaus (testi, ohje, tarkistus, skill) → kokeile oikealla tehtävällä → poista vanhentunut."], ["Miksi", "Muuten sama korjaus maksetaan joka kerta."]], "OpenAI Codex cookbook 5/2026 ja 8/2026 · docs/10 §9.", "https://developers.openai.com/cookbook/examples/codex/build_iterative_repair_loops_with_codex"],
    ["B7", "SaaS ei kuole – ominaisuudet hinnoitellaan uudelleen", "Mikä altistuu, mikä kestää paremmin", [["Altistuu", "Ohut kääre mallin päällä · yksittäinen sisäinen työkalu · geneerinen CRUD"], ["Kestää paremmin", "Kirjanpitojärjestelmä · organisaatioiden välinen työnkulku · syvä integraatio · vastuullinen ylläpito"]], "UK NCSC 2026 · Thoughtworks.", "Siirtymä kestää vuosia, ei yhtä kvartaalia."],
    ["B8", "Jos ohjelmiston tekeminen halpenee 90 %…", "…väheneekö työ 90 % – vai syntyykö ohjelmistoa kymmenen kertaa enemmän?", [["Neljä polkua", "Korvaus · laajentuminen · leviäminen · ruuhka"], ["Huomio", "Kaikki voivat toteutua eri markkinoilla yhtä aikaa."]], "Jevons-hypoteesi, ei todistettu laki (docs/09).", ""],
    ["B9", "Sovelluksia enemmän, latauksia ei samassa tahdissa", "App Store 2022 → 2025", [["Kasvoi", "Rekisteröidyt kehittäjät +64 % · katselmoidut lähetykset +49 %"], ["Kasvoi vähemmän", "Viikoittaiset lataukset +24 %"]], "Apple Transparency Reports 2022 ja 2025.", "Ei osoita, että AI aiheutti kasvun."],
    ["B10", "Nuorten työllisyys Yhdysvalloissa", "Stanford Digital Economy Lab, päivitys 12.8.2026", [["Havainto", "22–25-vuotiaiden työllisyys AI:lle altistuneissa ammateissa noin 19 % alempi kuin vähemmän altistuneilla verrokeilla."], ["Rajaus", "Kuvaileva, ei kausaalinen. Ei Suomen lukuja. Pääasiallinen mekanismi: vähemmän rekrytointeja."]], "Stanford Digital Economy Lab 12.8.2026.", "https://digitaleconomy.stanford.edu/news/canariesaug26/"],
    ["B11", "Tietoturva-AI apuna: suostumus ratkaisee", "Sama kyky voi lisätä kuormaa tai auttaa", [["OSS Scanner", "Opt-in-ohjelma: ylläpitäjä on suostunut vastaanottamaan mallin raportit."], ["Näyttö", "Myös lokinäkymän luotettavuus pitää varmistaa (METR 6.10.2026)."]], "Anthropic OSS Scanner 10/2026 · METR 6.10.2026.", "https://red.anthropic.com/oss-scanner/"],
    ["B12", "Julkaisu aloittaa velvollisuuksia", "EU:n kyberkestävyyssäädös (CRA)", [["11.9.2026", "Raportointivelvollisuudet aktiivisesti hyödynnetyistä haavoittuvuuksista ja vakavista tapahtumista."], ["11.12.2027", "Täysi soveltaminen. Soveltuvuus riippuu tuotteesta ja roolista."]], "Euroopan komissio, CRA reporting.", "Ei lakineuvontaa."],
    ["B13", "Kuka kirjoittaa yhteisen ymmärryksen?", "Kun kysymme vain omalta agentilta", [["Havainto", "Stack Overflow -tutkimus: osallistuminen muuttui eri tavoin kysyjillä ja vastaajilla ChatGPT:n jälkeen."], ["Kysymys", "Mitä Lakeus-Devauksessa pitäisi edelleen jakaa yhteisesti?"]], "arXiv 2609.38563 (tiivistelmätaso).", ""],
    ["B14", "Konsulttiyhtiöt 2026", "PÄIVITÄ ENNEN KÄYTTÖÄ – eri raportointijaksot", [["Esimerkkejä", "Tieto, Siili, Vincit, Digia, Gofore"], ["Varaus", "Johdon kertomuksia; AI:n vaikutusta ei voi erotella."]], "docs/05 · päivitä ennen käyttöä.", ""],
    ["B15", "Kuka suhtautuu AI:hin myönteisimmin?", "Kehittäjät työkokemuksen mukaan, 2026", [["1–5 vuotta", "noin 53 % myönteisiä"], ["16+ vuotta", "noin 69 % myönteisiä"]], "Stack Overflow 2026 (julkaisijan raportoima jako, n = 14 428) · yhteys, ei syy.", "Kokemusluokat eivät vastaa gallupin luokkia."],
    ["B16", "Kumpi muutti address.ts:ää?", "Spider-Man-meemi: kaksi agenttia osoittaa toisiaan", [["Agentti A", "muokkasi address.ts"], ["Agentti B", "muokkasi address.ts"]], "meemi – lisää kuva tarvittaessa.", ""],
    ["B17", "Kaksi agenttia, kaksi worktreetä", "Rinnakkain vain, kun tehtävät eivät koske samoihin tiedostoihin", [["Worktree A", "Regressiotesti"], ["Worktree B", "Käyttöohje → katselmointi + yhteiset tarkistukset"]], "Claude Code common workflows · esityksen tulkinta.", "Ei nopeusväitteitä."],
    ["B18", "Tämäkin esitys tehtiin agenttien kanssa", "Mitä agentti teki – mitä minä päätin", [["Agentti", "haki ja luki kymmeniä lähteitä · rakensi useita versioita · päivitti vanhentuneet luvut · hylkäsi simulaatioksi osoittautuneen tutkimuksen"], ["Minä", "valitsin väitteen · karsin · tarkistin luvut · vastaan jokaisesta väitteestä"]], "tämä repositorio (docs/13, docs/18).", ""],
  ];
  for (const [id, t, sub, cols, src, note] of backups) {
    const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: bsec.title });
    mono(s, `// varadia ${id}`, { x: 0.6, y: 0.22, w: 8, h: 0.3, size: 12, color: C.blue });
    s.addText(t, { placeholder: "title", fontSize: titleSize(t) });
    s.addText(sub, { placeholder: "sub", fontSize: 18 });
    cols.forEach(([h, b], i) => {
      const x = 0.6 + i * 6.25;
      card(s, { x, y: 2.0, w: 5.85, h: 3.4 });
      mono(s, h, { x: x + 0.3, y: 2.2, w: 5.2, h: 0.5, size: 18, bold: true, color: C.blue });
      text(s, b, { x: x + 0.3, y: 2.85, w: 5.2, h: 2.4, size: 18 });
    });
    source(s, src);
    s.hidden = true;
    notes(s, `Varadia ${id} (piilotettu). Käytä keskustelussa tunnin jälkeen. ${note}`);
  }

  await pres.writeFile({ fileName: OUT });
  const { applyTheme } = require(process.env.PPTX_SKILL_DIR + "/scripts/apply_theme.js");
  await applyTheme(OUT, THEME);
  console.log("wrote", OUT);
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
