import "./App.css";
import CaracteristicasPokemons from "./components/Caracteristicas.Pokemon";
import Title from "./components/Title";
import pokemons from "./data";

function App() {
  console.table(pokemons);
  return (
    <>
      <h1>
        <Title title="Pokedex"></Title>
      </h1>
      <ul>
        <CaracteristicasPokemons data={pokemons} />
      </ul>
    </>
  );
}

export default App;

// App está chamando componente Title, e passando as props (argumentos para ele)
// props podem ser passadas tanto do App pro Title, como do Title pro
