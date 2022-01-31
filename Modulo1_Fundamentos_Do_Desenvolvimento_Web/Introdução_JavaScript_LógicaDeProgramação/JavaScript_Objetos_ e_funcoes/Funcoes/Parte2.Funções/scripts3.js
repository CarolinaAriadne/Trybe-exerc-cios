


let array = [2, 4, 6, 7, 10, 0, -3];

let smallerNumber = 0;

let position = 0;

 let retorno = recebeArray(array);

function recebeArray(array) {

    for (let index = 0; index < array.length; index++) {

        if (array[index] < smallerNumber) {

            smallerNumber = array[index];

            position = index;
        }




    }
    return position;
    
}



console.log(retorno);

