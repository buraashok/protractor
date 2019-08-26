exports.config = {
 seleniumAddress: 'http://18.212.163.27:4444/wd/hub',
specs: ['spec.js'],
       capabilities: {
         browserName: 'firefox',
          'moz:firefoxOptions': {
               args: [ "--headless" ]
                  }
                   }
                   },

framework: 'jasmine',
onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
}
