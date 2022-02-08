import { createStore } from 'redux';
import { MOVE_CAR } from './actionCreators';

const initialState = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// linha 15 - ...state pra pegar o estado inicial do objeto pai initialState/ cars (objeto filho), {...state.cars} para pegar o estado inicial do objeto filho (que são todos falses). [action.car] >> está em colchetes em razão de ser uma variável existente em um objeto, neste colchete eu estou definindo carro (os carros caem nessa variável), seria a nova action, o carro vai ir pra algum lado, essa é a nvoa action - "andar do carro"