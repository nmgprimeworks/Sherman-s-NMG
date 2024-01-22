Feature: Login into sherman website
   The user wants to login into sherman website

Background:
Given User visit the sherman website

   Scenario: login with valid credencials
    When User writes the valid username
    And User writes the valid password
    And User click continue button
    Then User should see The tittle My account

    Scenario: login with invalid password
    When User writes the valid username
    And User writes the invalid password
    And User click continue button
    Then User should see error message wrong email or password