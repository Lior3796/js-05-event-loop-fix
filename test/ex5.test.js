const { test } = require("node:test");
const assert = require("node:assert/strict");
const { runExercise, checkRules, checkExplanation, sourceOf } = require("./helpers");

const FILE = "ex5.js";

test("Exercise 5: the list shows Loading..., Almost there..., Ready! and the message ends as Ready!", async () => {
  const result = await runExercise(FILE);
  assert.deepEqual(result.listItems, ["Loading...", "Almost there...", "Ready!"], `#log should have exactly 3 lines: Loading..., Almost there..., Ready! (got ${JSON.stringify(result.listItems)})`);
  assert.equal(result.message, "Ready!", `after all the callbacks ran, #message should be "Ready!" (got "${result.message}")`);
  const code = sourceOf(FILE);
  assert.doesNotMatch(code, /\bdocument\b|\.textContent|\.innerHTML|\.innerText/, "use only addLine and setMessage from helpers.js - don't write to the DOM directly");
  assert.equal(result.timers.length, 2, "keep the two setTimeout lines");
  assert.ok(code.indexOf('setMessage("Ready!")') < code.indexOf('setMessage("Almost there...")'), "keep the two setTimeout lines in the same order - change only the delays");
  checkRules(FILE, result);
});

test("Exercise 5: explanation comment at the top of the file", () => {
  checkExplanation(FILE);
});
