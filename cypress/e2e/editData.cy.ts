import { faker } from "@faker-js/faker";

const newName = faker.internet.userName();
const newDesc = faker.person.bio();
const newPhone = faker.phone.number("+1###########");
const newMonth = faker.number.int({ min: 5, max: 10 });
const newDay = faker.number.int({ min: 10, max: 15 });
const newYear = faker.number.int({ min: 2000, max: 2005 });

describe("Edit user data module", () => {
  it("Updates user's data", () => {
    cy.visit("/login");

    cy.fixture("testuser").then(
      (testUserData: { email: string; password: string }) => {
        cy.get("#email").type(testUserData.email);
        cy.get("#password").type(testUserData.password);
        cy.get('[data-cy="button"]').contains("Log in").click();
      },
    );

    cy.get("button").contains("Profile").click();
    cy.get("[data-cy='button']").contains("Edit profile").click();
    cy.get("#name").clear().type(newName);
    cy.get("#desc").clear().type(newDesc);
    cy.get("#phoneNumber").clear().type(newPhone);
    cy.get("#month").select(`month-${newMonth}`);
    cy.get("#day").select(`day-${newDay}`);
    cy.get("#year").select(`year-${newYear}`);
    cy.get("[type='submit']").contains("Next").click();

    cy.get('[data-cy="modal-container"]').should("not.exist", {
      timeout: 5000,
    });

    cy.get("[data-cy='button']").contains("Edit profile").click();
    cy.get("#name").should("have.value", newName);
    cy.get("#desc").should("have.value", newDesc);
    cy.get("#phoneNumber").should("have.value", newPhone);
    cy.get("#month").should("have.value", `month-${newMonth}`);
    cy.get("#day").should("have.value", `day-${newDay}`);
    cy.get("#year").should("have.value", `year-${newYear}`);
  });
});
