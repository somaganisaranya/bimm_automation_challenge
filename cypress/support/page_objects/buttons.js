export class Buttons{

    NavigateToButtons(){
        cy.get('.btn').contains('Buttons').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    }
    ClickOnDynamicButton(){
        cy.get('button.btn.btn-primary').eq(2).click();
    }
    ValidateDynamicButtonMessage(){
        cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click');
    }
    ClickOnDoubleClickButton(){
        cy.get('#doubleClickBtn').dblclick();
    }
    ValidateDoubleClickMessage(){
        cy.get('#doubleClickMessage').should('contain', 'You have done a double click');
    }
    ClickOnRightClickButton(){
        cy.get('#rightClickBtn').rightclick();
    }
    ValidateRightClickMessage(){
        cy.get('#rightClickMessage').should('contain', 'You have done a right click');
    }
}
export const buttons = new Buttons();