
import { home_page } from "../support/page_objects/home_page";

describe('Frames', ()=>{
    beforeEach(() => {
        cy.visit('/');
        home_page.NavigateToAlertsFramesWindows();
        cy.get('.btn').contains('Frames').click();
    });
    
    /** Handling iFrames by locating iframe element and 
     * using cy.its() to access a specific property of the selected element or elements.
     */
    
    it('Handling First iFrame',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
       
        cy.get('#frame1').its('0.contentDocument.body').find('#sampleHeading').should('have.text','This is a sample page')
    })

    it('Handling Second iFrame',()=>{
        cy.get('#frame2').its('0.contentDocument.body').find('#sampleHeading').scrollIntoView().should('have.text','This is a sample page')
    
    })


})