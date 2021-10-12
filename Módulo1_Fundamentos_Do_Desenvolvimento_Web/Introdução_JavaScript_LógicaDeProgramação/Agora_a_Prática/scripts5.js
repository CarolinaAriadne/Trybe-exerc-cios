let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNUmero = 0;

for (let index = 0; index < numbers.length; index += 1) {

    if (numbers[index] > maiorNUmero) {

        maiorNUmero = numbers [index];

    }
}

    console.log("O maior número é " + maiorNUmero);
