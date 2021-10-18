
const currentHour = 13;

let message = "";


timesOfDay(currentHour);

function timesOfDay(currentHour) {

    if (currentHour >= 22) {

        message = "Não deveríamos comer nada, é hora de dormir";
    }

    else if (currentHour >= 18 && currentHour < 22) {

        message = "Rango da noite, vamos jantar";
    }

    else if (currentHour >= 14 && currentHour < 18) {

        message = "Vamos fazer um bolo para o café da tarde";
    }

    else if (currentHour > 11 && currentHour < 14) {

        message = "Hora do Almoço";
    } else

        message = "Hummm, cheiro de café recém passado";

}

    console.log(message);



