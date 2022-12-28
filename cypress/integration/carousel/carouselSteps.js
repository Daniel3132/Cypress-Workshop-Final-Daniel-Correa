import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/HomePage";
const homePage = new HomePage();

Given('I visit the demoblaze homepage', () => {
    cy.visit('/');
});

When('I click the carousel next button', () => {
    homePage.clickCarouselNextButton();
});

When('I click the carousel previous button', () => {
    homePage.clickCarouselPrevButton();
});

Then('the shown image should be the {string} one', index => {
    homePage.carouselImagenContainer(index).should('have.class', 'active');
});

When('I click the carousel image selector {int}', selector => {
    homePage.clickCarouselIndicator(selector - 1);
});