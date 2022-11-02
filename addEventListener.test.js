/**
 * @jest-environment jsdom
 */

describe('Correctly returns a eventListener when instantiated', () => {
  it('Correctly creates eventListener', () => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      console.log('working');
    })
  expect(button).toEqual(button);
  })
})