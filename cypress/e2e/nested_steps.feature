Feature: nested step defs

  Scenario: the only step with actual logic
    When I fill in "foo" for "username"
    When I fill in "bar" for "password"
  
  Scenario: table delegating with nested steps
    When I fill in the form values
      | Field    | Value |
      | username | foo   |
      | password | bar   |

  Scenario: single nested steps
    When I fill in the login form using single fill steps

  Scenario: table nested step
    When I fill in the login form using table
