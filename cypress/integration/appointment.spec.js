describe("Appointments", () => {
  beforeEach(() => {
   cy.request("GET", "/api/debug/reset");
 
   cy.visit("/");
 
   cy.contains("Monday");
  });
 
  it("should book an interview", () => {
    cy.get("[alt=Add]").first().click();
  
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
    cy.get('[alt="Sylvia Palmer"]').click();
  
    cy.contains("Save").click();
  
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("Should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({force: true});

    cy.get("[data-testid=student-name-input]").clear().type("Cassilda of Carcosa");

    cy.get("[alt='Tori Malcolm']").click();

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Cassilda of Carcosa");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });
 });