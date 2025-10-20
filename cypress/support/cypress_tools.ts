function goToHome() {
    cy.visit("/");
}

function onHomeSearchFor(term: string) {
    cy.get("#search-term").type(term);
    cy.get("#search-button").click();
    // cy.get("button[type=submit]").click();
}

function assertResultTextContains(result: string) {
    cy.get("#result-text").should("contain.value", result);
}

export { goToHome, onHomeSearchFor, assertResultTextContains };
