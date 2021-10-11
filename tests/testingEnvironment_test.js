const { suite, test, assert } = require('@pmoo/testy');

suite('Trying our new awesome environment 🚀', () => {
  test('Can add two numbers, 2 + 2 = 4? 🤷', () => {
    assert.that(2+2).isEqualTo(4);
  });

  test('Asserting that the result of both operations is the same, 4 💡', () => {
    assert.that(2+2 == 10-6).isTrue();
  });

  test('this is a wip test');
});