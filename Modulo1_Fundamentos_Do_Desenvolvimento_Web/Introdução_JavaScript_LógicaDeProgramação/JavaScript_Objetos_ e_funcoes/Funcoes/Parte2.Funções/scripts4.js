
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let biggerName = '';

names2(names);



function names2(names) {

for(let index = 0; index < names.length; index++){

    if(names[index].length > biggerName.length){

        biggerName = names[index];

               
    }




}

console.log(biggerName);

}








