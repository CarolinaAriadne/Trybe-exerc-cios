// src/Cars.jsx

import React, {useContext} from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carYellow.jpeg';
import carYellow from './images/carYellow.jpeg';

const Cars = () => {
  const { cars, moveCar } = useContext (CarsContext)
  const { red, blue, yellow } = cars;

    return (
      <div>
        <div>
          <img
            className={red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red', !red)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blue', !blue)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={yellow ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellow', !yellow)}
            type="button"
          >
            Move
        </button>
        </div>
      </div>
    )
  }


Cars.contextType = CarsContext;

export default Cars;
