//exports.config = {
 //seleniumAddress: 'http://18.212.163.27:4444/wd/hub',
//specs: ['spec.js'],
  //     capabilities: {
    //     browserName: 'firefox',
      //    'moz:firefoxOptions': {
        //       args: [ "--headless" ]
          //        }
            //       }
              //     };


onPrepare: function() {
  // The require statement must be down here, since jasmine-reporters
  // needs jasmine to be in the global and protractor does not guarantee
  // this until inside the onPrepare function.
  require('jasmine-reporters');
  jasmine.getEnv().addReporter(
    new jasmine.JUnitXmlReporter('xmloutput', true, true));
},



//framework: 'jasmine2',
//onPrepare: function() {
  //  var jasmineReporters = require('jasmine-reporters');
    //jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      //  consolidateAll: true,
        //savePath: 'testresults',
        //filePrefix: 'xmloutput'
    //})),
//}
exports.config = { 
 seleniumAddress: 'http://18.212.163.27:4444/wd/hub',
specs: ['spec.js'],
       capabilities: {
         browserName: 'firefox',
          'moz:firefoxOptions': {
               args: [ "--headless" ]
                  }
                   }
                   };

//framework: 'jasmine2',
//onPrepare: function() {
  //  var jasmineReporters = require('jasmine-reporters');
    //jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      //  consolidateAll: true,
        //savePath: 'testresults',
        //filePrefix: 'xmloutput'
    //}));
//}
