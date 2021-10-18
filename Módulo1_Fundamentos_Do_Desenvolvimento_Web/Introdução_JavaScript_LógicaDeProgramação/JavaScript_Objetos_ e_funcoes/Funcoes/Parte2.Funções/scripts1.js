

let word = 'arara';

let sizeWord = word.length - 1;

verificaPalindrome(sizeWord);



function verificaPalindrome(sizeWord) {

    let isTrue = 1;

    for (let index = 0; index <= word.length; index++) {

        if (word[sizeWord] == word[index]) {

            sizeWord = sizeWord - 1;

            isTrue = 1;


        } else {

            isTrue = 0;
            break;
        }

    }
    if (isTrue == 1) {

        console.log('true');
    } else {
        console.log('false');
    }

}














