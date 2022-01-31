

let weekDay = "domingo";

let message = " ";


score(weekDay);

function score(weekDay) {

    if (weekDay == "segunda - feira" || weekDay == "terça - feira" || weekDay == "quarta - feira" || weekDay == "quinta - feira" || weekDay == "sexta - feira") {

        message = "Oba, mais um dia na Trybe";

    } else

        message = "Finalmente, descanso merecido";
}

console.log(message);