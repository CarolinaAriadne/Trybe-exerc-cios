
let result = "cavalo";
message = "";

finalResult(result);


function finalResult(result) {

    if (result == "aprovada") {

        message = "Parabéns";
    }
    else if (result == "lista") {

        message = "Você está na nossa lista de espera";
    } else if (result == "reprovada") {

        message = "Você foi reprovado";
    } else

        message = "não se aplica";

}


console.log(message);
















