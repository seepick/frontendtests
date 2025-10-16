
Howto Setup
===========================

* isntall node/NPM
    * $ brew install node
    * verify:
        * $ node -v
        * $ npm -v
* install angular
    * $ npm install -g @angular/cli
    * verify:
        * $ ng version
* initialize project
    * $ ng new <NAME_OF_YOUR_APP>
    * > choose "Sass (Intended)"
    * > no, no, no ...
    * > use GitHub copilot
* run project
    * ng serve
* install cypress
    * "install" or short "i", "--save-dev" or short "-D"
    * install cypress itself:
        * $ npm install cypress --save-dev
    * add DSL precompiler:
        * $ npm i -D @badeball/cypress-cucumber-preprocessor
        * $ npm i -D @bahmutov/cypress-esbuild-preprocessor
* initialize cypress
    * $ npx cypress open
    * click on e2e
    * it will create files and folders for you
* setup cypress
    * see setup_files/ for the original files
    * use cypress.config.ts file to override the content from generated one
    * copy tsconfig.json and paste it in cypress/ folder
* create first tests:
    * create cypress/e2e folder
    * create files:
        * cypress/e2e/test.feature
        * cypress/e2e/test.steps.ts
        * cypress/support/step_definitions/foobar.ts
* run tests
    * run the angular app in the background (separate terminal)
        * $ ng serve
    * run headless tests
        * $ npx cypress run
    * run the UI
        * $ npx cypress open


TODO
===========================
* [ ] write simple angular application
* [ ] write test bodies to actually test the webapp

Resources
===========================
* official cypress documentation: https://docs.cypress.io/
