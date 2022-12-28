import { getRandomIndicatorIndex } from "../helpers/baseFunctions";
import { locators } from "../locators/HomeLocators";
const { carousel } = locators;

class HomePage {
    carouselPrevButton() { return cy.get(carousel.PrevButton); }
    carouselNextButton() { return cy.get(carousel.NextButton); }

    carouselImagenContainer(index) { return cy.get(`[alt="${index} slide"]`).parent(); }

    clickCarouselPrevButton() { this.carouselPrevButton().click(); }
    clickCarouselNextButton() { this.carouselNextButton().click(); }


    clickCarouselIndicator(index) {
        cy.get(carousel.Indicator + index + carousel.IndicatorCloser).click();
    }
}

export default HomePage;