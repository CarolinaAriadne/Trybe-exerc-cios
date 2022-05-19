const express = require('express');
const PatientsAndPlans = require('../services/PatientsAndPlans')

const router = express.Router();

router.get('/', async (_req, res) => {
    try {

        const allPatientsAndPlans = await PatientsAndPlans.getAllPatientsAndPlans();
        // console.log(allPatientsAndPlans,"again")
        return res.status(200).json(allPatientsAndPlans)

    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Eita preula, deu ruim')
    }
})

module.exports = router;
