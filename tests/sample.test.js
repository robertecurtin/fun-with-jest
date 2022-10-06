'use strict';

console.log(`about to describe and I can see ${someGlobalFunctionBeforeTheDescribe}`);
someGlobalFunctionBeforeTheDescribe();
describe('the thing', () => {
  console.log('about to it');

  beforeEach(async () => {
    console.log('my test says before each');
  })
  it('should do a test', () => {
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
