describe("hame page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.get("h1", { log: false }).should("be.visible")
  })

  it("the h1 contains the correct text", () => {
    cy.get(`[data-test="hero-heading"]`).contains(
      "Testing Next.js Applications with Cypress"
    )
  })

  it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})
