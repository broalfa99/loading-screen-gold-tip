// Loading Screen Gold: A Tip in 200 Characters — one funny loading-screen tip
// for stressed developers and AI coding agents (95 chars, limit 200).
// Writes the entry to /output/entry.txt for the make.fun program/v1 harness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Tip: your agent finished in 12 seconds. You have spent 40 minutes deciding whether to trust it.";

// The gate only accepts 1–200 characters: fail loudly rather than
// silently writing an entry the judge will never see.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1–200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${out}`);
