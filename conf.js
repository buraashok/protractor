//exports.config = {
//seleniumAddress: 'http://18.212.163.27:4444/wd/hub',
//specs: ['spec.js'],
  //   capabilities: {
    // browserName: 'firefox',
    //'moz:firefoxOptions': {
      // args: [ "--headless" ]
        //}
       //}
     //};



// var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
  

exports.config = {
seleniumAddress: 'http://18.212.163.27:4444/wd/hub',
specs: ['spec.js'],
     capabilities: {
     browserName: 'firefox',
    'moz:firefoxOptions': {
       args: [ "--headless" ]
        }
       },

  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   }
};


