# language: pt

Funcionalidade: Análise de Crédito Simplificada
  Como um analista de crédito,
  Eu quero validar a aprovação de crédito baseada na renda do cliente
  E no valor solicitado.
# usaer o no aprovacao_credito
  
  Contexto:
    Dado que eu estou na página de análise de crédito

  Esquema do Cenário: Análise de crédito para diferentes cenários financeiros
    Quando um cliente solicita um crédito de <ValorCredito> com uma renda mensal de <Renda>
    E eu clico no botão "Solicitar Crédito"
    Então o sistema irá informar que a solicitação foi <Resultado>

    Exemplos:
      | Descrição                 | Renda  | ValorCredito | Resultado |
      | Renda alta, crédito baixo   | "800000" | "3000"         | "APROVADA"  |
      | Renda média, crédito médio  | "500000" | "10000"        | "APROVADA"  |
      | Renda baixa, crédito alto   | "1000" | "15000"        | "REPROVADA"    |
      | Renda incompatível        | "1999" | "25000"        | "REPROVADA"    |

 
    Esquema do Cenário: Validação de campo obrigatório
        Dado que eu preencho todos os campos exceto o campo <CampoFaltante>
        Quando eu clico no botão "Solicitar Crédito"
        Então o sistema não irá retornar mensagem de erro

        Exemplos:
            | CampoFaltante |
            | "Nome"          |
            | "Email"         |
            | "Renda Mensal"  |
            | "CPF"           |
            | "ValorCredito"  |

    