import { home_page } from "../support/page_objects/home_page";
import { windowAlert } from "../support/page_objects/alerts_page";

describe('Alerts, Windows and Frames', () => {
  beforeEach(() => {
    cy.visit('/');
    home_page.NavigateToAlertsFramesWindows();
    windowAlert.navigateToAlerts();
  })
  it('Handling alert box', () => {
    windowAlert.clickOnAlertButton();
    windowAlert.validateTextOnAlertButton();

    // Wait for the confirm box to appear and accept it
   
    cy.get('#confirmButton').click();

    // Wait for the confirm box to appear and dismiss it
    
  });

  it('Handling Timer alert button', ()=>{
    windowAlert.clickOnTimePopup();
    cy.wait(6000);
    windowAlert.validateTimePopup();
  })

  it('Handling Confirm popup - Ok', () => {
    windowAlert.clickOnConfirmButton();
    windowAlert. validateConfirmPopup();
  })

  it('Handling Confirm popup - Cancel', () => {
    windowAlert.clickOnConfirmButton();
    windowAlert.validateCancelPopup();
  })

  it('Handling Prompt Box - Ok',()=>{
    windowAlert.clickAndValidatePromptBox();
  });

  it('Handling Prompt Box - Cancel',()=>{
    windowAlert.cancellingPromptBox();
  });
})