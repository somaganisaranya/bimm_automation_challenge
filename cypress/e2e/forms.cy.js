import { home_page } from "../support/page_objects/home_page";
import { forms } from "../support/page_objects/forms";
import "../fixtures/form-data.json";
import 'cypress-file-upload';
import { realType, realClick } from 'cypress-real-events';

describe('Forms Page',()=>{
    beforeEach(() => {
        cy.visit('/');
        home_page.NavigateToForms();
        forms.navigateToPracticeForm();
        cy.fixture('form-data').then((data) => {

        });
      })

      /**
       * GIVEN Forms Page
       * WHEN entering user data from fixtures file
       * AND submitting
       * THEN user should be created successfully
       * AND validate the details in the form
       * WHEN Entering Invalid Data
       * THEN user should see error message/fields
       */

      it('Fill data using fixture file in practice form page', ()=>{
        forms.verifyFormTitle();
        cy.fixture('form-data').then((data) => {
          //There is also an option to test multiple users by incorporating all user details in fixtures file.
            forms.enterFirstName(data.firstName);
            forms.enterLastName(data.lastName);
            forms.enterEmail(data.userEmail);
            forms.selectGender(data.gender);
            forms.enterMobile(data.mobileNumber);
            forms.enterDateOfBirth();
            forms.enterSubjects(data.subjects[0]);
            forms.checkHobbies(data.hobbies[1]);
            forms.uploadPicture(data.uploadFile);
            forms.enterCurrentAddress(data.currentAddress);
            forms.enterState(data.state);
            forms.enterCity(data.city);
            forms.submitForm();
            forms.validateForm();
            forms.closeForm();
        });
      })

      it('Negative Tests for DemoQA Form', ()=>{
        forms.submitInvalidMail();
        forms.submitForm();
        forms.validateInvalidEmail();
      })
})