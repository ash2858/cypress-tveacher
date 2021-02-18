import { railsActiveStorageBlobsPath, explorePath } from "../../support/utils";

describe("Check logo", () => {
  it("should have an image as a logo", () => {
    cy.visit(explorePath);

    cy.get("img.h-12")
      .should("have.attr", "src")
      .should("include", railsActiveStorageBlobsPath);

    // A conditional needs to be added here to handle the case of no image and just the site title coming up
  });

  it("should redirect to explore when clicked", () => {
    cy.visit(explorePath);

    cy.get("img.h-12").click()

    cy.url().should("include", explorePath)
  });
});
