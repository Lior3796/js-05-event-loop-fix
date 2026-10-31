const { test } = require("node:test");
const assert = require("node:assert/strict");
const { runExercise, checkRules, checkExplanation, sourceOf } = require("./helpers");

const FILE = "ex3.js";

test("Exercise 3: prints 0, 1, 2 in this order", async () => {
  const result = await runExercise(FILE);
  assert.deepEqual(result.logs, ["0", "1", "2"], `run() should print 0, then 1, then 2 - each number in its own console.log (got ${JSON.stringify(result.logs)})`);
  assert.equal(result.timers.length, 3, "keep the setTimeout inside the loop - it should run 3 times");
  assert.ok(result.timers.every((timer) => timer.delay === 0), "the setTimeout must keep the delay 0");
  const prints = sourceOf(FILE).match(/console\.log\s*\(/g) ?? [];
  assert.equal(prints.length, 1, "keep a single console.log inside the loop - don't write three prints by hand");
  checkRules(FILE, result);
});

test("Exercise 3: explanation comment at the top of the file", () => {
  checkExplanation(FILE);
});
