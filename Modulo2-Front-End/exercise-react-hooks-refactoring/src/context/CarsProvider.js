// src/context/Provider.js

import React, {useState} from 'react';
import CarsContext from './CarsContext';

const CarsProvider = ({children}) => {
  const [cars, setCars] = useState({
    red:false, 
    blue: false, 
    yellow: false, 
  });

 // Provider é responsável por "prover"
  // os dados para os componentes que 
  // estão nos níveis abaixo dele na árvore de componentes.
  // Ele aceita uma prop obrigatória value com os dados que serão compartilhados.
  // Esse valor pode ser qualquer valor JavaScript, como um número,
  // string, array ou objeto.

const moveCar = (car, side) => {
  setCars({
    ...cars,
    [car]:side,
  })
};

const context = {cars, moveCar}

return (
  <CarsContext.Provider value={context}>
    {children}
  </CarsContext.Provider>
)

}

export default CarsProvider;
