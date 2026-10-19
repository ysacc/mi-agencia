import sharp from "sharp";
import fs from "node:fs/promises";
const sources = {
  "barber-shop": "1585747860715-2ba37e788b70",
  "barber-detail": "1503951914875-452162b0f3f1",
  "restaurant-food": "1555939594-58d7cb561ad1",
  "restaurant-pasta": "1473093295043-cdd812d0e601",
  "restaurant-room": "1517248135467-4c7edcad34c4",
  "clinic-care": "1576091160399-112ba8d25d1d",
  "clinic-space": "1629909613654-28e377c37b09",
  "estate-home": "1600585154340-be6161a56a0c",
  "estate-interior": "1600607687920-4e2a09cf159d",
  "estate-living": "1600566753086-00f18fb6b3ea",
  "beauty-care": "1560750588-73207b1ef5b8",
  "beauty-spa": "1540555700478-4be289fbecef",
  "professional-office": "1497366216548-37526070297c",
  "professional-team": "1522071820081-009f0129c71c",
};
await fs.mkdir("public/photos", { recursive: true });
const manifest = [];
for (const [name, id] of Object.entries(sources)) {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=85`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${name}: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  for (const width of [640, 1280])
    await sharp(buffer)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(`public/photos/${name}-${width}.webp`);
  manifest.push({ name, source: url, license: "https://unsplash.com/license" });
  console.log(name);
}
await fs.writeFile(
  "public/photos/sources.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
