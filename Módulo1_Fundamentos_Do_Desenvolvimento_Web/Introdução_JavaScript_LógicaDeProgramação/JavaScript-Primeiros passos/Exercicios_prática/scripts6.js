
let peca6 = "TORRE".toLowerCase();

if (peca6 == "peão") {

    console.log("Sempre se move uma casa para frente, com exceção do primeiro movimento, neste caso ela se moverá duas casas");

}

else if (peca6 == "torre") {

    console.log("Se move em linha reta, na vertical e horizontal, em quantas casas for");
}

else if (peca6 == "bispo") {

    console.log("Se move na diagonal, em quantas casas for");
}

else if (peca6 == "cavalo") {

    console.log("Anda duas casas na horizontal e uma na vertical, ou então pode andar duas casas na vertical e uma na horizontal");
}

else if (peca6 == "rei") {

    console.log("Move - se em qualquer direção, uma casa por vez");
}

else if (peca6 == "dama") {

    console.log("Move - se em qualquer direção, quantas casas quiser, se estiverem livres");
}

else {

    console.log("Não é uma é uma peça de xadrez");

}

