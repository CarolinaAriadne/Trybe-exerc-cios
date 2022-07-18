creatDadosCep = require("../models/cepModel");
const joi = require("joi");

const justProxy = () => {
  const cep = creatDados.creatDadosCep();

  return cep;
};

const shemaJoiCepRequired = joi.object({
  cep: joi.string().required().messages({
    "any.required": "Bad Request",
  }),
});

const verifyCepRequired = (cep) => {
  const { error } = shemaJoiCepRequired.validate({ cep });

  if (error) {
    throw { code: 400, message: error.message };
  }
};

const creatCep = ({ cep, logradouro, bairro, localidade, uf }) => {
  verifyCepRequired(cep);
};

module.exports = {
  justProxy,
  verifyCepRequired,
  creatCep,
};
