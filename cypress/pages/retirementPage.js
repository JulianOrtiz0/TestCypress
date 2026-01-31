import "cypress-real-events";
import { BasePage } from "./basePage";

class RetirementPage extends BasePage {
    get innovationSection() { return cy.get('.cards') }
    get machineLearningCard() { return cy.get('.flip-card-inner:contains("AI")') }
    get letsGetStartedButton() { return cy.get('a[title="Let\'s get started"]') }

    hoverMachineLearningCard() {

        this.machineLearningCard.should('be.visible')
            .realHover()
            .find('.flip-card-back .card-text')
            .invoke('text').then((text) => {
                cy.log('Text in 3rd tile is: ' + text.trim());
            });
    }
}

export const retirementPage = new RetirementPage();