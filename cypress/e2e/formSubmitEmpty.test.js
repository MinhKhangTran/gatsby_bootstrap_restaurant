/// <reference types="Cypress" />
describe("Form submit with empty inputs test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check if feedback appears when submitting empty inputs", () => {
    cy.contains("Abschicken").click();
    cy.contains("Bitte geben Sie eine Nachricht ein").should("be.visible");
  });
});
