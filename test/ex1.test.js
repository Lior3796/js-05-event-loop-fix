const { test } = require("node:test");
const assert = require("node:assert/strict");
const { runExercise, checkRules, checkExplanation } = require("./helpers");

const FILE = "ex1.js";

test("Exercise 1: prints Start, Middle, End in this order", async () => {
  const result = await runExercise(FILE);
  assert.deepEqual(result.logs, ["Start", "Middle", "End"], `run() should print Start, Middle, End - each one exactly once (got ${JSON.stringify(result.logs)})`);
  checkRules(FILE, result);
});

test("Exercise 1: explanation comment at the top of the file", () => {
  checkExplanation(FILE);
});
