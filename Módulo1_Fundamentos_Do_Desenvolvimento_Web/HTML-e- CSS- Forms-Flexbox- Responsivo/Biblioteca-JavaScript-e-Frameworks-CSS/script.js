function opcoesDeEstado(){

    let elementoPai = document.getElementById('state'); //pegando selected, elemento pai options
    let opcoesDeEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for(let index = 0; index < opcoesDeEstado.length; index +=1){
    let criandoOptions = document.createElement('option');
    elementoPai.appendChild(criandoOptions).innerText = opcoesDeEstado[index];
    elementoPai.appendChild(criandoOptions).value = opcoesDeEstado[index];


    }
}

window.onload = function(){

    opcoesDeEstado();

}



 //document.getElementById('input').DatePickerXmin.init()




// function  getFormattedDate ( dt , format)
//         {
//             var  items  =  {
//                 d    : dt . getDate ( ) ,
//                 dd   : dt . getDate ( ) ,
//                 D    : dt . getDay ( ) ,
//                 m    : dt . getMonth ( )  +  1 ,
//                 mm   : dt . getMonth ( )  +  1 ,
//                 M    : dt . getMonth ( ) ,
//                 MM   : dt . getMonth ( ) ,
//                 yy   : dt . getFullYear ( ) . toString ( ) . substr ( - 2 ) ,
//                 aaaa : dt . getFullYear ( )
//             } ;
//         }