let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];


for (let index = 0; index < numbers.length; index += 1) {


    if (index == numbers.length - 1) {

        let calculo = numbers[index] * 2;

        novoArray.push(calculo);
    } else {

        let calculo = numbers[index] * numbers[index + 1]

        novoArray.push(calculo);

    }
}


console.log(novoArray);