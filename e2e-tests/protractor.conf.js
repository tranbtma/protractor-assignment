//jshint strict: false
exports.config = {

  allScriptsTimeout: 3000000,

  specs: [
    './specs/*Spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://crunchinator.com',

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 3000000
  }

};
