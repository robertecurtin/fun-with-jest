'use strict';

someGlobalFunctionBeforeTheDescribe();
describe('the thing2', () => {
  it('should do a test2', () => {
    someGlobalFunction();
    console.log("2");
  });
});
