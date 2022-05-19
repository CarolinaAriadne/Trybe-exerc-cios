"use strict";

module.exports = (sequelize, _DataTypes) => {
  const Patient_surgeries = sequelize.define(
    "Patient_surgeries",

    {},

    { timestamps: false }
  );

  Patient_surgeries.associate = (models) => {
    models.Patients.belongsToMany(models.Surgeries, {
      as: "surgeries",
      through: Patient_surgeries,
      //A ideia é que a relação entre Patients e Surgeries vai atravessar (through) a tabela PatientsSurgeries
      foreignKey: "patient_id",
      otherKey: "surgery_id",
    });

    models.Surgeries.belongsToMany(models.Patients, {
      as: "patients",
      through: Patient_surgeries,
      //A ideia é que a relação entre Surgeries e Patients vai atravessar (through) a tabela PatientsSurgeries
      foreignKey: "surgery_id",
      otherKey: "patient_id",
    });
  };

  return Patient_surgeries;
};

// Patients.belongsTo(models.Plans, {as: 'plan', foreignKey: 'plan_id'})
