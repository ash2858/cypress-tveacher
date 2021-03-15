import { userLogin, studentEmail, explorePath } from "../../support/utils";

describe("Testing site quiz button on the homepage", () => {
  it("clicks on the site quiz button", () => {
    userLogin(studentEmail);

    cy.visit("/explore");
    cy.contains("Quizzes").scrollIntoView().wait(1000);

    cy.get('.quizzes > .slick-slider > .slick-next').click()
    cy.get('.slick-current > :nth-child(1) > .quiz-card').contains("Take Quiz").click();

    cy.url().should("include", "/site_quizzes/f-df267449-ef33-4a55-8bd9-e51fdf19cf70");
  });
});
