Feature: User compares two products

Background:
Given User visit the sherman website

@test 
   Scenario: User compares two products
    And User searches items
    And User adds two items to compare
    And User open the compare page
    Then User should see the same product added to campare
    And User should see the specifications