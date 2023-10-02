import { home_page } from "../support/page_objects/home_page";

describe('Widgets', () => {
    beforeEach(() => {
        cy.visit('/');
        home_page.NavigateToWidgets();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });
    it('Handling Accordian page', () => {
        cy.get('.btn').contains('Accordian').click();
        // Click on the first accordion section to open it
        cy.get('#section1Heading').click();

        // Verify that the first section is open
        cy.get('#section1Content').should('be.visible');

        // Click on the second accordion section to open it
        cy.get('#section2Heading').click();

        // Verify that the second section is open
        cy.get('#section2Content').should('be.visible');

        // Click on the first section to close it
        cy.get('#section1Heading').click();
    })

    it('Handling Auto Complete  Page', () => {
        cy.get('.btn').contains('Auto Complete').click();
        // Type a partial text in the auto-complete input
        cy.get('#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container').type('Blue');

        // Wait for the suggestion list to appear
        cy.get('.auto-complete__menu').should('be.visible');

        // Click on a suggestion from the list
        cy.contains('.auto-complete__menu', 'Blue').type('{enter}');

        // Click on the "×" button to remove the selected suggestion
        cy.get('.auto-complete__indicator').click();
        cy.get('#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container').should('have.value', '');
        cy.get('#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container').type('Black');
        cy.contains('.auto-complete__menu', 'Black').type('{enter}');
        cy.get('#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container').type('Red');
        cy.contains('.auto-complete__menu', 'Red').type('{enter}');
        cy.get('#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container').should('contain.text', 'Black', 'Blue');

    })

    it('Handling Date Picker', () => {
        cy.get('.btn').contains('Date Picker').click();
        cy.get('#datePickerMonthYearInput').click();

        // Select a specific month and year in the date picker
        cy.get('.react-datepicker__month-select').select('March');
        cy.get('.react-datepicker__year-select').select('2023');

        // Select a day from the date picker
        cy.get('.react-datepicker__day').contains('15').click();

        // Verify that the selected date is displayed in the input field
        cy.get('#datePickerMonthYearInput').should('have.value', '03/15/2023');
        cy.get('#dateAndTimePickerInput').click();
        cy.get('.react-datepicker__month-read-view--selected-month').contains('October').click({ force: true });
        cy.get('.react-datepicker__year-read-view').contains('2023').click({ force: true });
        cy.get('.react-datepicker__day').contains('24').click({ force: true });

    })
    it('Handling Slider Page', () => {
        cy.get('.btn').contains('Slider').click();
        cy.get('.range-slider').invoke('val', 30).trigger('change');

        // Verify that the slider's value is set to 30
        cy.get('.range-slider').should('have.value', 30);
        cy.get('.range-slider').invoke('val', 0).trigger('change');

        // Verify that the slider's value is set to 0
        cy.get('.range-slider').should('have.value', 0);
        cy.get('.range-slider').invoke('val', 100).trigger('change');

        // Verify that the slider's value is set to 100
        cy.get('.range-slider').should('have.value', 100);

    })
});
