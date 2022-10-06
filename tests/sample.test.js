'use strict';

console.log(`about to describe and I can see ${someGlobalFunctionBeforeTheDescribe}`);
someGlobalFunctionBeforeTheDescribe();
describe('the thing', () => {
  console.log('about to it');

  beforeEach(async () => {
    console.log('my test says before each');
  })

  newTest('should do a test', true, () => {
    console.log('run this');
    someGlobalFunction();
  });

  newTest('should not do a test', false, () => {
    console.log('run this');
    someGlobalFunction();
  });

  it('should another test', () => {
  });

  describe('another describe', () => {
    it('should wrap describes', () => {
      console.log("wrapped");
    })
  })
});
