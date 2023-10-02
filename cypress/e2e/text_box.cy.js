import { home_page } from "../support/page_objects/home_page";
import { text_box_page } from "../support/page_objects/text_box";

describe('Elements Page', ()=>{
    beforeEach(() => {
        cy.visit('/')
      })

    it('Validating Fields on text box page', ()=>{
        home_page.NavigateToElements();
        text_box_page.ClickOnTextBox();
        text_box_page.SendingDataIntoTextField();
        text_box_page.UpdatingDataInTextField();       
        text_box_page.ValidateFieldErrors();
    })
})