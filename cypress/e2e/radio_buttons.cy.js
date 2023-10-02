import { home_page } from "../support/page_objects/home_page";
import { radio_buttons } from "../support/page_objects/radio_buttons";

describe('Radio Buttons', ()=>{
    beforeEach(() => {
        cy.visit('/')
    
      })

      it('Validate Radio Buttons',()=>{
        home_page.NavigateToElements();
        radio_buttons.NavigateToRadioButton();
        radio_buttons.ClickOnYesRadioButton();
        radio_buttons.ValidateSuccessMessageForYesButton();
        radio_buttons.ClickOnImpressiveButton();
        radio_buttons.ValidateImpressiveSuccessMessage();
        radio_buttons.ValidateYesRadioButtonIsUnchecked();
        radio_buttons.ValidateDisabledRadioButton();
      })
})