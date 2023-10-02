export class WebTables {

    NavigateToWebTables() {
        cy.get('.btn').contains('Web Tables').click();
    }
    ValidatePageTitle() {
        cy.get('.playgound-header').contains('Web Tables').should('be.visible');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }
    AddNewUser() {
        cy.get('#addNewRecordButton').click();
    }
    ValidateRegistrationForm() {
        cy.get('#registration-form-modal').should('be.visible');
    }
    EnterFirstName() {
        cy.get('#firstName').type('person1');
    }
    EnterLastName() {
        cy.get('#lastName').type('add1');
    }
    EnterInvalidEmail() {
        cy.get('#userEmail').type('abc');
    }
    ClickOnSubmit() {
        cy.get('#submit').click();
    }
    ValidateEmailErrorAttribute() {
        cy.get('#userEmail').should('have.attr', 'required');
    }
    EnterValidEmail() {
        cy.get('#userEmail').type('abc@gmail.com');
    }
    EnterInvalidAge() {
        cy.get('#age').type('ee');
    }
    ValidateErrorAgeAttribute() {
        cy.get('#age').should('have.attr', 'required');
    }
    EnterValidAge() {
        cy.get('#age').clear().type('22');
    }
    EnterInvalidSalary() {
        cy.get('#salary').type('abc');
    }
    ValidateErrorSalaryAttribute() {
        cy.get('#salary').should('have.attr', 'required');
    }
    EnterValidSalary() {
        cy.get('#salary').clear().type('60000')
    }
    EnterDepartment() {
        cy.get('#department').type('IT')
    }
    ValidateNewUserVisibleInTable() {
        cy.get('.rt-tr ').contains('person1').should('be.visible')
    }
    SearchNewUser() {
        cy.get('#searchBox').type('person');
    }
    ValidateNewUserResultFromTable() {
        cy.get('div.rt-tr').eq(1).should('contain', 'person1');
    }

    ClickOnSalary() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('.rt-th').contains('Salary').click();
    }

    SortSalaryInAscendingOrder() {
        cy.get('.rt-td:nth-child(5)') // Assuming salary is in the 5th column
            .invoke('text')
            .then((salaryValues) => {
                const sortedSalaries = salaryValues
                    .split('\n') // Split the extracted values into an array
                    .map((salary) => parseInt(salary.trim().replace('$', '').replace(/,/g, ''))); // Convert to numbers
                // Verify that the salaries are in ascending order
                for (let i = 0; i < sortedSalaries.length - 1; i++) {
                    expect(sortedSalaries[i]).to.be.at.most(sortedSalaries[i + 1]);
                }
            });
    }

    SortSalaryInDescendingOrder() {
        cy.get('.rt-td:nth-child(5)')
            .invoke('text')
            .then((salaryValues) => {
                const sortedSalaries = salaryValues
                    .split('\n')
                    .map((salary) => parseInt(salary.trim().replace('$', '').replace(/,/g, '')));

                // Verify that the salaries are in descending order
                for (let i = 0; i < sortedSalaries.length - 1; i++) {
                    expect(sortedSalaries[i]).to.be.at.least(sortedSalaries[i + 1]);
                }
            });
    }

    ClearSearchBox() {
        cy.get('#searchBox').clear();
    }
    ClickOnEdit() {
        cy.get('#edit-record-2').click();
    }
    EditFirstName() {
        cy.get('#firstName').clear().type('EditedFirstName');
    }
    EditLastName() {
        cy.get('#lastName').clear().type('EditedLastName');
    }
    EditEmail() {
        cy.get('#userEmail').clear().type('edited-email@example.com');
    }
    EditAge() {
        cy.get('#age').clear().type('30');
    }
    EditSalary() {
        cy.get('#salary').clear().type('70000');
    }
    EditDepartment() {
        cy.get('#department').clear().type('QA');
    }
    SubmitEditedData() {
        cy.get('#submit').click();
    }
    VerifyEditedData() {
        cy.get('.rt-tr')
            .should('contain', 'EditedFirstName')
            .should('contain', 'EditedLastName')
            .should('contain', 'edited-email@example.com')
            .should('contain', '30')
            .should('contain', '70000')
            .should('contain', 'QA');
    }

    VerifyPagination() {
        // Verify that the "Previous" button is disabled on the first page
        cy.get('.-pagination').contains('Previous').should('have.attr', 'disabled');
        // Verify that the "Next" button is disabled on the last page
        cy.get('.-pagination').contains('Next').should('have.attr', 'disabled');
    }
}
export const web_tables = new WebTables();