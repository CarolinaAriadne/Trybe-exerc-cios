const express = require('express');
const PatientsAndSurgeries = require('../services/PatientsAndSurgeries')

const router = express.Router();

router.get('/', async (req, res) => {
    try {

        const allPatientsAndSurgeries = await PatientsAndSurgeries.getAllPatientsAndSurgeries();
        // console.log(allPatientsAndSurgeries,"again")
        return res.status(200).json(allPatientsAndSurgeries)

    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Eita preula, deu ruim')
    }
})

module.exports = router;
