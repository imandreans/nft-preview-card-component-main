import "@percy/cypress";

describe("Integration test with visual testing", function () {
  it("Loads the homepage", function () {
    // Load the page or perform any other interactions with the app.
    cy.visit("http://127.0.0.1:5500/index.html");
    // Take a snapshot for visual diffing
    cy.percySnapshot("homepage");
  });
});
