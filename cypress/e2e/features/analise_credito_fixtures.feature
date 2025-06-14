# language: pt

Funcionalidade: Análise de Crédito Utilizando Dados de Fixtures

  Como um analista de crédito,
  Eu quero validar os resultados da análise
  Usando diferentes perfis de clientes carregados de arquivos de dados.

  Background:
    Dado que eu estou na página de análise de crédito

  Cenário: Aprovação de crédito para cliente com perfil válido
    Quando eu preencho o formulário com os dados do "usuario_aprovado"
    And eu clico no botão "Solicitar Crédito"
    Então o sistema irá informar que a solicitação foi "APROVADA"

  Cenário: Reprovação de crédito para cliente com renda insuficiente
    Quando eu preencho o formulário com os dados do "usuario_reprovado"
    And eu clico no botão "Solicitar Crédito"
    Então o sistema irá informar que a solicitação foi "REPROVADA"

  Cenário: Aprovação de crédito usando o perfil 'usuarioAprovado'
    Quando eu preencho o formulário com o perfil "usuarioAprovado" do arquivo "solicitacaoCredito"
    And eu clico no botão "Analisar Crédito"
    Então o sistema deve refletir o status da solicitação

  Cenário: Reprovação de crédito usando o perfil 'usuarioReprovado'
    Quando eu preencho o formulário com o perfil "usuarioReprovado" do arquivo "solicitacaoCredito"
    And eu clico no botão "Analisar Crédito"
    Então o sistema deve refletir o status da solicitação