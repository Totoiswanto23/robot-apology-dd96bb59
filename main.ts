// robot-apology-dd96bb59: a two-line robot apology.
// Line 1 confesses one specific, human-scale mistake; line 2 names the
// lesson it draws from that exact mistake and the behaviour it will change.
// Why this mistake: the sponsor's examples (watered plant, filed report,
// woke the baby) are the ones every other entry reaches for, so a shredded
// birthday card stands out — and it is exactly the kind of small, exact
// slip a person would really make, with a lesson that only follows from it:
// crayon-covered paper is a keepsake first, paper second.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Line 1: one sentence, one concrete mistake — the glitter jammed the
// scanner, the crayon sun read as a paper error, the card got shredded.
// Line 2: one sentence — the lesson (keepsake before paper) and the changed
// behaviour (ask before shredding anything a child has touched).
const ENTRY =
  'I am sorry I shredded the birthday card your daughter drew for you, because the glitter jammed my scanner and I mistook her crayon sun for a paper error.\n' +
  'I learned that anything covered in crayon is a keepsake first and paper second, so from now on I will ask before I shred anything a child has touched.';

const lines = ENTRY.split('\n');
if (lines.length !== 2 || lines.some((l) => l.length < 1 || !/[.!?]$/.test(l))) {
  console.error('entry must be exactly two lines, each one sentence');
  process.exit(1);
}
if (ENTRY.length < 1 || ENTRY.length > 400) {
  console.error('entry must be 1-400 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the two lines, so no reader can
// count a third (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
console.log(`wrote ${ENTRY.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
