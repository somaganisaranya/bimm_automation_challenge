import { home_page } from "../support/page_objects/home_page"; 

describe('Bookstore Tests', () => {
    beforeEach(() => {
      // Visit the bookstore page before each test
      cy.visit('/');
    home_page.NavigateToBookStoreApplication();
    // cy.get
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    });
  
    /**
     * GIVEN book store test validations
     * WHEN searching for a book title
     * THEN we should be able to sort book by author
     * 
     */
    it('should display a list of books', () => {
      // Check if there are at least 5 books displayed
      cy.get('.rt-tr-group').should('have.length.greaterThan', 5);
    });
  
    it('should be able to search for a book by title', () => {
      // Type a book title into the search input
      cy.get('#searchBox').type('Git');
      // Verify that the search results contain the expected book
      cy.get('.rt-td').should('contain', 'Git');
    });
  
    it('should be able to sort books by author', () => {
      // Click on the "Author" column header to sort by author
      cy.get('.rt-resizable-header-content').contains('Author').click();
  
      // Verify that the books are sorted by author in ascending order
      cy.get('.rt-tr ')
        .first()
        .should('contain', 'A'); 
    });
  
    it('should be able to view book details', () => {
      // Click on the first book's title to view details
      cy.get('.rt-tbody').contains('Git Pocket Guide').click({force: true});
  
      // Verify that the book details are displayed
      cy.get('#title-label').should('be.visible');
      cy.get('#author-label').should('be.visible');
      cy.get('#description-label').should('be.visible');
      cy.get('#addNewRecordButton').click();
  
      // Verify that the cart icon in the navigation bar shows a count of 1
      cy.get('.ReactTable').should('be.visible')
    });

  });
  