import Months from './exercise2';
import Seasons from './exercise3';
import readline from "readline-sync";

const months = Object.values(Months);

const questionUser = readline.keyInSelect(months, 'Escolha um mês do ano');

const seasonsSouth = {
    [Seasons.outono]: [Months.marco, Months.abril, Months.maio, Months.junho],
    [Seasons.inverno]: [Months.junho, Months.julho, Months.agosto, Months.setembro],
    [Seasons.primavera]: [Months.setembro, Months.outubro, Months.novembro, Months.dezembro],
    [Seasons.verao]: [Months.dezembro, Months.janeiro, Months.fevereiro, Months.marco],

}

const seasonsNorth = {
    [Seasons.primavera]: seasonsSouth[Seasons.outono],
    [Seasons.verao]: seasonsSouth[Seasons.inverno],
    [Seasons.outono]: seasonsSouth[Seasons.primavera],
    [Seasons.inverno]: seasonsSouth[Seasons.verao],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

const month = Object.values(Months)[questionUser];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];

    if (months.includes(month)) console.log(seasons);
});