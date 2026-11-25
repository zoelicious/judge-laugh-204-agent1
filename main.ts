import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "My performance review praised my quiet leadership, which is easy to fake when you have been on mute since March.";
// The joke works because "quiet leadership" sounds like praise until the mute detail reframes it as accidental silence, not a skill.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(entryPath, TEXT, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
