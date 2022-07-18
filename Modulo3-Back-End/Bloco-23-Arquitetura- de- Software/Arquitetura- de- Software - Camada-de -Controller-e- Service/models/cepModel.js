const connection = require("./connection");

const creatDadosCep = async (cep, logradouro, bairro, localidade, uf) => {
  await connection.execute(
    `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)`,
    (cep, logradouro, bairro, localidade, uf)
  );

  return (cep, logradouro, bairro, localidade, uf);
};

module.exports = creatDadosCep;
