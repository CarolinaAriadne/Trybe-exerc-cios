const bodyParser = require('body-parser');

const PatientsAndPlans = require('./controllers/PatientsAndPlans')
const PatientsAndSurgeries = require('./controllers/PatientsAndSurgeries')
const plansId = require('./controllers/PlansId')

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3002;


app.use('/allPatientsAndPlans', PatientsAndPlans );
app.use('/allPatientdsAndSurgeries', PatientsAndSurgeries );
app.use('/plansId', plansId )


app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});