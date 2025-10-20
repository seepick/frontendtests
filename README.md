
Howto Setup
===============================================================================
* install VS code: https://code.visualstudio.com
    * install angular plugin: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
* install node/NPM: `brew install node`
    * verify installation with `node -v` and `npm -v`
* install angular `npm install -g @angular/cli` and verify `ng version`
* initialize project
    * `ng new <NAME_OF_YOUR_APP>`
    * > choose "Sass (Intended)"
    * > no, no, no ...
    * > use GitHub copilot
* install cypress
    * "install" or short "i", "--save-dev" or short "-D"
    * install cypress: `npm install cypress --save-dev`
    * add cucumber: `npm i -D @badeball/cypress-cucumber-preprocessor`
    * ad bundler: `npm i -D @bahmutov/cypress-esbuild-preprocessor`
* initialize cypress
    * start cypress UI: `npx cypress open`
    * select E2E
    * this will create files and folders for you
* configure cypress
    * copy `./setup_files/cypress.config.ts` to `./cypress.config.ts`
    * copy `./setup_files/tsconfig.json` to `./cypress/tsconfig.json`
* create first tests:
    * create files:
        * `./cypress/e2e/test.feature`
        * `./cypress/e2e/test.ts` (don't add `steps.ts` as it won't be picked up by default)
        * `./cypress/support/step_definitions/global.ts`
* run tests
    * run the angular app: `ng serve`
    * run interactive UI: `npx cypress open`
    * OR run headless tests: `npx cypress run`

Angular help
===============================================================================
* `ng generate --help`
* `ng build` -> build artifacts in the `dist/` directory
* generate a new component + scaffolding: `ng generate component component-name`
* run tests with [Karma](https://karma-runner.github.io): `ng test`
* running e2e tests: `ng e2e`
* [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

Resources
===============================================================================
* official cypress documentation: https://docs.cypress.io/
* learn angular with tutorial: https://v17.angular.io/tutorial/first-app
* cypress cucumber preprocessor: https://github.com/badeball/cypress-cucumber-preprocessor
    * examples: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples
* nice examples to learn from: https://www.thegreenreport.blog/articles/advanced-parameter-types-and-smart-data-table-handling-in-cucumber/advanced-parameter-types-and-smart-data-table-handling-in-cucumber.html