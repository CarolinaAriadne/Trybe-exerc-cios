debugger
const ESTADO_INICIAL = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};

const buttonPrevious = document.getElementById("previous");
buttonPrevious.addEventListener("click", () => {
  store.dispatch({ type: PREVIOUS });
  console.log(buttonPrevious);
});

const buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", () => {
  store.dispatch({ type: NEXT }); // despacha action para  dentro do reducer
  console.log(buttonNext);
});

const buttonCorNova = document.getElementById("cor-nova");
buttonCorNova.addEventListener("click", () => {
  store.dispatch({ type: CORNOVA })
  console.log(buttonCorNova);
})

const PREVIOUS = "PREVIOUS_COLOR";
const NEXT = "NEXT_COLOR";
const CORNOVA = "COR_NOVA";

const reducer = (state = ESTADO_INICIAL, action) => {
  // captura da action solicitada
  switch (action.type) { // ?
    case NEXT:
      if (state.index < state.colors.length - 1) {
        return { ...state, index: state.index + 1 };
      }
    case PREVIOUS:
      if (state.index < state.colors.length && state.index > 0) {
        return { ...state, index: state.index - 1 };
      }
    case CORNOVA:
       const novaCor = criarCor();
      return {...state, colors: [...state.colors, novaCor], index: state.colors.length - 1 }
    default:
      return state;
  }
};

function criarCor() {
  const oneChar = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let cor = "#";
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const store = Redux.createStore(reducer);
store.subscribe(() => {
  const { colors, index } = store.getState();
  const color = (document.getElementById("value").innerHTML =
    colors[index]);
  document.body.style.background = colors[index];
});
