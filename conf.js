exports.config = {
framework: 'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',
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
   


