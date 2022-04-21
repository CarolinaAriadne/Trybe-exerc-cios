const { expect } = require("chai");
// const { describe } = require("mocha"); ?

const returnString = require("./returnString");

describe("Função que recebe número como parâmetro e retorna uma string como resposta", () => {
  describe("Número > que zero", () => {
    describe("Retorno da resposta", () => {
      it("string", () => {
        const result = returnString(3);
        expect(result).to.be.a("string");
      });
      it("Número do parâmetro da função é maior que zero, retorna a string 'positivo' ", () => {
        const result = returnString(3);
        expect(result).to.be.equals("positivo");
      });
    });
  });
  describe("Número < que zero", () => {
    describe("Retorno da resposta", () => {
      it("string", () => {
        const result = returnString(-6);
        expect(result).to.be.a("string");
      });
      it("Número do parâmetro da função é menor que zero, retorna a string 'negativo' ", () => {
        const result = returnString(-6);
        expect(result).to.be.equals("negativo");
      });
    });
  });
  describe("Número === zero", () => {
    describe("Retorno da resposta", () => {
      it("string", () => {
        const result = returnString(0);
        expect(result).to.be.a("string");
      });
      it("Número do parâmetro da função é zero, retorna a string 'neutro' ", () => {
        const result = returnString(0);
        expect(result).to.be.equals("neutro");
      });
    });
  });
  describe("Parâmetro da função não é do type number", () => {
    describe("Retorno da resposta", () => {
      it("string", () => {
        const result = returnString("string");
        expect(result).to.be.a("string"); 
      });
      it("O parâmetro da função precisa ser d type number", () => {
        const result = returnString("kakaka");
        expect(result).to.be.equals("o parâmetro precisa ser do tipo number"); 
      });
    });
  });
});

// Exercício 1  : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":

// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.
