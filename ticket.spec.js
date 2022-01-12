describe("Tickets", () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

     it("fills all the text input fields", () => {
        const firstName = "Leticia";
        const lastName = "Silva"
        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("leticiasilva@gmail.com");
        cy.get("#requests").type("Vegetarian")
        cy.get("#signature").type(`${firstName} ${lastName}`);

     })

     it("select two tickets", () => {
         cy.get("#ticket-quantity").select("2");
     });

     it("select 'vip' Ticket type", () => {
         cy.get('#vip').check();
     })

     it("selects 'social media' checkbox ", () => {
        cy.get('#social-media').check();
    })

    it("selects 'friend', and 'publication, then uncheck 'friend'", () => {
        cy.get('#friend').check();
        cy.get('#publication').check();
        cy.get('#friend').uncheck();
    })


    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    it.only("alerts on invalid email", () => {
        cy.get("#email")
        .as("email")
        .type("leticiasilva2gmail.com");

        cy.get("#email.invalid").should("exist");

        cy.get("@email")
          .clear()
          .type("leticiasilva@gmail.com");

        cy.get("#email.invalid").should("not.exist");
    })

    it("fills mandatory fields using support command", () =>{
        const customer = {
            firstName: "Maria",
            lastName: "Silva",
            email: "mariasilva@exemple.com"
        };

    cy.fillMandatoryFielda(customer);

    });
});


// npx cypress open
