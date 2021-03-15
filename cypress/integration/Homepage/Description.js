import { userLogin, studentEmail, explorePath } from "../../support/utils";

// Cypress.SelectorPlayground.defaults({
//   selectorPriority: ["id", "class", "attributes"],
// });

describe("Search for a course", () => {
  it("searches for a course", () => {
    userLogin(studentEmail);
    cy.visit(explorePath);

    cy.get(".col-span-12 > .font-display").contains("Adarsh Enterprises", {
      matchCase: false,
    });

    cy.get(".col-span-12 > .text-xl").contains(
      "It is my personal industry to get hold of entrepreneurial etiquettes. It is my personal industry to get hold of entrepreneurial etiquettes. It is my personal industry to get hold of entrepreneurial etiquettes."
    );

    cy.contains("About Us").scrollIntoView().wait(500);

    cy.get(
      '[data-react-class="Homepage/Homepage"] > :nth-child(1) > :nth-child(3)'
    ).contains(
      "A lot of work is needed to establish a renowned enterprise. This is just the beginning of the end."
    );

    cy.get(
      '[data-react-class="Homepage/Homepage"] > :nth-child(1) > :nth-child(3)'
    ).contains(
      "It is my personal industry to get hold of entrepreneurial etiquettes. It is my personal industry to get hold of entrepreneurial etiquettes. It is my personal industry to get hold of entrepreneurial etiquettes."
    );
  });
});
