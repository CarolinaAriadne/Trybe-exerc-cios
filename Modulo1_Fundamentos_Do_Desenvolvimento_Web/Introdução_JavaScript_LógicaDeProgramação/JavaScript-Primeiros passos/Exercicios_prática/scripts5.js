
let lado = 60;
let lado1 = 60;
let lado2 = 60 ;

if (lado >= 0 && lado1 >= 0 && lado2 >= 0) {

    if((lado + lado1 + lado2) == 180){

        console.log("true");
    }

    if ((lado + lado1 + lado2) > 180 || (lado + lado1 + lado2) < 180) {


        console.log("false");

    }

} else {

    console.log("erro");
}



