import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given("I will log this: {string}", (message: string) => {
  cy.log(`Logging param is: [${message}]`);
  console.log("will print to the devtools console as well:", message);
});
