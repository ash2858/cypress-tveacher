import { userLogin, studentEmail, explorePath } from "../../support/utils";

// Cypress.SelectorPlayground.defaults({
//   selectorPriority: ["id", "class", "attributes"],
// });
describe("Check for description related components on the homepage", () => {
  it("verifies the title, short and long description on the homepage", () => {
    userLogin(studentEmail);
    cy.visit(explorePath);

    // This test checks for the title
    cy.get(".col-span-12 > .font-display").contains("Adarsh Enterprises", {
      matchCase: false,
    });

    // This verifies the short description
    cy.get(".col-span-12 > .text-xl").contains(
      "It is my personal industry to get hold of entrepreneurial etiquettes. It is my personal industry to get hold of entrepreneurial etiquettes. It is my personal industry to get hold of entrepreneurial etiquettes."
    );

    cy.contains("About Us").scrollIntoView().wait(500);

    // This verifies the first paragraph on the long description
    cy.get(
      '[data-react-class="Homepage/Homepage"] > :nth-child(1) > :nth-child(3)'
    ).contains(
      "A lot of work is needed to establish a renowned enterprise. This is just the beginning of the end."
    );

    // This verifies the second paragraph on the long description
    cy.get(
      '[data-react-class="Homepage/Homepage"] > :nth-child(1) > :nth-child(3)'
    ).contains(
      "It is my personal industry to get hold of entrepreneurial etiquettes. It is my personal industry to get hold of entrepreneurial etiquettes. It is my personal industry to get hold of entrepreneurial etiquettes."
    );
  });
});
