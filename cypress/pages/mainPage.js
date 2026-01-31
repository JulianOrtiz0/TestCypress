import { BasePage } from "./basePage";

class MainPage extends BasePage {
    get industriesMenuItem() { return cy.get('.industries-mega-menu-wrap'); }
    get retirementAndWealthLink() { return cy.get('[title="Retirement and wealth"]') }
}

export const mainPage = new MainPage();