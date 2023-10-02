describe('API Tests', () => {
    it('should fetch a list of books via API', () => {
      // Define the API endpoint URL
      const apiUrl = 'https://demoqa.com/BookStore/v1/Books';
  
      // Send a GET request to fetch the list of books
      cy.request({
        method: 'GET',
        url: apiUrl,
      }).then((response) => {
        // Assertions on the response
        expect(response.status).to.eq(200); 
        expect(response.body).to.not.be.empty; // Expecting the response to have data
      });
    });

    it('should fetch a book via API', () => {
        // Define the API endpoint URL
        const apiUrl = 'https://demoqa.com/BookStore/v1/Book/9781449325862';
    
        // Send a GET request to fetch a book
        cy.request({
          method: 'GET',
          url: apiUrl,
        }).then((response) => {
          // Assertions on the response
          expect(response.status).to.eq(200);
          expect(response.body).to.not.be.empty;
          });
      });

      
  });
  