// function opcoesDeEstado(){

//     let elementoPai = document.getElementById('state'); //pegando selected, elemento pai options
//     let opcoesDeEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

//     for(let index = 0; index < opcoesDeEstado.length; index +=1){ //passar pelos estados, e criar opções

//         let option = document.createElement('option'); //criando opcções
//         option.innerText = opcoesDeEstado[index]; // option criada, recebe estado referente a posição index (que é um texto)
//         option.value = opcoesDeEstado[index];// valor, texto escrito, nome do estado
//         elementoPai.appendChild(option); // colocando as opções criadas, como filhas da tag que tem o id state (selecteds)

//     }

// }

//opcoesDeEstado()


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
