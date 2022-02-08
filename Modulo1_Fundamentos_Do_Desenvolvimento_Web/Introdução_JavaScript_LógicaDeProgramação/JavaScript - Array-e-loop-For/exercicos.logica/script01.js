// // Dado um valor numérico, escreva-o por extenso

let numero = "219";

const tamanhoNumero = numero.length;

let algarismo = "";

let palavra = "";

let centenas = {
  1: "cento",
  2: "duzentos",
  3: "trezentos",
  4: "quatrocentos",
  5: "quinhentos",
  6: "seiscentos",
  7: "setecentos",
  8: "oitocentos",
  9: "novecentos",
};

let dezenas = {
  1: "dez",
  2: "vinte",
  3: "trinta",
  4: "quarenta",
  5: "cinquenta",
  6: "sessenta",
  7: "setenta",
  8: "oitenta",
  9: "noventa",
};

let unidades = {
  1: "um",
  2: "dois",
  3: "três",
  4: "quatro",
  5: "cinco",
  6: "seis",
  7: "sete",
  8: "oito",
  9: "nove",
};

let numerosEspecificos = {
  11: "onze",
  12: "doze",
  13: "treze",
  14: "quatorze",
  15: "quinze",
  16: "dezesseis",
  17: "dezesete",
  18: "dezoito",
  19: "dezenove",
};

for (let index = 0; index < numero.length; index++) {
  algarismo = numero.charAt(index);
  if (algarismo === "0") {
    continue; 
  } else if (index === 0) {
    const terminou = handleFirstAlgarism();
    if(terminou === true){
      break;
    }
  } else if (index === 1) {
   const terminou =  handleSecondAlgarism ();
    if(terminou === true ) {
      break;
    }
   
  } else if (index === 2) {
    handleThirdAlgarism();
  }
}

console.log(palavra);

function handleFirstAlgarism (){
  // verifica se é centena
  if (tamanhoNumero === 3) {
    palavra = centenas[algarismo];
  } else if (tamanhoNumero === 2) {
    if (numerosEspecificos.hasOwnProperty(numero)) {
      palavra = palavra + numerosEspecificos[numero];
      return true;
    } else {
      palavra = dezenas[algarismo];
    }
  } else if (tamanhoNumero === 1) {
    palavra = unidades[algarismo];
  }
  return false;
}


function handleSecondAlgarism  (){
  if (
    tamanhoNumero === 3 &&
    numerosEspecificos.hasOwnProperty(numero.substring(1)) 
  ) {
    palavra = palavra + " e " + numerosEspecificos[numero.substring(1)]; // da posição 1 do array pra frente, então "pega" números 1 e 3 (posição 1 e 2)
    return true;
  } else if (
    tamanhoNumero === 2 &&
    numerosEspecificos.hasOwnProperty(numero)
  ) {
    palavra = palavra + numerosEspecificos[numero];
  } else if (tamanhoNumero === 2) {
    palavra = palavra + " e " + unidades[algarismo];
  } else {
    palavra = palavra + " e " + dezenas[algarismo];
  }
  return false;
}

function handleThirdAlgarism () {
  palavra = palavra + " e " + unidades[algarismo];
}