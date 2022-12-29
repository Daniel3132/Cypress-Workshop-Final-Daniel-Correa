import { CartLocators } from "../locators/cartLocators";
const { purchaseForm } = CartLocators;
class CartPage {
    placeOrderBtn() { return cy.get(CartLocators.placeOrderButton) }
    nameInput() { return cy.get(purchaseForm.nameInput) }
    countryInput() { return cy.get(purchaseForm.countryInput) }
    cityInput() { return cy.get(purchaseForm.cityInput) }
    creditCardInput() { return cy.get(purchaseForm.creditCardInput) }
    monthInput() { return cy.get(purchaseForm.monthInput) }
    yearInput() { return cy.get(purchaseForm.yearInput) }
    purchaseBtn() { return cy.get(purchaseForm.purchaseBtn) }
    deleteProductBtn() { return cy.get(purchaseForm.deleteProductBtn) }
    sucessPurchaseAlert() { return cy.get(CartLocators.sucessPurchaseAlert) }
}

export default CartPage;