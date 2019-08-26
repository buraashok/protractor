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
