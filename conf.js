exports.config = {
framework: 'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['spec.js'],
       capabilities: {
         browserName: 'firefox',
          'moz:firefoxOptions': {
               args: [ "--headless" ]
                  }
       }
              
onPrepare: function(){
       var AllureReporter = require('workspace/allure results');
      jasmine.getEnv().addReporter(new AllureReporter({
  resultDir: 'target/allure-results'}))
}
   


