import { home_page } from "../support/page_objects/home_page";
import { dynamic_properties } from "../support/page_objects/dynamic_properties";

describe('Dynamic Properties Page', ()=>{
    beforeEach(() => {
        cy.visit('/')
        home_page.NavigateToElements();
      })

      it('Validate All Dynamic Properties in the page', ()=>{
        dynamic_properties.NavigateToDynamicPropertiesPage();
        dynamic_properties.ValidateButtonIsNotEnabled();
        dynamic_properties.ValidateButtonIsNotExisting();
        dynamic_properties. WaitForButtonToLoad();
        dynamic_properties.ValidateButtonColorChange();
        dynamic_properties. ValidateButtonEnabledAfterWait();
        dynamic_properties.ValidateDynamicText();
        dynamic_properties.ValidateVisibleAfterButton();
      })
})