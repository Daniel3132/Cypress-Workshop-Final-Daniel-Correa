import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { CartLocators } from "../../support/locators/cartLocators";
import { Homelocators } from "../../support/locators/HomeLocators";
import CartPage from "../../support/pages/CartPage";
import HomePage from "../../support/pages/HomePage";
const homePage = new HomePage();
const cartPage = new CartPage();

Given('I visit the demoblaze homepage', () => {
    cy.visit('/');
});

When('I click the Home button in the header', () => {
    homePage.clickHomeLink();
});

When('I click the Contact button in the header', () => {
    homePage.clickContactLink();
});

When('I click the About us button in the header', () => {
    homePage.clickAboutLink();
});

When('I click the Cart button in the header', () => {
    homePage.clickCartLink();
});

When('I click the Log in button in the header', () => {
    homePage.clickLoginLink();
});

When('I click the Sign up button in the header', () => {
    homePage.clickSignUpLink();
});

Then('The home page is displayed', () => {
    cy.url().should('include', Homelocators.homeUrl);
    homePage.categoriesTitle().should('exist')
});

Then('The cart page is displayed', () => {
    cy.url().should('include', CartLocators.cartUrl);
    cartPage.placeOrderBtn().should('exist')
});

Then('The Contact Us modal is displayed with a form for submitting a message', () => {
    homePage.contactModal().should('be.visible');
});

Then('The About us modal is displayed with a video', () => {
    homePage.aboutModal().should('be.visible');
});

Then('The Log in modal is displayed with a login form', () => {
    homePage.loginModal().should('be.visible');
});

Then('The Sign up modal is displayed with a sign up form', () => {
    homePage.signupModal().should('be.visible');
});