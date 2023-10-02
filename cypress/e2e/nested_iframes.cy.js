import { home_page } from "../support/page_objects/home_page";

describe('Nested iFrames', ()=>{
    beforeEach(() => {
        cy.visit('/');
        home_page.NavigateToAlertsFramesWindows();
        cy.get('.btn').contains('Nested Frames').click();
    });

    it('Validating text in Nested Frames', ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
          cy.get('#frame1').its('0.contentDocument.body').should('have.text','Parent frame')
    })
})