
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
    * get the cypress.config.ts file from a colleague, override the content from generated one
    * get the tsconfig.json file from a colleague, paste it in cypress/ folder
    * see setup_files/ for the original files
* create first tests:
    * create cypress/e2e folder
    * create files: cypress/e2e/test.feature and cypress/e2e/test.steps.ts

* run tests
    * run the angular app in the background (separate terminal)
        $ ng serve
    * run headless tests
        * $ npx cypress run
    * run the UI
        * $ npx cypress open



Resources
===========================
* official cypress documentation: https://docs.cypress.io/
