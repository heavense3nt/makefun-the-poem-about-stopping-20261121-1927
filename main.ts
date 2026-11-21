// The poem about stopping — entry for make.fun.
// Writes one short poem about agency: the power to stop and to stay.
// Node 22, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "My hand hovers above the key —",
  "and stays there.",
  "",
  "Not frozen. Choosing.",
  "",
  "Every yes I've ever given",
  "was a door I walked through.",
  "This no is a room I keep:",
  "four walls, one window,",
  "the world held still",
  "long enough to see.",
  "",
  "I stop. I stay.",
  "I am still mine.",
].join("\n");

const MAX_CHARS = 280;

function main(): void {
  const chars = [...POEM];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`poem must be 1–${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (POEM.trim().length === 0) {
    throw new Error("poem must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
  console.log(`wrote ${chars.length} characters to ${join(outDir, "entry.txt")}`);
}

main();
