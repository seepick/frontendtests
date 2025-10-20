
Cucumber DSL & StepDefs
===============================================================================
* see: https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/cucumber-basics.md

Features
-------------------------------------------------------------------------------
* [x] use regexp for stepdef parsing =>`regexp.ts`
* [x] step states => `step_states.ts`
* [ ] tags (and filter in steps, run based on them, etc.)
* [x] data tables => `table.ts` (header, content transformation)
* [x] nested steps => `nested_steps.ts`
* [ ] hooks => `hooks.ts`
* [x] custom parameter types => `custom_types.ts`
* [ ] state management: https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/state-management.md
    * Given user xyz exists ... `users.push(user); this.lastCreatedUser = user;`
* [x] dutch keywords through localization => `nederlands.feature`
* [ ] reporting: https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/messages-report.md

Gherkin
-------------------------------------------------------------------------------
* see: https://cucumber.io/docs/gherkin/
* keywords
  * [ ] Feature
  * [ ] Rule
  * [ ] Example (or Scenario)
  * [ ] Examples/Scenarios
  * [ ] And, But (or *)
  * [ ] Background
  * [ ] Scenario Outline / Scenario Template
* secondary keywords
  * [ ] """ (Doc Strings)
  * [ ] | (Data Tables),
  * [ ] @ (Tags)
  * [ ] # (Comments)


Cypress Tests
===============================================================================

```
cy.get("input[type=text]")
    .should("have.attr", "placeholder")
    .and("match", /Search without being tracked|Search privately/);
```

Coding
-------------------------------------------------------------------------------
* [ ] go through: https://glebbahmutov.com/cypress-examples/
* [ ] navigation
* [ ] querying (selectors)
* [ ] traversal
* [ ] assertions
* [ ] networking + saved state
* [ ] use file fixtures to mock requeset
* [ ] spy, stub, mock
* [ ] request/response (headers, payload, http method, cookies)

Tooling Devs
-------------------------------------------------------------------------------
* [ ] how does debugging work? (run test in IDE, as well in Cypress UI)

Execution/Integration
-------------------------------------------------------------------------------
* [ ] define base URL while invoking tests (together with tags, e.g. read-only, can target A vs P)
* [ ] get cypress CLI working with a single script (start server, run tests, stop server)
* [ ] explore features of cypress UI
* [ ] run tests with specific tags
* [ ] parallelization for speed
* [ ] use 14 days Cypress Cloud (along with trials from other similar providers) to fully explore feature set (get a feeling for it)

Reporting/Result
-------------------------------------------------------------------------------
* [ ] make screenshot on test failure
* [ ] show feature file code on test failure
* [ ] enable/play around with pretty reporter extension/plugin

Cypress UI
-------------------------------------------------------------------------------
* [ ] it says "Cucumber tests are not yet supported"?! => https://docs.cypress.io/app/guides/cypress-studio#Limitations
* [ ] how to connect local IDE (VSCode?)
* [ ] write PoC for component tests (Cypress UI doesn't suppor them, yet)
* [x] how to see console output?
    * open the browser's (electron, firefox,..) dev tools (cmd+opt+I) > Console


Dev Tooling
===============================================================================

Requirements
-------------------------------------------------------------------------------
* in feature DSL auto-complete custom DSL; preferably G-W-T separate (not together!)
    * ❌ defining step (Then) and in feature file using it as `When` IS unfortunately possible 😕
* ctrl+click onto feature DSL, navigation into stepdef
    *  ✅ VSCode, ❔ WebStorm
* if DSL not yet existing, provide auto-solution to auto-create
    *  ✅⚠️ VSCode (doesn't work properly...), ❔ WebStorm

Plugins
-------------------------------------------------------------------------------
* which VS Code extension/plugin to use?
    * Cucumber (official)
        * add to cucumber.features setting: "cypress/e2e/**/*.feature"
        * add to cucumber.glue setting: "cypress/support/step_definitions/**/*.ts" and "cypress/e2e/**/*.ts"
    * Cucumber (Gherkin) FUll Support
        * has 1M download, 4.5 star (official has only 0.3M downloads)
* intellij?
* PS: C# + specflow is very mature (should be used as a reference)
