export class DynamicProperties{

    NavigateToDynamicPropertiesPage(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('.btn').contains('Dynamic Properties').click();
    }
    ValidateButtonIsNotEnabled(){
        cy.get('#enableAfter').should('not.be.enabled');
    }
    ValidateButtonIsNotExisting(){
        cy.get('#visibleAfter').should('not.exist');
    }
    WaitForButtonToLoad(){
        cy.wait(6000);
    }
    ValidateButtonColorChange(){
        cy.get('button#colorChange')
      .invoke('css', 'color')
      .then((buttonColor) => {
        // Assert that the color matches the expected color (replace with your expected color)
        expect(buttonColor).to.eq('rgb(220, 53, 69)'); // Replace with your expected color value
      });
    }
    ValidateButtonEnabledAfterWait(){
        cy.get('#enableAfter').should('be.enabled');
    }
    ValidateDynamicText(){
        cy.contains('This text has random Id').should('exist');
    }
    ValidateVisibleAfterButton(){
        cy.get('#visibleAfter').should('be.enabled').and('be.visible');
    }
}
export const dynamic_properties = new DynamicProperties();