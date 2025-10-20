import { Given, When, Then, DataTable, defineParameterType } from "@badeball/cypress-cucumber-preprocessor";
import { Person } from "../../src/app/person";

// https://www.thegreenreport.blog/articles/advanced-parameter-types-and-smart-data-table-handling-in-cucumber/advanced-parameter-types-and-smart-data-table-handling-in-cucumber.html

Given("following rows", (table: DataTable) => {
  const expected = [
    ["row1", "row1b"],
    ["row2", "row2b"]
  ];
  // table.hashes() ... only table data (no header); regular horizontal table
  // table.rowsHash() ... for vertical tables (like key-value pairs); first column=key, second=values
  assert.deepEqual(table.raw(), expected);
});

Given('following vertical table', (table: DataTable) => {
  const personData = transformVerticalTable(table);
  cy.log("personData:", personData);
})

function transformVerticalTable(table) {
  const obj = {};
  for (const [key, value] of Object.entries(table.rowsHash())) {
    obj[key] = value;
  }
  return obj;
}

Given("following persons exits", (table: DataTable) => {
  const persons: Person[] = transformPersonsTable(table);
  cy.log("persons:", persons);
});

function transformPersonsTable(table: DataTable): Person[] {
  const persons: Person[] = table.hashes().map((row) => {
    const person: Person = {
      name: row.name,
      age: Number(row.age)
    };
    return person;
  } );
  return persons;
}


// products.push(...productList);