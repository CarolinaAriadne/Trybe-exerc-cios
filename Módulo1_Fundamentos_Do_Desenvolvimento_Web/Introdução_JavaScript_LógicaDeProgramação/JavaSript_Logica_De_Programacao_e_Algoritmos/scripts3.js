let n = 5;
let espaco = n - 1;
let guardaAsterisco = "";


for (let linha = 0; linha < n; linha++) {

    for (coluna = 0; coluna < espaco; coluna++) {
        guardaAsterisco += " ";
    }
    
    
    for (let j = espaco; j < n; j++) {
        guardaAsterisco += "*";

    }
    console.log(guardaAsterisco);
    guardaAsterisco = "";
    espaco = espaco - 1;
}

















