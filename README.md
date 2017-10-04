# `protractor-assignment` — the seed for AngularJS apps

This project is a demo application to use protractor for automated test angular App.

The seed app doesn't do much, just shows demonstration of protractor to evaluate Crunchinator site.


## Getting Started

npm install
npm run protractor


## Directory Layout

```
app/                    --> all of the source files for the application from angular seed - please ignore
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  fragments             --> get properties , .... component , directive that used on the UI used for protractor only
  libs                  --> the common utils, used for protractor only
  pages                 --> get properties , ... from pages , used for protractor only
  specs                 --> all scenario here , used for protractor only
```


**Note:**
Under the hood, Protractor uses the [Selenium Standalone Server][selenium], which in turn requires
the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running
`java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].


## Contact

For more information on AngularJS please check out [angularjs.org][angularjs].


[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
