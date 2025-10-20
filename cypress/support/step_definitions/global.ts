import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { assertResultTextContains, goToHome, onHomeSearchFor } from "../cypress_tools";

Given("I am on the home page", function () {
    goToHome();
    // nesting: Step(this, 'I fill in "john.doe" for "Username"');

});
