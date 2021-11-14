const { test, expect } = require("@jest/globals");
const sum = require("./sum.js");

describe("Testando retornos da função", () => {
  test("Verificando se o retorno de 5 e 4 é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("Verificando se o retorno de 0 e 0 é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Verificando se a função retorna erro com os parâmetros 4 e "5"', () => {
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });

  test('Verificando se a função retorna erro com os parâmetros 4 e "5"', () => {
    expect(() => sum(4, "5")).toThrow("parameters must be numbers");
  }); 

});
