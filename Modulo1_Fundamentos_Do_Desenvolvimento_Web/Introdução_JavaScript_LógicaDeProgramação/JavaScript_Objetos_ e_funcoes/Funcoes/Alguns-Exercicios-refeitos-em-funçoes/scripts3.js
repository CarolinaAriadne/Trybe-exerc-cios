const notaPessoaCandidata = 90;

avaliacao(notaPessoaCandidata);



function avaliacao(notaPessoaCandidata) {

    if (notaPessoaCandidata >= 80) {

        console.log("Parabéns");
    }

    else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {

        console.log("Você está na nossa lista de espera")
    }

    else 

    console.log("Você foi reprovado");
}