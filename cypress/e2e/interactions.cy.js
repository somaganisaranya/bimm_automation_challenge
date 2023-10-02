import { home_page } from "../support/page_objects/home_page";

describe('Widgets', () => {
    beforeEach(() => {
        cy.visit('/');
        home_page.NavigateToInteractions();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });

    it('Handling Sortable Page',()=>{
        cy.get('.btn').contains('Sortable').click();
        const sortableList = cy.get('#demo-tabpane-list');

    // Drag the first item and drop it to the third position
    sortableList.get('.vertical-list-container > :nth-child(1)').trigger('mousedown', { which: 1 });
    sortableList.get('.vertical-list-container > :nth-child(5)').trigger('mousemove');
    sortableList.get('.vertical-list-container > :nth-child(3)').trigger('mouseup');

    // Verify that the items have been reordered
    sortableList.should('have.text', 'Four');
  
    })

  

});