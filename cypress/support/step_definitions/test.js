import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { mainPage } from '../../e2e/pages/mainPage';
import { retirementPage } from '../../e2e/pages/retirementPage';
import { contactPage } from '../../e2e/pages/contactPage';

Given('I am on the Blankfactor homepage', () => {
    cy.visit('/');
});

When('I explore the "AI & Machine learning" innovation details under "Retirement and Wealth"', () => {
    mainPage.hoverElement(mainPage.industriesMenuItem);
    mainPage.clickElement(mainPage.retirementAndWealthLink);
    retirementPage.scrollToSection(retirementPage.innovationSection);
    retirementPage.hoverMachineLearningCard();
});

When('I decide to get started with a project', () => {
    retirementPage.clickElement(retirementPage.letsGetStartedButton);
});

Then('I should be redirected to the contact page successfully with name {string}', (title) => {
    contactPage.verifyURL('/contact');
    contactPage.verifyTitle(title);
});
