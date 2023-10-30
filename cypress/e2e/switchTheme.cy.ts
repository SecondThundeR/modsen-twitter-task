describe("Theme switch module", () => {
  let currentTheme: string;

  before(() => {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  it("Inits with correct theme", () => {
    cy.visit("/");
    cy.window()
      .its("store")
      .invoke("getState")
      .its("theme.currentTheme")
      .should("equal", currentTheme);
  });

  it("Changes theme", () => {
    cy.visit("/login");

    cy.fixture("testuser").then(
      (testUserData: { email: string; password: string }) => {
        cy.get("#email").type(testUserData.email);
        cy.get("#password").type(testUserData.password);
        cy.get('[data-cy="button"]').contains("Log in").click();
      },
    );

    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    const prevTheme = nextTheme === "dark" ? "light" : "dark";

    cy.window()
      .its("store")
      .invoke("getState")
      .its("theme.currentTheme")
      .should("equal", currentTheme);

    cy.get('[data-cy="toggle"]').click({ force: true });

    cy.window()
      .its("store")
      .invoke("getState")
      .its("theme.currentTheme")
      .should("equal", nextTheme);

    cy.get('[data-cy="toggle"]').click({ force: true });

    cy.window()
      .its("store")
      .invoke("getState")
      .its("theme.currentTheme")
      .should("equal", prevTheme);
  });
});
