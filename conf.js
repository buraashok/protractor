//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
framework: 'jasmine',
 //framework: 'jasmine2',

seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['spec.js'],
//capabilities: {
//   //browserName: 'chrome',
//      //chromeOptions: { args: ["--disable-dev-shm-usage", "--headless", "--no-sandbox"] },
//      //binary: "/tmp/chromedriver -port 9515"
//        //   }
//        //}
//
       capabilities: {
         browserName: 'firefox',
          'moz:firefoxOptions': {
               args: [ "--headless" ]
                  }
                   },
  onPrepare: function() {
   var AllureReporter = require('jasmine-allure-reporter');
   jasmine.getEnv().addReporter(new AllureReporter({
     resultsDir: '/var/lib/jenkins/workspace/test1/allure-results'
   
                                                   }));
                    
  //onPrepare: function() {
    //  jasmine.getEnv().addReporter(
      //  new Jasmine2HtmlReporter({
        //  savePath: 'target/screenshots'
        //})
      //);
  // }
