import React, { useDebugValue } from "react";

class CaracteristicasPokemons extends React.Component {
  render() {
    const listaPokemons = this.props.data;
    console.log(listaPokemons);
    return listaPokemons.map((pokemonIndividual) => {
      return (
        <>
          <li className='card'>{pokemonIndividual.name}
          <p>{pokemonIndividual.type}</p>
          <p>
            {pokemonIndividual.averageWeight.value} - {pokemonIndividual.averageWeight.measurementUnit}
          </p>
          <img src={pokemonIndividual.image} alt=""></img>
          </li>
        </>
      );
    });
  }
}

export default CaracteristicasPokemons;
