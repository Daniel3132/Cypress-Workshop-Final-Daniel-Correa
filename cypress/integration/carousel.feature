Feature: Manage Carousel functionality
    @regression @smoke @sanity
    As an user
    I want to interact with carousel with correct functions

    Background:
        Given I visit the demoblaze homepage
        Then the shown image should be the "First" one

    Scenario: change carousel image to right
        @regression
        When I click the carousel next button
        Then the shown image should be the "Second" one

    Scenario: change carousel image to left
        @regression
        When I click the carousel previous button
        Then the shown image should be the "Third" one

    Scenario: change carousel image by selector two
        @smoke @sanity
        When I click the carousel image selector 2
        Then the shown image should be the "Second" one

    Scenario: change carousel image by selector three
        @smoke @sanity
        When I click the carousel image selector 3
        Then the shown image should be the "Third" one
