@regression @smoke @sanity
Feature: Manage Carousel functionality
    As an user
    I want to interact with carousel with correct functions

    Background:
        Given I visit the demoblaze homepage
        Then the shown image should be the "First" one

    @regression
    Scenario: change carousel image to right
        When I click the carousel next button
        Then the shown image should be the "Second" one

    @regression
    Scenario: change carousel image to left
        When I click the carousel previous button
        Then the shown image should be the "Third" one

    @smoke @sanity
    Scenario: change carousel image by selector two
        When I click the carousel image selector 2
        Then the shown image should be the "Second" one

    @smoke @sanity
    Scenario: change carousel image by selector three
        When I click the carousel image selector 3
        Then the shown image should be the "Third" one
