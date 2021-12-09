describe("Appointments", () => {
  
beforeEach(() => {
  cy.request("GET","/api/debug/reset")
  cy.visit("/");
  cy.contains("Monday")
})


  it("should book and interview", () => {
    //Clicks the "Add" button in the second appointment
    cy.get('[alt=Add]')
      .first()
      .click();
    // Enters their name\
    cy.get('[data-testid=student-name-input').type('Lydia Miller-Jones');
    // Chooses an interviewer
    cy.get('[alt="Sylvia Palmer"]').click();
    // Clicks the save button
    cy.contains('Save').click();
    // Sees the booked appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit and interview", () => {
    //edit existing app booked for "Archie Cohen"
    cy.get('[alt=Edit]')
    .first()
    .click({force:true});
    // clicks the edit button for the existing appointment
    cy.get('[data-testid=student-name-input').clear().type("Lydia Miller-Jones");
    // changes the name and interviewer
    cy.get('[alt="Tori Malcolm"]').click();
    // Clicks the save button
    cy.contains("Save").click();
    // seees the edit to the appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel and interview", () => {
    // Clicks the delete button for the existing appointment
    cy.get('[alt=Delete]').first().click({force:true});
    //Clicks the confirm button
    cy.contains("Confirm").click();
    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");
    //Sees that the appointment slot is empty
    cy.contains(".appointment__card--show", "Archie Cohen")
    .should("not.exist");
  });

})