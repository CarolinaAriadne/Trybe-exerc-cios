// githubApi.test.js

const { TestWatcher } = require("@jest/core");
const fetch = require("node-fetch");

const getRepos = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name));

// implemente seus testes aqui

//1 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

describe("Verifica repositórios", () => {
  test("Verifca se repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator estão na lista", async () => {
    const resultado = await getRepos(
      "https://api.github.com/orgs/tryber/repos"
    );
    expect(resultado).toContain("sd-01-week4-5-project-todo-list");
    expect(resultado).toContain("sd-01-week4-5-project-meme-generator");
  });
});
