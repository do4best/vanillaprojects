const sumit =  require("./sum.js");

test('adds 1 + 2 to equal 3', () => {
  expect(sumit(1, 2)).toBe(3);
});