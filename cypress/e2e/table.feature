Feature: a feature
  Scenario: headless table
    Given following rows
      | row1 | row1b |
      | row2 | row2b |
  Scenario: vertical table
    Given following vertical table
      | name  | Foo    |
      | age   | 42     |
  Scenario: table mapper
    Given following persons exits
      | name | age |
      | Foo  | 42  |
      | Bar  | 18  |