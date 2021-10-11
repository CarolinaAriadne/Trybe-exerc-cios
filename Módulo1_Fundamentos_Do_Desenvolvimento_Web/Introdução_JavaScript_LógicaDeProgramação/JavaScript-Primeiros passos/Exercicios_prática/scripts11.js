
let salarioBruto = 3000;

let salarioLiquido = 0;

let inssPorcentagem = 0;

let impostoDeRenda = 0;

let deducao = 0;

let inssValor = 0;


if(salarioBruto <= 1556.94){

    inssPorcentagem = 0.08;

    console.log("O inss é " , inssPorcentagem);
    inssValor = (salarioBruto * inssPorcentagem);
}    
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){

    inssPorcentagem = 0.09;

    console.log("O inss é " , inssPorcentagem);
    inssValor = (salarioBruto * inssPorcentagem);

}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){

    inssPorcentagem = 0.11;

    console.log("O inss é " , inssPorcentagem);
    inssValor = (salarioBruto * inssPorcentagem);

} else if(salarioBruto > 5189.82){
   
    inssValor = 570.88;
    console.log("O inss é " , inssValor);

}

salarioLiquido = salarioBruto - inssValor;



if(salarioLiquido <= 1903.98){

    impostoDeRenda = 0;

    console.log("isento de imposto");
}

else if(salarioLiquido >=1903.99 && salarioLiquido <= 2826.65){

    impostoDeRenda = 0.075;

    deducao = 142.8;
    
    console.log("O imposto de Renda é " , impostoDeRenda , "e a deducao é" , deducao);
}

else if(salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05){

    impostoDeRenda = 0.15;

    deducao = 354.80;

    console.log("O imposto de Renda é " , impostoDeRenda , "e a deducao é" , deducao);
}

else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68){

    impostoDeRenda = 0.225;

    deducao = 636.13;

    console.log("O imposto de Renda é " , impostoDeRenda , "e a deducao é" , deducao);
}

else if (salarioLiquido > 4664.68){

    impostoDeRenda = 0.275;

    deducao = 869.36;

    console.log("O imposto de Renda é " , impostoDeRenda , "e a deducao é" , deducao);
}

salarioLiquido = salarioLiquido - ((salarioLiquido * impostoDeRenda)-deducao);
console.log("o salário final é",salarioLiquido)