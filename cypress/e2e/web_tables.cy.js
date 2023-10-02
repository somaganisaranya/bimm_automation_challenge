import { home_page } from "../support/page_objects/home_page";
import { web_tables } from "../support/page_objects/web_tables";

describe('Web Tables', ()=>{
    beforeEach(() => {
        cy.visit('/');
        home_page.NavigateToElements();
        web_tables.NavigateToWebTables();
      })
      /**
       * GIVEN a Web Table
       * WHEN creating a new row by entering user details
       * THEN a new row will be created successfully
       * AND validate the new row
       * WHEN entering invalid user details
       * THEN error message/fields will be displayed
       * WHEN Searching for newly created user
       * THEN user information should be found on table
       * AND validate results
       */

      it('Register new user and Validate all fields', ()=>{
        web_tables.ValidatePageTitle();
        web_tables.AddNewUser();
        web_tables.ValidateRegistrationForm();
        web_tables.EnterFirstName();
        web_tables.EnterLastName();
        web_tables.EnterInvalidEmail();
        web_tables.ClickOnSubmit();
        web_tables.ValidateEmailErrorAttribute();
        web_tables.EnterValidEmail();
        web_tables.EnterInvalidAge();
        web_tables.ClickOnSubmit();
        web_tables.ValidateErrorAgeAttribute();
        web_tables.EnterValidAge();
        web_tables.EnterInvalidSalary();
        web_tables.ClickOnSubmit();
        web_tables.ValidateErrorSalaryAttribute();
        web_tables.EnterValidSalary();
        web_tables.EnterDepartment();
        web_tables.ClickOnSubmit();
        web_tables.ValidateNewUserVisibleInTable();
        web_tables.SearchNewUser();
        web_tables.ValidateNewUserResultFromTable();
    })

    /**
     * GIVEN Sortable Table
     * WHEN sorting salaries row in Ascending Order
     * THEN salaries should be sorted accordingly
     * WHEN sorting salaries row in Descending Order
     * THEN salaries should be sorted accordingly
     */

    it('Sort and Validate Salaries rows', ()=>{
        web_tables.ClickOnSalary();
        web_tables.SortSalaryInAscendingOrder();
        web_tables.ClickOnSalary();
        web_tables.SortSalaryInDescendingOrder();
    })

    /**
     * GIVEN an Editable form
     * WHEN editing data in the table
     * AND submitting
     * THEN data should be edited successfully
     * AND validate Edited data
     * WHEN verifying pagination
     * THEN Next/Previous buttons should be Enabled/disabled accordingly
     */

    it('Edit User Data and pagination', ()=>{
        web_tables.ClearSearchBox();
        web_tables.ClickOnEdit();
        web_tables.EditFirstName();
        web_tables.EditLastName();
        web_tables.EditEmail();
        web_tables.EditAge();
        web_tables.EditSalary();
        web_tables.EditDepartment();
        web_tables.SubmitEditedData();
        web_tables.VerifyEditedData();
        web_tables.VerifyPagination();
    })
})