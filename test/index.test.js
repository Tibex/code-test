const { run } = require('../src/index');

test('that it runs', () => {
  const result = run();
  expect(result).toBe('I run');
});
