// Crack the cookie: print the fortune stored beside this program.
// Reads the fortune from entry.txt and cracks it open on stdout.
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const cookie = readFileSync(join(HERE, "entry.txt"), "utf8").trim();
console.log(cookie);
