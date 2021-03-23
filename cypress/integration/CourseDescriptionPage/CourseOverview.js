import {
  userLogin,
  studentEmail,
  courseOverviewPath,
  courseSymLink,
} from "../../support/utils";

describe("Check for the Payment Card", () => {
  before(() => {
    if (cy.getCookie("_cloudyuga_session")) userLogin(studentEmail);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("_cloudyuga_session");
  });

  it("Visit the course overview page and click pay and enroll button", () => {
    cy.visit(courseOverviewPath);

    // Click on the pay and enroll button present in the payment card for an unenrolled user
    cy.contains("Pay and Enroll").scrollIntoView().wait(500).click();

    // Check whether the URL which opens up on the button click is the expected one
    cy.url().should("include", `/courses/${courseSymLink}/confirm_enrollment`);
  });
});
