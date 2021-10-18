let array = [2, 3, 20, 7, 10, 1];


let bigNumber = 0;

let position = 0;

var retorno = 0;

retorno = returnBiggerIndexFromArray(array);
console.log("O índice do array que contém o maior valor é: " + retorno);

function returnBiggerIndexFromArray(array) {

    for (let index = 0; index < array.length; index++) {

        if (array[index] > bigNumber) {

            bigNumber = array[index];

            position = index;

        }

    }
    bigNumber = 0;
    return position;

}