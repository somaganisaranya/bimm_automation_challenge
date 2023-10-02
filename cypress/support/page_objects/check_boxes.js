export class CheckBoxes{

    ClickOnCheckBoxes(){
        cy.get('.btn').contains('Check Box').click();
    }
    ValidateTitleOfCheckBoxPage(){
        cy.get('.playgound-header').contains('Check Box').should('be.visible');
    }
    ClickOnExpandCheckBoxes(){
        cy.get('.rct-option-expand-all').click();
    }
    ValidateExpandedCheckBoxes(){
        cy.get('.rct-node-expanded').should('be.visible');
    }
    CheckAllCheckBoxes(){
        cy.get('#tree-node-home').check({ force: true });
    }
    ValidateAllCheckBoxesAreChecked(){
        cy.get('input[type="checkbox"]').each((checkbox) => {
            cy.wrap(checkbox).should('be.checked');
          });
    }
    UncheckAllCheckBoxes(){
        cy.get('#tree-node-home').uncheck({ force: true });
    }
    ValidateUncheckedCheckBoxes(){
        cy.get('input[type="checkbox"]').each((checkbox) => {
            cy.wrap(checkbox).should('not.be.checked');
          });
    }
    ValidateUncheckedCheckBox(){
        cy.get('.rct-node-icon').should('not.be.checked');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    }
    ClickOnNotesCheckBox(){
        cy.get('#tree-node-notes').check({ force: true });
    }
    ClickOnCommandsCheckBox(){
        cy.get('#tree-node-commands').check({ force: true });
    }
    ValidateDesktopCheckBoxIsChecked(){
        cy.get('#tree-node-desktop').should('be.checked')
    }
    ValidateResults(){
        cy.get('#result').contains('desktop').should('be.visible');
    }
    ClickOnDownloadsCheckBox(){
        cy.get('#tree-node-downloads').check({ force: true });
    }
    ValidateDownloadsIsChecked(){
        cy.get('#result').contains('downloads').should('be.visible');
    }
}
export const check_boxes = new CheckBoxes();