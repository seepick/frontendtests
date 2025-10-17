import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the home page", function () {
    cy.visit("/");
    // nesting: Step(this, 'I fill in "john.doe" for "Username"');
    return "working";
// return "pending"; // will mark the step as pending
// return "skipped";
});
When("searching for {string}", function (term: string) {
    cy.get("#search-term").type(term);
    // cy.get("button[type=submit]").click();
    cy.get("#search-button").click();
    return "working";
});
Then("result text contains {string}", function (result: string) {
    cy.get("#result-text").should("contain.value", result);
    return "working";
});
