import { home_page } from "../support/page_objects/home_page";
import { buttons } from "../support/page_objects/buttons";

describe('Buttons', ()=>{
        beforeEach(() => {
          cy.visit('/')
          home_page.NavigateToElements();
    });

     /**
     * GIVEN  different types of buttons
     * WHEN selecting Dynamic button
     * THEN validate dynamic button message
     * WHEN selecting button by double clicking
     * THEN validate double click message
     * WHEN selecting right click button
     * THEN validate right click button message
     */
    it('Validate Buttons',()=>{
        buttons.NavigateToButtons();
        buttons.ClickOnDynamicButton();
        buttons.ValidateDynamicButtonMessage();
        buttons.ClickOnDoubleClickButton();
        buttons.ValidateDoubleClickMessage();
        buttons.ClickOnRightClickButton();
        buttons.ValidateRightClickMessage();
    })
})