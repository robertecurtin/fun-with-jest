'use strict';

console.log(`about to describe and I can see ${someGlobalFunctionBeforeTheDescribe}`);
someGlobalFunctionBeforeTheDescribe();
describe('the thing', () => {
  console.log('about to it');

  beforeEach(async () => {
    console.log('my test says before each');
  })

  itShould('do a test', true, () => {
    console.log('run this');
    someGlobalFunction();
  });

  itShould('not do a test', false, () => {
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
