import { home_page } from "../support/page_objects/home_page";

describe('Nested iFrames', ()=>{
    beforeEach(() => {
        cy.visit('/');
        home_page.NavigateToAlertsFramesWindows();
        cy.get('.btn').contains('Modal Dialogs').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    });

    it('Validate all Modal Dialogs', ()=>{
        cy.contains('Small modal').click();

    // Verify that the modal dialog is visible and contains expected content
    cy.get('.modal.show').should('be.visible').within(() => {
      cy.contains('Small Modal').should('be.visible');
      cy.contains('This is a small modal.').should('be.visible');
    });

    // Close the modal dialog by clicking the "Close" button
    cy.get('.modal.show').contains('Close').click();

    // Verify that the modal dialog is closed
    cy.get('.modal.show').should('not.exist');
    })

    it('should open and close a large modal dialog', () => {
        // Click the "Large modal" button to open the modal dialog
        cy.contains('Large modal').click();
    
        // Verify that the modal dialog is visible and contains expected content
        cy.get('.modal.show').should('be.visible').within(() => {
          cy.contains('Large Modal').should('be.visible');
          cy.contains('Large Modal').should('be.visible');
        });
    
        // Close the modal dialog by clicking the "Close" button
        cy.get('.modal.show').contains('Close').click();
    
        // Verify that the modal dialog is closed
        cy.get('.modal.show').should('not.exist');
      });
      it('should open and close a small modal dialog with keyboard', () => {
        // Click the "Small modal" button to open the modal dialog
        cy.contains('Small modal').click();
    
        // Verify that the modal dialog is visible
        cy.get('.modal.show').should('be.visible');
    
        // Press the "Escape" key to close the modal dialog
        cy.get('body').type('{esc}');
    
        // Verify that the modal dialog is closed
        cy.get('.modal.show').should('not.exist');
      });
      it('should open and close a large modal dialog with keyboard', () => {
        // Click the "Large modal" button to open the modal dialog
        cy.contains('Large modal').click();
    
        // Verify that the modal dialog is visible
        cy.get('.modal.show').should('be.visible');
    
        // Press the "Escape" key to close the modal dialog
        cy.get('body').type('{esc}');
    
        // Verify that the modal dialog is closed
        cy.get('.modal.show').should('not.exist');
      });
});