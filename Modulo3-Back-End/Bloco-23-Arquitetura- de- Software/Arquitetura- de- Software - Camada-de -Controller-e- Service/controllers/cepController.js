const cepService = require("../services/cepService");

const cepDados = async (req, res, next) => {
  try {
    await cepService.creatCep(req.body);
    return res.status(200).json({ message: "Cep criado com sucesso" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  cepDados,
};
