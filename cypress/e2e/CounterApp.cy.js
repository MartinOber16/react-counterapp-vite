describe("Counter App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("frontpage can be opened", () => {
    cy.contains("CounterApp");
  });

  it("debe incrementar con el boton +1", () => {
    cy.contains("+1").click();
  });

  it("debe decrementar con el boton -1", () => {
    cy.contains("-1").click();
  });

  it("debe funcionar el boton reset", () => {
    cy.contains("+1").click();
    cy.contains("+1").click();
    cy.contains("+1").click();
    cy.get("[data-test-id='btn-reset']").click();
  });
});
