const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];


function convert(valor: number, unidadeBase: string, unidadeConversao: string){
    const index1 = units.indexOf(unidadeBase); // pega índice 5 - cm
    const index2 = units.indexOf(unidadeConversao) // pega índice 3 = m
    const expoent = (index1 - index2) // 5 - 3 = 2

    return valor * Math.pow(10,expoent) // 10 * (10²) = 1000
}


convert(10,"mm", "cm");


