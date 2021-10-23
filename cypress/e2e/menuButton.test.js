/// <reference types="Cypress" />
describe("Menu Button tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check nudel menu button for displaying one element", () => {
    cy.contains("nudel").click();
    cy.get("[data-cy=menu_items]").should("have.length", 1);
  });
});
