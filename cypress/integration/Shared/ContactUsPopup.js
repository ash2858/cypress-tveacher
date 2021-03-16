import { userLogin, studentEmail, explorePath } from "../../support/utils";

describe("Check for the contact us form on the homepage", () => {
  it("fills up the contact us form", () => {
    userLogin(studentEmail);
    cy.visit(explorePath);

    cy.get(".right-2 > .h-10").click();
    cy.get("#name").clear();
    cy.get("#email").clear();
    cy.get("#name").type("Cypress");
    cy.get("#email").type("test@cypress.com");
    cy.get("#message").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis eget enim at lacinia. Mauris tincidunt odio eu justo rhoncus euismod."
    );
    cy.get("form > span > .cursor-pointer").click();
    cy.contains("Message submitted");
  });
});
