import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

// "(-?\d+)" same as "{int}""
Given(/^I have a number (-?\d+) in my pocket$/, (param: number) => {
  assert.equal(param, 12);
});
