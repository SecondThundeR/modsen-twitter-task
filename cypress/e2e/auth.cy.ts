import { faker } from "@faker-js/faker";

const testEmail = faker.internet.email();
const testPassword = faker.internet.password();
const testName = faker.internet.userName();
const testPhone = faker.phone.number("+1###########");

describe("Authentication module E2E test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Registers new user and logs out", () => {
    cy.get('[data-cy="button"]').contains("Sign up with email").click();
    cy.get("#name").type(testName);
    cy.get("#phoneNumber").type(testPhone);
    cy.get("#email").type(testEmail);
    cy.get("#password").type(testPassword);
    cy.get("#month").select("month-1");
    cy.get("#day").select("day-1");
    cy.get("#year").select("year-2020");
    cy.get('[data-cy="button"]').contains("Next").click();
    cy.get('[data-cy="button"]').contains("Log out").click();
  });

  it("Login registered user and logs out", () => {
    cy.get('[data-cy="nav-link"]').contains("Log in").click();
    cy.get("#email").type(testEmail);
    cy.get("#password").type(testPassword);
    cy.get('[data-cy="button"]').contains("Log in").click();
    cy.get('[data-cy="button"]').contains("Log out").click();
  });
});
