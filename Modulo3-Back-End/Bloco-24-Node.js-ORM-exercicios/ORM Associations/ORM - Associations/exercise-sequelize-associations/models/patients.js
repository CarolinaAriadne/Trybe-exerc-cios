'use strict';


module.exports = (sequelize, DataTypes) => {
    const Patients = sequelize.define('Patients', {
      patient_id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true },
      fullname: DataTypes.STRING,
      plan_id: { type: DataTypes.INTEGER, foreignKey: true },
      
    },
    {
      timestamps: false,
    });

    Patients.associate = (models) => {
      Patients.belongsTo(models.Plans, {as: 'plan', foreignKey: 'plan_id'})
    }

    return Patients;
}