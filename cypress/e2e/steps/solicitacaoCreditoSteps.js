/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("eu acesso a página de solicitação de crédito", () => {
    cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
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
    cy.get('#renda').clear().type('3000')
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