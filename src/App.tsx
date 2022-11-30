import './App.css';
import { useState, useEffect } from 'react';

interface Character {
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
interface Data {data:Character[]}
// could add another quiz section, 
// with every button PRESS another
// section of the character is revealed
// you get more points the earlier you guess
// 1 minus point each time you guess it wrong

function App() :JSX.Element {
  const [data, setData] = useState<Data>()
  const [char, setChar] = useState<Character>()
  
  useEffect(() => {
    fetch('https://api.disneyapi.dev/characters')
      .then(res => res.json())
      .then(data => setData(data))
    // this logs as undefined
  }, []);

  let charImg = ''
  const handleGuess = () => {
    setChar(data?.data[Math.floor(Math.random() * data?.data.length)])
    console.log(char)
    console.log(char?.imageUrl)
  }

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
      <div>
      {char && (
        <>
          <div className="character">
            <p></p>
            <img src={char.imageUrl} alt="disney character" className='character-img'/>
          </div>
        </>
      )}
      </div>
      <img src={charImg} alt=""/>
      <p>Who is it ^ ?</p>
      <input />
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
}

export default App;
