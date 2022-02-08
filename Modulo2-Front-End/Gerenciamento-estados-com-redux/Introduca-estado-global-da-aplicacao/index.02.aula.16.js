//  1 - criando store que irá conter as infos de estado
const store = Redux.createStore(() => {} );
console.log(store); // store no navegador traz alguns métodos previamente definidos, como dispatch, subscribe, getState, etc - aqui o store foi criado para armazenar informações


// 1.1 definir estado inicial, pq senão o return state vai dar algo como null ou indefined, pq não vai ter nenhuma informação de estado definida ali dentro 

const INICIAL_STATE ={
    theme: 'ligth'
}

// 2 - criar reducer - mecanismo que lida com manioulação de infos na store

const reducer = (INICIAL_STATE, action) => { // infos de estado e ação a ser efetivada. State infos de estado anterior e info que serão alteradas. Action, alteração que quero realizar
    
const CHANGE_TO_DARK = 'CHANGE_TO_DARK' // usar constante para evitar erros de script

    console.log(action) // capturei aqui a action solicitada ( 'CHANGE_TO_DARK') 
    if(action.type === CHANGE_TO_DARK) {
        return {
            ...state, // para que venha o estado anterior nao alterado, e o que foi alterado
            theme: 'dark' // o que foi alterado
        } // se o disparo da ação for do tipo CHANGE_TO_DARK', entra no bloco de código 
    }
  return state;
}

// preciso dizer para store, quem vai gerenciar o meio de campo das info - quem faz isso é o reducer, ele gerencia o estado no store. Ele retorna o estado atual (por ex theme: ligth)

// 3 pegar clique do button para ligar e desligar lâmpada. Assim que o clique ocorre, quero disparar uma ação para alterar o estado, por isso usa - se o store.dispatch

const btnLamp = document.getElementById('light-switch')
btnLamp.addEventListener('click', () => {
    store.dispatch({ // dispara ação
        type: CHANGE_TO_DARK // ação que tem sempre um type dentro dela , action é o objeto que tem um type, valor type pode ser qualquer nome
    })
})

// forma com switch

const reducer = (INICIAL_STATE, action) => { // infos de estado e ação a ser efetivada. State infos de estado anterior e info que serão alteradas. Action, alteração que quero realizar

    console.log(action) // capturei aqui a action solicitada ( 'CHANGE_TO_DARK') 
    switch (action.type) { // se o disparo da ação for do tipo CHANGE_TO_DARK', entra no bloco de código 
        case CHANGE_TO_DARK:  // se o disparo da ação for do tipo CHANGE_TO_DARK', entra no bloco de código 
         return {
            ...state, // para que venha o estado anterior nao alterado, e o que foi alterado
            theme: 'dark' // o que foi alterado
        } // se o disparo da ação for do tipo CHANGE_TO_DARK', entra no bloco de código 
        default: // se o disparo da ação não for nenhuma das indicadas, retorna default, retorna estado atual (que é o estado inicial, ou último estado válido)
            return state;
    }
  return state;
}
