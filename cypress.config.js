const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const { faker } = require('@faker-js/faker'); // 1. Importamos o Faker
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      // 2. Definimos nossas tasks aqui, dentro do setupNodeEvents
      on('task', {
        // Criamos uma task chamada 'generateUser'
        generateUser() {
          // O Faker não tem um gerador de CPF nativo, então criamos uma função simples para isso
          const generateCpf = () => {
            let cpf = '';
            for (let i = 0; i < 11; i++) {
              cpf += Math.floor(Math.random() * 10);
            }
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

            // Alternativa com slice (também funciona e é bem legível):
            // return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
          };

          // A task retorna um objeto com todos os dados gerados
          return {
            nome: faker.name.fullName(),
            email: faker.internet.email().toLowerCase(),
            cpf: generateCpf(),
          };
        },
      });
      
      // Sem usar o Módulo File System do Node.js que algumas ias mandam.
      const version = config.env.version || 'qa'

      config.env = require(`./cypress/config/${version}.json`);

      config.baseUrl = config.env.baseUrl;

      config.browserUrl = config.env.browserUrl;

      return config;
    }
  },
});