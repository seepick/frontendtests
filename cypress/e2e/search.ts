import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { assertResultTextContains, goToHome, onHomeSearchFor } from "../support/cypress_tools";

When("searching for {string}", function (term: string) {
    onHomeSearchFor(term);
});

Then("result text contains {string}", function (result: string) {
    assertResultTextContains(result);
});
