Feature: Manage Header Links functionality
    As an user
    I want to interact with page links correctly
    whether it corresponds to navigating to another page or opening a modal

    Background:
        Given I visit the demoblaze homepage

    Scenario: navigate to Homepage
        When I click the Home button in the header
        Then The home page is displayed

    Scenario: open contact modal
        When I click the Contact button in the header
        Then The Contact Us modal is displayed with a form for submitting a message

    Scenario: open About us modal
        When I click the About us button in the header
        Then The About us modal is displayed with a video

    Scenario: navigate to Cart page
        When I click the Cart button in the header
        Then The cart page is displayed

    Scenario: open Login modal
        When I click the Log in button in the header
        Then The Log in modal is displayed with a login form

    Scenario: open Sign up modal
        When I click the Sign up button in the header
        Then The Sign up modal is displayed with a sign up form