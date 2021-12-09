describe("Appointments", () => {
  
beforeEach(() => {
  cy.request("GET","/api/debug/reset")
  cy.visit("/");
  cy.contains("Monday")
})


  it("should book and interview", () => {
    //1 visits the root of our web server
    // cy.visit("/");
    
    //2 Clicks the "Add" button in the second appointment
    cy.get('[alt=Add]')
      .first()
      .click();
    //3 Enters their name\
    cy.get('[data-testid=student-name-input').type('Lydia Miller-Jones');
    //4 Chooses an interviewer
    cy.get('[alt="Sylvia Palmer"]').click();
    //5 Clicks the save button
    cy.contains('Save').click();
    //6 Sees the booked appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit and interview", () => {
    //edit existing app booked for "Archie Cohen"
    //reset the database
    //1 visits the root of our web server
    cy.get('[alt=Edit]')
    .first()
    .click({force:true});
    //2 clicks the edit button for the existing appointment
    cy.get('[data-testid=student-name-input').clear().type("Lydia Miller-Jones");
    //3 changes the name and interviewer
    cy.get('[alt="Tori Malcolm"]').click();
    //4 Clicks the save button
    cy.contains("Save").click();
    //5 seees the edit to the appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel and interview", () => {
    //1 reset the database
    //cy.visit("/api/debug/reset") 
    //2 visit the root of our web server
    //3 Clicks the delete button for the existing appointment
    cy.get('[alt=Delete]').first().click({force:true});
    //4 Clicks the confirm button
    cy.contains("Confirm").click();
    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");
    //5 Sees that the appointment slot is empty
    cy.contains(".appointment__card--show", "Archie Cohen")
    .should("not.exist");
  });

})