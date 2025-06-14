/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("eu acesso a página de solicitação de crédito", () => {
    cy.visit('/')
})

When("eu preencho todos os campos obrigatórios com dados válidos", () => {
    cy.get('#nome').type('Anjo')
    cy.get('#email').type('a@a.com')
    cy.get('#renda').type('2000')
    cy.get('#cpf').type('123.456.789-01')
    cy.get('#credito').type('1000')
})

And("eu clico em Solicitar Crédito", () => {
    cy.get('[type="submit"]').click()
})

And("alterar o valor da renda para 3000", () => {
    cy.fixture('solicitacaoCredito').then((dados) => {
        cy.get('#renda').clear().type(dados.usuarioAprovado.renda)
    })
})

And("alterar o valor da renda para 1000", () => {
    cy.get('#renda').clear().type('1000')
})

And("alterar o valor da renda para {string}", (valor) => {
    cy.get('#renda').clear().type(valor)
})

Then("o sistema irá informar que houve uma solicitação", () => {
    cy.get('#result').should('be.visible')
})

Then("o sistema irá informar que a solicitação foi APROVADA", () => {
    cy.get('#result').should('be.visible').should('contain', "APROVADA")
})

Then("o sistema irá informar que a solicitação foi REPROVADA", () => {
    cy.get('#result').should('be.visible').should('contain', "REPROVADA")
})

Then("o sistema irá informar que a solicitação foi {string}", (status) => {
    cy.get('#result').should('be.visible').should('contain', status)
})

// ESTE É O NOVO STEP DEFINITION QUE USA FAKER
When(
  "eu preencho o formulário com dados aleatórios de cliente e uma renda de {string} e um crédito de {string}",
  (renda, credito) => {
    // 1. Chamamos a task 'generateUser' que definimos no cypress.config.js
    cy.task('generateUser').then((user) => {
      // 2. O .then() nos dá acesso ao objeto 'user' retornado pela task
      cy.log(`Usuário Gerado: ${user.nome} | ${user.email} | ${user.cpf}`);

      // 3. Usamos os dados do objeto 'user' e os parâmetros do step para preencher o formulário
      cy.get('#nome').type(user.nome);
      cy.get('#email').type(user.email);
      cy.get('#cpf').type(user.cpf);
      cy.get('#renda').type(renda);
      cy.get('#credito').type(credito);
    });
  }
);