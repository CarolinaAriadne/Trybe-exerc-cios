
const specialFruit = ['morango', 'banana', 'laranja'];

const additionalItens = ['uva', 'mexerica', 'maçã'];

const fruitSalad = (fruit,additional) => {

const totalFruits = [...fruit,...additionalItens]

return  totalFruits;
    
}

let resultado = (fruitSalad(specialFruit,additionalItens));

console.log(resultado);

