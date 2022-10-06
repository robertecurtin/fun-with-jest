'use strict';
// const helperFileThatNeedsInitializing = import('helperFileThatNeedsInitializing');

console.log('about to describe');
someGlobalFunction();
describe('the thing', () => {
console.log('about to it');
  it('should do a test', () => {
    console.log('run this');
    someGlobalFunction();
    // helperFileThatNeedsInitializing();
  });

  it('should fail a test', () => {
    // asdfdas();
  });
});
