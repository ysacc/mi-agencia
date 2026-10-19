import fs from "node:fs/promises";
import sharp from "sharp";
import { TEMPLATES } from "../src/templates/registry";
const escape = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
await fs.mkdir("public/previews", { recursive: true });
for (const config of TEMPLATES) {
  const photo = await sharp(
      await fs.readFile(`public${config.hero.image.src}-640.webp`),
    )
      .png()
      .toBuffer(),
    uri = `data:image/png;base64,${photo.toString("base64")}`;
  const dark = config.id === "barberia",
    bg = dark
      ? "#141616"
      : config.id === "restaurante"
        ? "#f5f0e6"
        : config.id === "belleza"
          ? "#f9f1f1"
          : config.id === "consultorio"
            ? "#f3f8f6"
            : "#f5f6fa",
    ink = dark ? "#f4eddf" : config.id === "belleza" ? "#633e50" : "#173529",
    accent = config.theme.primary;
  const words = config.hero.title.split(" "),
    middle = Math.ceil(words.length / 2),
    lines = [words.slice(0, middle).join(" "), words.slice(middle).join(" ")];
  const text = (
    x: number,
    y: number,
    s: string,
    size = 32,
    color = ink,
    font = "Arial",
  ) =>
    `<text x="${x}" y="${y}" fill="${color}" font-family="${font}" font-size="${size}" font-weight="${dark ? "800" : "500"}">${escape(s)}</text>`;
  const image = (x: number, y: number, w: number, h: number, clip = "") =>
    `<image x="${x}" y="${y}" width="${w}" height="${h}" href="${uri}" preserveAspectRatio="xMidYMid slice" ${clip ? `clip-path="url(#${clip})"` : ""}/>`;
  const mast =
    text(36, 45, config.business.name, 18) +
    `<path d="M35 65h730" stroke="${ink}" opacity=".2"/>`;
  let body = "";
  if (config.id === "restaurante")
    body = `${text(140, 120, lines[0], 34, ink, "Georgia")}${text(170, 163, lines[1], 34, ink, "Georgia")}${image(250, 200, 300, 275, "arch")}<circle cx="660" cy="320" r="45" fill="none" stroke="${accent}"/>${text(620, 325, "DE LA CASA", 11, accent)}${text(45, 295, "Para disfrutar,", 16, ink, "Georgia")}${text(45, 322, "sin prisa.", 16, ink, "Georgia")}`;
  else if (config.id === "inmobiliaria")
    body = `${image(0, 80, 800, 420)}<rect y="80" width="800" height="420" fill="#07170f" opacity=".6"/>${text(50, 220, lines[0], 40, "#fff")}${text(50, 272, lines[1], 40, "#fff")}<rect x="50" y="325" width="170" height="40" fill="#fff"/>${text(65, 350, "Explorar propiedades", 12, ink)}`;
  else {
    const x = config.id === "consultorio" ? 185 : 50,
      photoX = config.id === "consultorio" ? 550 : 470;
    body = `${config.id === "consultorio" ? `<rect y="66" width="155" height="434" fill="#d9eee7"/>${text(25, 135, "Especialidades", 11)}${text(25, 190, "Nosotros", 11)}${text(25, 245, "El equipo", 11)}${text(25, 300, "Citas", 11)}` : ""}${image(photoX, 100, 260, 335, config.id === "belleza" ? "oval" : config.id === "consultorio" ? "clinicarch" : "rightarch")}${text(x, 180, lines[0], config.id === "profesionales" ? 26 : 32, ink, config.id === "belleza" ? "Georgia" : "Arial")}${text(x, 225, lines[1], config.id === "profesionales" ? 26 : 32, ink, config.id === "belleza" ? "Georgia" : "Arial")}<path d="M${x} 265h210m-210 15h175" stroke="${ink}" opacity=".4" stroke-width="4"/><rect x="${x}" y="320" width="160" height="40" rx="${config.id === "belleza" ? 20 : 2}" fill="${accent}"/>${text(x + 14, 345, "Conoce la propuesta", 11, dark ? "#141616" : "#fff")}${config.id === "profesionales" ? '<rect y="455" width="800" height="45" fill="#2849c5"/>' : ""}`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><title>Vista ilustrativa de ${escape(config.name)}</title><defs><clipPath id="arch"><path d="M250 475V350a150 150 0 01300 0v125z"/></clipPath><clipPath id="rightarch"><path d="M470 435V230a130 130 0 01260 0v205z"/></clipPath><clipPath id="clinicarch"><path d="M550 435V230a130 130 0 01260 0v205z"/></clipPath><clipPath id="oval"><ellipse cx="600" cy="270" rx="130" ry="170"/></clipPath></defs><rect width="800" height="500" fill="${bg}"/>${mast}${body}</svg>`;
  await sharp(Buffer.from(svg))
    .webp({ quality: 88 })
    .toFile(`public/previews/${config.id}.webp`);
  console.log(`Vista previa: ${config.id}`);
}
await fs.mkdir("docs", { recursive: true });
const tiles = await Promise.all(
  TEMPLATES.map(async (t, i) => ({
    input: await sharp(`public${t.preview}`).resize(600, 375).toBuffer(),
    left: (i % 2) * 600,
    top: Math.floor(i / 2) * 375,
  })),
);
await sharp({
  create: { width: 1200, height: 1125, channels: 3, background: "#fff" },
})
  .composite(tiles)
  .webp({ quality: 88 })
  .toFile("docs/vista-previa-coleccion.webp");
