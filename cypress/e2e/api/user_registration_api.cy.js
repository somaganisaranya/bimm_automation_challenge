describe('API Tests', () => {
  it('should create a new user via API with a random username', () => {
    // Define the API endpoint URL
    const apiUrl = 'https://demoqa.com/Account/v1/User';

    // Generate a random number to include in the username
    const randomSuffix = Math.floor(Math.random() * 1000000);

    // Create a username with a prefix and the random number
    const randomUsername = `user${randomSuffix}`;

    // Define the request payload with the random username and other data
    const userData = {
      userName: randomUsername,
      password: 'Password@123',
      email: 'john.doe@example.com',
    };

    // Send a POST request to create a new user with the random username
    cy.request({
      method: 'POST',
      url: apiUrl,
      body: userData,
    }).then((response) => {
      // Assertions on the response
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('userID');
    });
  });


});
