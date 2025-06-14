import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//COM AppAction
import analiseCreditoActions from '../../support/app_actions/AnaliseCreditoActions';
import analiseCreditoPage from '../../support/pages/AnaliseCreditoPage'; // Ainda pode ser útil para o 'Então'


// Este step continua o mesmo
Given("que eu estou na página de análise de crédito", () => {
  cy.visit("/"); // Usa a baseUrl configurada no cypress.config.js
});


// ESTE É O NOVO STEP DEFINITION
// Ele captura a Renda e o Valor do Crédito da tabela de Exemplos.
When(
  "um cliente solicita um crédito de {string} com uma renda mensal de {string}",
  (valorCredito, renda) => {
    // Usando os dados fixos e seletores por ID que você forneceu
    cy.get('#nome').type('Cliente Teste');
    cy.get('#email').type('cliente.teste@email.com');
    cy.get('#cpf').type('123.456.789-01');

    // Usando os dados da tabela de Exemplos para os campos financeiros
    cy.get('#renda').type(renda);
    cy.get('#credito').type(valorCredito);
  }
);

Given("que eu preencho todos os campos exceto o campo {string}", (campoFaltante) => {
  // Criamos um objeto com um conjunto completo de dados válidos,
  // conforme você especificou.
  const dadosCompletos = {
    "Nome": 'Cliente Teste',
    "Email": 'cliente.teste@email.com',
    "Renda Mensal": '800000',
    "CPF": '123.456.789-01',
    "ValorCredito": '3000'
  };

  // Iteramos sobre as chaves do nosso objeto de dados
  Object.keys(dadosCompletos).forEach(campo => {
    // A condição principal: só preenchemos o campo se o nome dele
    // for DIFERENTE do campo que queremos deixar em branco.
    if (campo !== campoFaltante) {
      const valor = dadosCompletos[campo];
      
      // Usamos um switch para encontrar o seletor por ID correto
      // e preencher com o valor correspondente.
      switch (campo) {
        case 'Nome':
          cy.get('#nome').type(valor);
          break;
        case 'Email':
          cy.get('#email').type(valor);
          break;
        case 'Renda Mensal':
          cy.get('#renda').type(valor);
          break;
        case 'CPF':
          cy.get('#cpf').type(valor);
          break;
        case 'ValorCredito':
          cy.get('#credito').type(valor);
          break;
      }
    }
  });
});


Then("o sistema não irá retornar mensagem de erro", () => {
    cy.get('#result').should('not.be.visible')
})


// COM AppAction
When("um cliente solicita um crédito de {string} com uma renda mensal de {string}", (valorCredito, renda) => {
  // O step apenas monta um objeto com os dados variáveis...
  const dadosFinanceiros = {
    credito: valorCredito,
    renda: renda
  };
  // ...e delega TODA a lógica de preenchimento para a App Action.
  analiseCreditoActions.preencherFormularioComDadosPadrao(dadosFinanceiros);
});

When("eu clico no botão {string}", (buttonText) => {
  // Delega a ação de clique para a App Action correspondente
  analiseCreditoActions.clicarSolicitarCredito();
});

Then("o sistema irá informar que a solicitação foi {string}", (resultado) => {
  // A asserção continua no step, mas poderia usar seletores do POM
  cy.get(analiseCreditoPage.ELEMENTS.mensagemResultado)
    .should('be.visible')
    .and('contain.text', resultado);
});

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