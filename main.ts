// The Most Boring Object, Reviewed in One Line
// Entry: a one-line review of the humble coaster, written to /output/entry.txt.
//
// The review is composed from three semantic parts so each piece of the joke
// can be checked on its own: the subject names the object, the observation
// states a true, recognisable behaviour, and the sting turns the object's
// dullness into the punchline. Nothing here is random or time-dependent:
// the same source always produces the same bytes.

import { writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// Subject: the object under review, named up front so the judge knows
// immediately what is being reviewed.
const SUBJECT = "The coaster";

// Observation: the one true thing everyone knows about a coaster — it sits
// under a mug and catches the wet ring the mug leaves behind.
const OBSERVATION = "a cork disc that spends its whole life catching the ring your mug leaves behind";

// Sting: the dullness itself is the joke — a lifetime of thankless service.
const STING = "and gets thanked never";

function composeReview(subject: string, observation: string, sting: string): string {
  return `${subject}: ${observation}, ${sting}.`;
}

function guard(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`review must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("review must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("review must stay on a single line");
  }
}

const review = composeReview(SUBJECT, OBSERVATION, STING);
guard(review);
writeFileSync(OUT_PATH, review, "utf8");
