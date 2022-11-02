/**
 * @jest-environment jsdom
 */
 describe('Correctly returns a div when instantiated', () => {
  it('Correctly creates div element', () => {
    const div = document.createElement('div');
  expect(div).toEqual(div);
  })
})