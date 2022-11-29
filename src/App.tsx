import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

interface character {
  films: [];
  shortFilms: [];
  tvShows: [];
  videoGames: [];
  parkAttractions: [];
  allies: [];
  enemies: [];
  _id: number;
  name: string;
  imageUrl: string;
  url: string;
}

// could add another quiz section, 
// with every button PRESS another
// section of the character is revealed
// you get more points the earlier you guess
// 1 minus point each time you guess it wrong

function App() :JSX.ElementAttributesProperty {
  const [state, setState] = useState<character>()

  // API-main: https://disneyapi.dev/
  // API-to-use: https://api.disneyapi.dev/characters
  // fetch an image to be displayed
  // fetch the name of the character and match
  // it to the input below,

  // check if the input is correct (convert to lowCase)
  // when the button is clicked

  // display CORRECT! || INCORRECT
  // "Press ENTER to continue"

  // add to div with score of CORRECT_COUNT
  return (
    <div className="App">
      <p>Who is this?</p>
      <input />
      <button>Submit</button>
    </div>
  );
}

export default App;
