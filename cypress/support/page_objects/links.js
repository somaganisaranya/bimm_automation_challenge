export class Links{

    NavigateToLinks(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('.btn').contains('Links').click();
    }
    NavigateToHomeLink(){
        cy.contains('Home').invoke('removeAttr', 'target').click();
    }
    ValidateHomeLink(){
        cy.url().should('eq', 'https://demoqa.com/');
    cy.title().should('eq', 'DEMOQA');
    }
    NavigateBack(){
        cy.go('back');
    }
    NavigateToDynamicLink(){
        cy.get('#dynamicLink').invoke('removeAttr', 'target').click();
    }
    ValidateDynamicLink(){
        cy.title().should('eq', 'DEMOQA');
    }
}
export const links = new Links();