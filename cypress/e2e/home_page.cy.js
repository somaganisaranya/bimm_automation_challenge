import { home_page } from "../support/page_objects/home_page";

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Home Page', () => {
    home_page.ValidateTitleOfHomePage();
    home_page.ValidateLengthOfCategoryCards();
  });

});