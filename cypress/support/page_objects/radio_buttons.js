export class RadioButtons{

        NavigateToRadioButton(){
            cy.get('.btn').contains('Radio Button').click();
        }
        ClickOnYesRadioButton(){
            cy.get('#yesRadio').check({ force: true }).should('be.checked');
        }
        ValidateSuccessMessageForYesButton(){
            cy.get('.text-success').should('have.text', 'Yes');
        }
        ClickOnImpressiveButton(){
            cy.get('#impressiveRadio').check({ force: true }).should('be.checked');
        }
        ValidateImpressiveSuccessMessage(){
            cy.get('.text-success').should('have.text', 'Impressive');
        }
        ValidateYesRadioButtonIsUnchecked(){
            cy.get('#yesRadio').should('not.be.checked');
        }
        ValidateDisabledRadioButton(){
            cy.get('#noRadio').should('have.attr', 'disabled');
        }
    }
export const radio_buttons = new RadioButtons();