let custoDoProduto = - 200;

let ValorDaVenda = 350;

let imposto = custoDoProduto * 0.20;

let custoTotalDoProduto = custoDoProduto + imposto;

let valorDoLucro = ValorDaVenda - custoTotalDoProduto;

if(custoDoProduto < 0 || ValorDaVenda < 0){

    console.log("erro");
} else{

console.log("Este é  o valor do lucro" , valorDoLucro * 1000);

console.log("Este é o valor do lucro de uma unidade" , valorDoLucro);
}






