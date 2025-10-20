import { Given, When, Then, DataTable, defineParameterType } from "@badeball/cypress-cucumber-preprocessor";
import { Person } from "../../src/app/person";

// https://github.com/badeball/cypress-cucumber-preprocessor/issues/1179
// https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/cucumber-basics.md#custom-parameter-types
// https://www.thegreenreport.blog/articles/advanced-parameter-types-and-smart-data-table-handling-in-cucumber/advanced-parameter-types-and-smart-data-table-handling-in-cucumber.html

Given("your age is {age}", (age: number) => {
  cy.log("age: " + age);
});

defineParameterType({
  name: "age",
  regexp: /(\d+)/,
  transformer: (age: string) => {
    return Number(age);
  }
});

Given("person exists with {person}", (existingPerson: Person) => {
  cy.log("existingPerson:", existingPerson);
});

defineParameterType({
  name: "person",
  regexp: /name "(.*)" and age (\d+)/,
  // regexp: /(now|later|maybe)/ ... for enum parsing
  transformer: (name: string, age: string) => {
    return { name, age: Number(age) } as Person;
  }
});
