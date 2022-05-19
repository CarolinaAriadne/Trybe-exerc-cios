const express = require('express')
const plansIdService = require('../services/PlansIdService')

const router = express.Router();

router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const patients = await plansIdService.getById(id);
        return res.status(200).json(patients)
    } catch (error) {
       console.log(error.message)
       return res.status(500).send('Eita preula, deu ruim')
    }
})

module.exports = router;
