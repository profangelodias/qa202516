# language: pt

Funcionalidade: Análise de Crédito de Clientes
    Como um analista de crédito,
    Eu quero analisar as informações dos clientes
    Para decidir se o crédito será aprovado ou negado.

Cenário: Aprovação de crédito para cliente com dados específicos
    Dado que eu estou na página de análise de crédito
    Quando eu preencho os dados do cliente com nome "Cliente Teste", email "cliente.teste@email.com", renda mensal de "800000", CPF "123.456.789-01" e valor de crédito de "3000"
    E eu clico no botão "Solicitar Crédito"
    Então o sistema irá informar que a solicitação foi APROVADA