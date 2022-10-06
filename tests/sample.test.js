'use strict';

console.log(`about to describe and I can see ${someGlobalFunctionBeforeTheDescribe}`);
someGlobalFunctionBeforeTheDescribe();
describe('the thing', () => {
  console.log('about to it');
  it('should do a test', () => {
    console.log('run this');
    someGlobalFunction();
  });

  it('should another test', () => {
  });
});
