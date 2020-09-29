import React from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './FoodBox/FoodBox.js';

function App() {
  return (
    <div className="App">
      {foods.map((food, i) => {
        return <FoodBox key={i} name={food.name} calories={food.calories} image={food.image}/>
      })}
    </div>
  );
}

export default App;
