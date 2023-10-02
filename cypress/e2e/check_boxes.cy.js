import { home_page } from "../support/page_objects/home_page";
import { check_boxes } from "../support/page_objects/check_boxes";

describe("Check Boxes",()=>{
    beforeEach(() => {
        cy.visit('/')
    
      })

      /**
       * GIVEN Checkboxes page
       * WHEN Expand and Checking all checkboxes should be checked
       * THEN all checkboxes should be checked
       * WHEN Unchecked all checkboxes 
       * THEN all checkboxes should be unchecked
       * WHEN child checkboxes are checked
       * THEN Parent checkboxes should be Checked automatically
       */

     
      it('Validating all Check Boxes',()=>{
        home_page.NavigateToElements();
        check_boxes.ClickOnCheckBoxes();
        check_boxes.ValidateTitleOfCheckBoxPage();
        check_boxes.ClickOnExpandCheckBoxes();
        check_boxes.ValidateExpandedCheckBoxes();
        check_boxes.CheckAllCheckBoxes();
        check_boxes.ValidateAllCheckBoxesAreChecked();
        check_boxes.UncheckAllCheckBoxes();
        check_boxes.ValidateUncheckedCheckBoxes();
        check_boxes.ValidateUncheckedCheckBox();
        check_boxes.ClickOnNotesCheckBox();
        check_boxes.ClickOnCommandsCheckBox();
        check_boxes.ValidateDesktopCheckBoxIsChecked();
        check_boxes.ValidateResults();
        check_boxes.ClickOnDownloadsCheckBox();
        check_boxes.ValidateDownloadsIsChecked();
      })
})