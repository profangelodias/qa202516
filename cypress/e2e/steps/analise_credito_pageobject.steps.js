import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import analiseCreditoPage from '../../support/pages/AnaliseCreditoPage';

Given("que eu estou na página de análise de crédito", () => {
  cy.visit("/");
});

When("um cliente solicita um crédito de {string} com uma renda mensal de {string}", (valorCredito, renda) => {
  // O step definition chama cada método do Page Object em sequência.
  // Ele é responsável por saber a ordem e quais dados fixos usar.
  analiseCreditoPage.preencherNome('Cliente Padrão');
  analiseCreditoPage.preencherEmail('cliente.padrao@email.com');
  analiseCreditoPage.preencherCpf('111.222.333-44');

  // Usa os parâmetros do Gherkin para os campos variáveis
  analiseCreditoPage.preencherRendaMensal(renda);
  analiseCreditoPage.preencherValorCredito(valorCredito);
});

When("eu clico no botão {string}", (buttonText) => {
  // A ação de clique também usa o Page Object para encontrar o elemento
  analiseCreditoPage.clicarSolicitarCredito();
});

Then("o sistema irá informar que a solicitação foi {string}", (resultado) => {
  // A asserção usa o seletor do Page Object, mas a lógica de verificação
  // pertence ao step definition, que é o responsável por validar o estado.
  cy.get(analiseCreditoPage.ELEMENTS.mensagemResultado)
    .should('be.visible')
    .and('contain.text', resultado); // Verifica se o texto "APROVADA" ou "REPROVADA" está presente
});