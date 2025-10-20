import { Given, When, Then, BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep  } from "@badeball/cypress-cucumber-preprocessor";

// https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/cucumber-basics.md#hooks

// like cypress' before() and after()
BeforeAll(() => {
    // runs once before all tests in the file
    // Before All -> Scenario 1 -> Scenario 2 -> ...
    cy.log("Before all hook executed");
});
AfterAll(() => {
    cy.log("After all hook executed");
});

Before(function ({pickle, gherkinDocument, testCaseStartedId}) {
    cy.log("Before hook executed");
    cy.log(`Scenario name: ${pickle.name}`);
    // access gherkinDocument and testCaseStartedId if needed
    if(pickle.name.substring(0, 3) === "WIP") {
        this.skip(); // could also return "skipped"
    }
});
Before({ tags: "@filterTag" }, function () { // tags: "@foo and @bar", "@foo or @bar", "not @foo"
    cy.log("Before hook for @filterTag executed");
});
After(() => {
    cy.log("After hook executed");
    // not called if scenario fails
});
// default order is: 10000
// before hooks order ASC, for after hooks DESC
BeforeStep({ order: 20}, function () {
    cy.log("Before step hook executed");
});
BeforeStep({ order: 10}, function() {
    cy.log("Before step hook executed");
});
AfterStep(() => {
    cy.log("Before step hook executed");
    // not called if step fails
});


Given('I have a precondition', () => {
    cy.log("Given step executed");
});

When('I perform an action', () => {
    cy.log("When step executed");
});

Then('I expect a result', () => {
    cy.log("Then executed");
});
