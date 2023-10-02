export class TextBoxPage {

    VerifyPageTitle() {
        cy.get('.playgound-header').should('be.visible');
    }

    ClickOnTextBox() {
        cy.get('.btn').contains('Text Box').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    }
    SendingDataIntoTextField() {
        cy.get('#userName').type('Person1');
        cy.get('#userEmail').type('person1@mail.com');
        cy.get('#currentAddress').type('This is my current Address')
        cy.get('#permanentAddress').type('This is my permanent Address')
        cy.get('#submit').click();
        cy.get('.border').should('be.visible');
    }
    UpdatingDataInTextField() {
        cy.get('#userName').clear().type('Person3');
        cy.get('#submit').click();
        cy.contains('.border', 'Person3').should('be.visible');
    }
    ValidateFieldErrors(){
        cy.get('#userName').clear().type('Person2');
        cy.get('#userEmail').clear().type('person2');
        cy.get('#submit').click();
        cy.get('.field-error').should('exist');
    }
}
export const text_box_page = new TextBoxPage();