// cypress/e2e/step_definitions/aprovacao_credito.steps.js

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Este step continua o mesmo, se já existir
Given("que eu estou na página de análise de crédito", () => {
  cy.visit("/"); // Usa a baseUrl configurada no cypress.config.js
});


// ESTE É O NOVO STEP DEFINITION
// Ele captura cada valor entre aspas como um argumento da função
When(
  "eu preencho os dados do cliente com nome {string}, email {string}, renda mensal de {string}, CPF {string} e valor de crédito de {string}",
  (nome, email, renda, cpf, credito) => {
    // Usamos os seletores por ID fornecidos e os parâmetros capturados
    cy.get('#nome').type(nome);
    cy.get('#email').type(email);
    cy.get('#renda').type(renda);
    cy.get('#cpf').type(cpf);
    cy.get('#credito').type(credito);
  }
);


// Este step pode ser reutilizado, se já existir
When("eu clico no botão {string}", (buttonText) => {
  cy.contains(buttonText).click();
});
