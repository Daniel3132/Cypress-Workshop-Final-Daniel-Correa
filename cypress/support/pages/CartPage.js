import { CartLocators } from "../locators/cartLocators";

class CartPage{
    placeOrderBtn(){return cy.get(CartLocators.placeOrderButton)}
}

export default CartPage;