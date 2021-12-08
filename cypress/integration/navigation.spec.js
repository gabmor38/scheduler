describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("should navigate to Tuesday", () => {
    cy.visit("/");

    cy.contains("[data-testid=day]", "Tuesday")
    .click()
    .should("have.class", "day-list__item--selected");
      
  });

  it("should book and interview", () => {
    //1 visits the root of our web server
    cy.visit("/")
    //2 Clicks the "Add" button in the second appointment
    //3 Enters their name
    //4 Chooses an interviewer
    //5 Clicks the save button
    //6 Sees the booked appointment
  });

  it("should edit and interview", () => {
    //edit existing app booked for "Archie Cohen"
    //reset the database


    //1 visits the root of our web server
    cy.visit("/")
    //2 clicks the edit button for the existing appointment
    //3 changes the name and interviewer
    //4 Clicks the save button
    //5 seees the edit to the appointment
  });

  it("should cancel and interview", () => {
    //1 reset the database
    //cy.visit("/api/debug/reset") 
    //2 visit the root of our web server
    //3 Clicks the delete button for the existing appointment
    //4 Clicks the confirm button
    //5 Sees that the appointment slot is empty
  })
});


