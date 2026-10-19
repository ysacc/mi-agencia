import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

async function prepare(folder = "src") {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const source = path.join(folder, entry.name);
    if (entry.isDirectory()) {
      await prepare(source);
      continue;
    }
    if (!/\.tsx?$/.test(entry.name)) continue;
    const outputPath = source
      .replace(/^src/, ".test-dist")
      .replace(/\.tsx?$/, ".js");
    const { outputText } = ts.transpileModule(await readFile(source, "utf8"), {
      compilerOptions: {
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.ESNext,
        jsx: ts.JsxEmit.ReactJSX,
      },
      fileName: source,
    });
    const output = outputText
      .replace(/^import ['"][^'"]+\.css['"];?$/gm, "")
      .replace(
        /(from\s+['"])(\.[^'"]+)(['"])/g,
        (_, prefix, file, suffix) =>
          `${prefix}${file.replace(/\.tsx?$/, "").replace(/\.js$/, "")}.js${suffix}`,
      );
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, output);
  }
}
await prepare();
