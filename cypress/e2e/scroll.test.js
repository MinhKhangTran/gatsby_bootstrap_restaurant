/// <reference types="Cypress" />
describe("Scroll tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check random nav-links for scrollview", () => {
    cy.contains("menü").scrollIntoView();
  });
});
