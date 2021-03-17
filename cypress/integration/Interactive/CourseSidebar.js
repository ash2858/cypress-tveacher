import { userLogin, studentEmail, explorePath } from "../../support/utils";

describe("Verify the chapters on the course overview page curriculum", () => {
  before(() => {
    userLogin(studentEmail);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("_cloudyuga_session");
  });

  it("visits the interactive page of the test cypress 3 course and verifies the two sections", () => {
    cy.visit("/courses/test-cypress-3/interactive");
    cy.get(":nth-child(1) > .section-title > span").contains(
      "Two Chapters Section"
    );
    cy.get(":nth-child(2) > .section-title > span").contains(
      "Four Chapters Section"
    );
  });

  it("checks for the two chapters in the first section", () => {
    cy.get(":nth-child(1) > :nth-child(1) > .cursor-pointer > span").contains(
      "Enabled Preview and Published Chapter"
    );
    cy.get(":nth-child(1) > :nth-child(2) > .cursor-pointer > span").contains(
      "Enabled Preview and Published Chapter"
    );
  });

  it("checks for the chapters and lessons in the second section", () => {
    cy.contains("Four Chapters Section").scrollIntoView().wait(500).click();
    cy.get(
      ":nth-child(2) > .bg-white > :nth-child(1) > :nth-child(1) > .pl-4 > span"
    ).contains("Three Lessons Chapter");
    cy.get(".pl-8 > :nth-child(1) > span").contains("Published Lesson");
    cy.get(".pl-8 > :nth-child(2) > span").contains("Published Lesson");
    cy.scrollTo("bottom");
    cy.get(
      ":nth-child(2) > .bg-white > :nth-child(1) > :nth-child(2) > .cursor-pointer"
    ).contains("No Preview Published Chapter");
  });
});
