// One Word for Your Wi-Fi — make.fun bounty entry.
// The entry is a single word, written to /output/entry.txt.
//
// The word: "ghosting".
// Home Wi-Fi's signature move is vanishing mid-sentence — one bar in the
// good chair, frozen face on the call, gone the moment it matters. It
// doesn't break; it ghosts you, then drifts back like nothing happened.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "ghosting";
const OUT_PATH = "/output/entry.txt";

// Gate: exactly one word, 1-20 characters, no whitespace.
if (!/^[^\s]{1,20}$/.test(WORD)) {
  throw new Error("entry must be exactly one word of 1-20 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, WORD, "utf8");
console.log(`wrote ${WORD.length}-letter word to ${OUT_PATH}`);
