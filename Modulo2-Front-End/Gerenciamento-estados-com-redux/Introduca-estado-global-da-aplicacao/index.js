const Redux = require('redux');

const fazereLogin = (email) => ({
    type: "LOGIN",
    email
});

const ESTADO_INICIAL = {
    login: false,
    email: "",
};


const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case "LOGIN":
        return {
            ...state,
            login: !state.login,
            email: action.email,
        };
        default: // No switch, sempre precisamos ter um caso default!
            return state;
    }
};

const store = Redux.createStore(reducer);

store.dispatch(fazereLogin("alguem@email.com")); // dispatch, despacha nossa action para dentro do reducer, para que o estado seja alterado

console.log(store.getState());

// Note, também, que o reducer retorna todo o estado , e não somente o que será modificado. Retornamos, então, um objeto que contém todos os dados atuais do estado { ...state } mais as chaves que serão modificadas pela action! 