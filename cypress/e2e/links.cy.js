import { home_page } from "../support/page_objects/home_page";
import { links } from "../support/page_objects/links";

describe('Links Page',()=>{
    beforeEach(() => {
        cy.visit('/')
        home_page.NavigateToElements();
      })

      it('Validate all links in the page', ()=>{
        links.NavigateToLinks();
        links.NavigateToHomeLink();
        links.ValidateHomeLink();
        links.NavigateBack();
        links.NavigateToDynamicLink();
        links.ValidateDynamicLink();
        
      })
})