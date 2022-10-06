const NodeEnvironment = require('jest-environment-node').TestEnvironment;

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
    this.testPath = context.testPath;
    this.docblockPragmas = context.docblockPragmas;
  }

  async setup() {
    console.log('getting ready for some tests');
    await super.setup();
    console.log('super is happy');
    this.global.someGlobalFunction = () => { console.log("itsa me a global"); }
    this.global.someGlobalFunctionBeforeTheDescribe = () => { console.log("itsa me a global before describe"); }
    console.log('made a global function');
  }

  async teardown() {
    await super.teardown();
  }

  getVmContext() {
    return super.getVmContext();
  }

  // async handleTestEvent(event, state) {
  //   if (event.name === 'test_start') {
  //     // ...
  //   }
  // }
}

module.exports = CustomEnvironment;
