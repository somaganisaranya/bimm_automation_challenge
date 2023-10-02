export class HomePage{
    ValidateTitleOfHomePage(){
        cy.get('header > a > img').should('be.visible');
    }
    ValidateLengthOfCategoryCards(){
        cy.get('.category-cards').should('have.length', 1);
        cy.get('.category-cards').each(($el) => {
          cy.wrap($el).should('be.visible');
        });
    }
    NavigateToElements(){
        cy.get('.card').contains('Elements').click();
    }
    NavigateToForms(){
        cy.get('.card').contains('Forms').click();
    }
    NavigateToAlertsFramesWindows(){
        cy.get('.card').contains('Alerts, Frame & Windows').click();
    }
    NavigateToWidgets(){
        cy.get('.card').contains('Widgets').click();
    }
    NavigateToInteractions(){
        cy.get('.card').contains('Interactions').click();
    }
    NavigateToBookStoreApplication(){
        cy.get('.card').contains('Book Store Application').click();
    }

}
export const home_page = new HomePage();