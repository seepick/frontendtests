import { When, Step, DataTable } from "@badeball/cypress-cucumber-preprocessor";

// https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/cucumber-basics.md#nested-steps

When("I fill in {string} for {string}", function (value: string, field: string) {
    cy.log(`Filling in ${value} for ${field}`);
});

When("I fill in the form values", function (table: DataTable) {
    table.hashes().forEach((row) => {
        const field = row["Field"];
        const value = row["Value"];
        Step(this, `I fill in "${value}" for "${field}"`);
    });
});


When("I fill in the login form using single fill steps", function () {
  Step(this, 'I fill in "foo" for "username"');
  Step(this, 'I fill in "baz" for "password"');
});


When("I fill in the login form using table", function () {
  Step(this, "I fill in the form values",
    new DataTable([
      ["Field", "Value"],
      ["username", "foobar"],
      ["password", "secret"]
    ])
  );
});