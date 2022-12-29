import { Homelocators } from "../locators/HomeLocators";
const { carousel, header, modal } = Homelocators;

class HomePage {
    carouselPrevButton() { return cy.get(carousel.PrevButton); }
    carouselNextButton() { return cy.get(carousel.NextButton); }
    
    carouselImagenContainer(index) { return cy.get(`[alt="${index} slide"]`).parent(); }
    
    headerHomeLink() { return cy.get(header.home); }
    headerContactLink() { return cy.get(header.contact); }
    headerAboutLink() { return cy.get(header.about); }
    headerCartLink() { return cy.get(header.cart); }
    headerLoginLink() { return cy.get(header.login); }
    headerSignUpLink() { return cy.get(header.signup); }
    
    contactModal() { return cy.get(modal.contact); }
    aboutModal() { return cy.get(modal.about); }
    loginModal() { return cy.get(modal.login); }
    signupModal() { return cy.get(modal.signup); }

    categoriesTitle(){return cy.get(Homelocators.categoriesTitle)}
    

    clickCarouselPrevButton() { this.carouselPrevButton().click(); }
    clickCarouselNextButton() { this.carouselNextButton().click(); }

    clickCarouselIndicator(index) {
        cy.get(carousel.Indicator + index + carousel.IndicatorCloser).click();
    }

    clickHomeLink() { this.headerHomeLink().click(); }
    clickContactLink() { this.headerContactLink().click(); }
    clickAboutLink() { this.headerAboutLink().click(); }
    clickCartLink() { this.headerCartLink().click(); }
    clickLoginLink() { this.headerLoginLink().click(); }
    clickSignUpLink() { this.headerSignUpLink().click(); }
}

export default HomePage;