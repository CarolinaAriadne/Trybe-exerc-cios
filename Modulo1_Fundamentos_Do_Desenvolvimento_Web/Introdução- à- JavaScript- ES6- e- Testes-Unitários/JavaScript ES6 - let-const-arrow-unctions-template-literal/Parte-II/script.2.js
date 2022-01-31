
const longestWord = (frase) => {

let separateWords = frase.split(" ");
let bigger = 0;
let word = '';

for(let index = 0; index < separateWords.length; index +=1) {

    if(bigger < separateWords[index].length){

        bigger = separateWords[index].length;

        word = separateWords[index];
    }
}

return word;

}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu inconstitucionaliscimamente'));
