import {
  userLogin,
  studentEmail,
  explorePath,
  courseTitle,
  courseSymLink,
} from "../../support/utils";

describe("Verify the chapters on the course overview page curriculum", () => {
  before(() => {
    if (cy.getCookie("_cloudyuga_session")) userLogin(studentEmail);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("_cloudyuga_session");
  });

  it("searches for the course and clicks on the course card", () => {
    cy.visit(explorePath);

    // Find the text "All Courses" on the homepage to bring search component in view
    cy.get("#all-courses").scrollIntoView().wait(1000);

    // Type the course title (fetch from utils) in the search bar on the homepage
    cy.get("input[placeholder='Search Courses']").type(
      courseTitle.toLowerCase()
    );

    // Bring the respective course card in view on the homepage
    cy.contains(courseTitle).scrollIntoView().wait(1000).click();
  });

  it("verifies the sections present on the course overview page", () => {
    // Find the text "Course Curriculum" on the course overview page to bring curriculum component in view
    cy.contains("Course Curriculum").scrollIntoView().wait(500);

    // Check for the two sections by their respective names which need to be present
    cy.get(".course-accordion").contains("Two Chapters Section");
    cy.get(".course-accordion").contains("Four Chapters Section");
  });

  it("verifies the chapters present on the curriculum", () => {
    // Check for the visibility of two chapters in the first section
    cy.get(":nth-child(1) > a > p > .font-bold").contains(
      "Enabled Preview and Published Chapter"
    );
    cy.get(":nth-child(2) > a > p > .font-bold").contains(
      "Enabled Preview and Published Chapter"
    );

    // Close the first section accordion to hide the chapters inside it
    cy.get(".course-accordion").contains("Two Chapters Section").click();

    // Open the second section accordion to show the chapters inside it
    cy.get(".course-accordion").contains("Four Chapters Section").click();

    // Check for the visibility of the two chapters inside the second section
    cy.get(
      ":nth-child(2) > :nth-child(2) > :nth-child(1) > a > p > .font-bold"
    ).contains("Three Lessons Chapter");
    cy.get(
      ":nth-child(2) > :nth-child(2) > :nth-child(2) > a > p > .font-bold"
    ).contains("No Preview Published Chapter");
  });

  it("checks for the lock and unlocked icons", () => {
    // Compare the src attribute of the images loaded to confirm their presence
    cy.get(":nth-child(1) > a > p > .inline-block").should(
      "have.attr",
      "src",
      "/packs/images/lock_open-e0513700011dae902f73a4b60fd8ae19.svg"
    );
    cy.get(":nth-child(2) > a > p > .inline-block").should(
      "have.attr",
      "src",
      "/packs/images/icon_lock-d9561e6b1d46b93be9e68bdc5c5afb71.svg"
    );
  });

  it("clicks on a previewable chapter", () => {
    cy.contains("Three Lessons Chapter").click();
    // The interactive page should open up to confirm that the chapter opens up for an unenrolled user
    cy.url().should("include", `/courses/${courseSymLink}/interactive`);
    // Go back to the previous url i.e. course overview page using back button in the browser
    cy.go("back");
  });

  it("clicks on a locked chapter", () => {
    // Bring the course curriculum text in front of the user to interact with its nearby elements
    cy.contains("Course Curriculum").scrollIntoView().wait(500);
    // Open the respective section accordion to show the chapters inside it
    cy.contains("Four Chapters Section").click();

    cy.contains("No Preview Published Chapter").click();
    // The confirm enrollment page should open for an unenrolled user on this chapter click
    cy.url().should("include", `/courses/${courseSymLink}/confirm_enrollment`);
  });
});
