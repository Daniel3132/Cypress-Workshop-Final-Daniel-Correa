const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');
import CartPage from "../../support/pages/CartPage";
import HomePage from "../../support/pages/HomePage";
import { CartLocators } from "../../support/locators/cartLocators";
import { Homelocators } from "../../support/locators/HomeLocators";
const homePage = new HomePage();
const cartPage = new CartPage();

Given('I visit the demoblaze homepage', () => {
    cy.visit('/');
});

Given('I select product {int}', id => {
    cy.get(CartLocators.product(id)).click();
});

When('I click the Add to cart button', () => {
    cy.get(CartLocators.addProductBtn).click();
});

And('I navigate to cart page', () => {
    homePage.clickCartLink();
});

Then('The products list contains {int} products', ListSize => {
    cy.get(CartLocators.cartTable).children().should('have.length', ListSize);
});

Given('there is a product in the cart', () => {
    //Adding product 1 to cart
    cy.get(CartLocators.product(1)).click();
    cy.get(CartLocators.addProductBtn).click();
});

And('I am on the cart page', () => {
    homePage.clickCartLink();
});

When('I click the Place Order button', () => {
    cartPage.placeOrderBtn().click();
});

When('I click the Delete button', () => {
    cartPage.deleteProductBtn().click();
});

When('I fill out the form with my payment information', () => {
    cy.fixture("purchaseForm.json").then((inputValues) => {
        Object.keys(inputValues).forEach((key) => {
            cy.get(`#${key}`).type(inputValues[key]);
        });
    });
    cartPage.purchaseBtn().click();
});

Then('I should see a confirmation message that my order has been placed', () => {
    cartPage.sucessPurchaseAlert().should('be.visible')
});
