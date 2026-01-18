import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---- CONFIG (single source of truth) ----
const SOURCE_DIR = path.resolve(
  __dirname,
  "../src/content/docs/_assets/diagrams"
);

const TARGET_DIR = path.resolve(
  __dirname,
  "../public/images/diagrams"
);

// ----------------------------------------

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;

  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(
        path.join(src, item),
        path.join(dest, item)
      );
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log("🔁 Syncing diagrams...");
console.log("Source:", SOURCE_DIR);
console.log("Target:", TARGET_DIR);

copyRecursive(SOURCE_DIR, TARGET_DIR);

console.log("✅ Diagram sync complete.");
