Feature: Manage Carousel functionality
    As an user
    I want to interact with carousel with correct functions
 
    Background:
        Given I visit the demoblaze homepage
 
    Scenario: change carousel image to right
        When I click the carousel next button
        Then the shown image should be the "Second" one
    
    Scenario: change carousel image to left
        When I click the carousel previous button
        Then the shown image should be the "Third" one