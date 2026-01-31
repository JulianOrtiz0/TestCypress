import "cypress-real-events";
export class BasePage {

    hoverElement(element) {
        element.realHover();
    }

    clickElement(element) {
        element.click()
    }

    scrollToSection(element) {
        element.scrollIntoView()
    }

    verifyURL(expectedURL) {
        cy.url().should('include', expectedURL);
    }

    verifyTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
    }
}