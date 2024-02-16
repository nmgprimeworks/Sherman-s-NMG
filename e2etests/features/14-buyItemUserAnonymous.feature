Feature: User anonymous buys an item into the sherman website
   The user anonymous wants to buy an item into sherman website


Background:
Given User visit the sherman website

@test 
   Scenario: User anonymous buys an item
    And User searches and adds an item to cart
    And User fills out the form
    And User makes the purchase
    Then User should see the id of the purchase