const { Patients, Surgeries } = require("../models");

const getAllPatientsAndSurgeries = async () => {
  const allPatientsAndSurgeries = await Patients.findAll({
    include: { model: Surgeries, as: "surgeries", through: { attributes: [] } },
  });

  return allPatientsAndSurgeries;
};

module.exports = {
  getAllPatientsAndSurgeries,
};
