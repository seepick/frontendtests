import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { assertResultTextContains, goToHome, onHomeSearchFor } from "../support/cypress_tools";

Given("ik ben op de thuis pagina", function () {
    goToHome();
});

When("ik naar {string} zoek", function (term: string) {
    onHomeSearchFor(term);
});

Then("beinhoud de resultaat tekst {string}", function (result: string) {
    assertResultTextContains(result);
});
