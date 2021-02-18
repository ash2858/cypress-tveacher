import { loginPath, testUserEmail, testUserPassword, successLoginMessage} from "../../support/utils";

describe("Validate Login", () => {
  it("allows a successful login", () => {
    cy.visit(loginPath);

    cy.get("fill_email").type(testUserEmail)
    cy.get("fill_password").type(testUserPassword)
    cy.get("fill_submit").click()

    cy.contains(successLoginMessage)
  })
})
