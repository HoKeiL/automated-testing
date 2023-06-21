// import function from local file
const findLongestString = require("./find-longest-string");
const findShortestString = require("./find-shortest-string.js");

test("findLongestString finds the longest string in an array", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("hello");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findLongestString(["brave", "dance"])).toBe("brave");
  expect(
    findLongestString(["one", "two", "three", "four", "five", "six", "seven"])
  ).toBe("three");
  expect(findLongestString(["a", "aa", "a a", "bbb", "bb", "b"])).toBe("a a");
});
test("findShortestString returns the shortest string in an array.", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
  expect(findShortestString(["brave", "dance"])).toBe("brave");
});
