export class Forms{

    navigateToPracticeForm(){
        cy.get('.btn').contains('Practice Form').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    }
    verifyFormTitle(){
        cy.get('.playgound-header').contains('Practice Form').should('be.visible');
    }
    enterFirstName(firstName){
        cy.get('#firstName').type(firstName);
    }
    enterLastName(lastName){
        cy.get('#lastName').type(lastName);
    }
    enterEmail(userEmail){
        cy.get('#userEmail').type(userEmail);
    }
    selectGender(gender){
        cy.get('#genterWrapper').contains(gender).click();
    }
    enterMobile(mobileNumber){
        cy.get('#userNumber').type(mobileNumber);
    }
    enterDateOfBirth(year,Month){
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1990');
        // cy.get('.react-datepicker__year-select').type(year+'{enter}');
        cy.get('.react-datepicker__month-select').select('May');
        // cy.get('.react-datepicker__month-select').type(Month+'{enter}');
        cy.get('.react-datepicker__day--017').click();
    }
    enterSubjects(subjects){
        cy.get('#subjectsInput').type(subjects+'{enter}');
    }
    checkHobbies(hobby){
        cy.get('.custom-checkbox').contains(hobby).click();
    }
    uploadPicture(uploadFile){
        cy.get('#uploadPicture').attachFile(uploadFile);
    }
    enterCurrentAddress(currentAddress){
        cy.get('#currentAddress').type(currentAddress);
    }
    enterState(state){
        cy.get('#state').type(state).type('{enter}');
    }
    enterCity(city){
        cy.get('#city').type(city).type('{enter}');
    }
    submitForm(){
        cy.get('#submit').click({force: true});
    }
    validateForm(){
        cy.get('.modal-title').should('have.text', 'Thanks for submitting the form');
    }
    closeForm(){
        cy.get('#closeLargeModal').click();
    }
    submitInvalidMail(){
        cy.get('#userEmail').type('invalidEmail');
    }
    validateInvalidEmail(){
        cy.get('#userEmail')
        .invoke('css', 'color')
        .then((buttonColor) => {
          expect(buttonColor).to.eq('rgb(73, 80, 87)');
        });
    }
}
export const forms = new Forms();