Feature: Manage Carousel functionality
    As an user
    I want to interact with cart with correct functions
    as Adding and deleting products from cart

    Background:
        Given I visit the demoblaze homepage

    Scenario: add products to the cart
        Given I select product 5
        When I click the Add to cart button
        And I navigate to cart page
        Then The products list contains 1 products
        
    Scenario: Delete a product from cart
        Given there is a product in the cart
        And I am on the cart page
        When I click the Delete button
        Then The products list contains 0 products

    Scenario: Buy a product with form payment
        Given there is a product in the cart
        And I am on the cart page
        When I click the Place Order button
        And I fill out the form with my payment information
        Then I should see a confirmation message that my order has been placed