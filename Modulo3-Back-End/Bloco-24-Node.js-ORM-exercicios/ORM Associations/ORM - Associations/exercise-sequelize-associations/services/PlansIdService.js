const { Plans, Patients } = require('../models');

const getById = async (id) => {
	const patients = await Plans.findByPk(id,
		{
			include: { model: Patients, as: 'patients' }
		});

	return patients;
};

module. exports = {
    getById,
}