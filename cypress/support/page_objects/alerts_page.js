export class WindowAlerts{

    navigateToAlerts(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('.btn').contains('Alerts').click();
    }

    clickOnAlertButton(){
        cy.get('#alertButton').click();
    }
    validateTextOnAlertButton(){
        cy.on('window:alert', (str) => {
            expect(str).to.contain('You clicked a button', { timeout: 90000 });
          });
    }
    clickOnConfirmButton(){
        cy.get('#confirmButton').click();
    }
    validateConfirmPopup(){
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?');
            return true; // Click OK
          });
          cy.get('#confirmResult').should('have.text', 'You selected Ok');
    }
    validateCancelPopup(){
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?');
            return false; // Click Cancel
          });
      
          // Verify the confirm box result
          cy.get('#confirmResult').should('have.text', 'You selected Cancel');
    }
    clickOnTimePopup(){
        cy.get('#timerAlertButton').click();
    }
    validateTimePopup(){
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?');
            return true; // Click OK
          });
    }


    clickAndValidatePromptBox(){
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('Tony');
          });
          cy.get('#promtButton').click();
          cy.get('#promptResult').should('have.text', 'You entered Tony');
    }
    cancellingPromptBox(){
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('Cancelled');
          });
          cy.get('#promtButton').click();
          cy.on('window:confirm', ()=>false);
          cy.get('#promptResult').should('have.text', 'You entered Cancelled');
    }

}
export const windowAlert = new WindowAlerts();