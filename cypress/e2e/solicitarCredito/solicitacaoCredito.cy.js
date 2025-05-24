/// <reference types="cypress" />

context('Testes de solicitação de crédito', () => {
    beforeEach(() => {
      cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
    })
    
    it('Validar campos obrigatórios', () => {
        cy.get('#nome').type('Anjo')
        cy.get('#email').type('a@a.com')
        cy.get('#renda').type('2000')
        cy.get('#cpf').type('123.456.789-01')
        cy.get('#credito').type('1000')
        cy.get('[type="submit"]').click()
        cy.get('#result').should('be.visible')

    });
  
  })
  