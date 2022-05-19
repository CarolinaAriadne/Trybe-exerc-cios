const { Patients, Plans } = require('../models')

const getAllPatientsAndPlans = async () => {
    const allPatientsAndPlans = await Patients.findAll({ include: { model: Plans, as: 'plan'}});

    return allPatientsAndPlans;
}


module.exports = {
    getAllPatientsAndPlans,
}