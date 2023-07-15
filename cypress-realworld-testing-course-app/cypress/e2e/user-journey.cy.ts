describe("User Journey", () => {
  it("a user can find a course on the home page and complete the courses lessons", () => {
    cy.visit("http://localhost:3000")
    cy.get("div", { log: false }).should("be.visible")

    cy.getByData("course-0").find("a").contains("Get started").click()
    cy.location("pathname").should("eq", "/testing-your-first-application")
    // go to lesson - "Start Course"
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )
    // next lesson
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    // next lesson
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    // last lesson
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    // redirected to home page
    cy.location("pathname").should("eq", "/")
    cy.getByData("hero-heading").contains(
      "Testing Next.js Applications with Cypress"
    )
  })
})
