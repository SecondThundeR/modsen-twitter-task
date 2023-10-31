import { faker } from "@faker-js/faker";

const randomTweetTest = faker.lorem.words(3);

describe("Tweet posting module", () => {
  it("Posts new tweet", () => {
    cy.visit("/login");

    cy.fixture("testuser").then(
      (testUserData: { email: string; password: string }) => {
        cy.get("#email").type(testUserData.email);
        cy.get("#password").type(testUserData.password);
        cy.get('[data-cy="button"]').contains("Log in").click();
      },
    );

    cy.get("#tweetComposer").type(randomTweetTest);
    cy.get("[type='submit']").contains("Tweet").click();
    cy.get("[data-cy='text']").contains(randomTweetTest);
  });
});
