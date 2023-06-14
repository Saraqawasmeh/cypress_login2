



describe("this is a test",()=>{
    it("is the test",()=>{
       
        cy.visit("www.facebook.com/login");
        cy.get('[data-testid="royal_email"]').type("0786417104");
        cy.get('[data-testid="royal_pass"]').type("sarasara2041998");
        cy.wait(7000);
        cy.get('[data-testid="royal_login_button"]').click();
        
    })
})