import "./App.css";
import { useState, useEffect } from "react";
import { text } from "stream/consumers";

interface Character {
  _id: number;
  name: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: [];
  parkAttractions: [];
  allies: [];
  enemies: [];
  imageUrl: string;
  url: string;
  sourceUrl: string;
  alignment: string;
}

interface Data {
  data: Character[];
}
// could add another quiz section,
// with every button PRESS another
// section of the character is revealed
// you get more points the earlier you guess
// 1 minus point each time you guess it wrong

type Answer = "CORRECT" | "INCORRECT";

function App(): JSX.Element {
  const [data, setData] = useState<Data>();
  const [char, setChar] = useState<Character>();
  const [input, setInput] = useState<string>("");
  const [screen, setScreen] = useState<boolean>(false);
  const [answer, setAnswer] = useState<Answer>();
  const [points, setPoints] = useState<number>(0);

  // API-main: https://disneyapi.dev/
  // API-to-use: https://api.disneyapi.dev/characters?page=#
  const apiURL: string = "https://api.disneyapi.dev/characters?page=";

  // sleep
  // const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    // the URL has multiple pages
    fetch(`${apiURL}${Math.floor(Math.random() * (Math.floor(7438 / 50) + 1))}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // get a random image to be displayed when "START GAME" || "CONTINUE" button is pressed
  // ADD if statement if image is unavailable to load new one
  const handleStartGame = () => {
    setChar(data?.data[Math.floor(Math.random() * data?.data.length)]);
    console.log(char);
    console.log(char?.imageUrl);
  };
  // compare the INPUT to CHAR.NAME (SET to lower case)
  // IF true => CORRECT
  //    POINTS ++   &&   DISPLAY congratulations!  
  //       &&    HANDLE_START_GAME
  // IF false => INCORRECT
  //    DISPLAY incorrect, the right answer was: CHAR.NAME  
  //        &&    HANDLE_START_GAME
  const handleGuess = () => {
    setScreen(true);
    console.log(char?.films[0].toLowerCase())
    if (char?.name.toLowerCase() && char?.films[0].toLowerCase() && char?.tvShows[0].toLowerCase()){
      if (
        char?.name.toLowerCase() === input.toLowerCase() || 
        char?.films[0].toLowerCase() === input.toLowerCase() || 
        char?.tvShows[0].toLowerCase() === input.toLowerCase()
        ) {
        setAnswer("CORRECT");
        setPoints((prev) => prev++);
      } else {
        setAnswer("INCORRECT");
      }
    } else if (char?.name.toLowerCase() && char?.films[0].toLowerCase()){
      if (
        char?.name.toLowerCase() === input.toLowerCase() || 
        char?.films[0].toLowerCase() === input.toLowerCase()
        ) {
        setAnswer("CORRECT");
        setPoints((prev) => prev++);
      } else {
        setAnswer("INCORRECT");
      }
    } else if (char?.name.toLowerCase() && char?.tvShows[0].toLowerCase()){
      if (
        char?.name.toLowerCase() === input.toLowerCase() || 
        char?.tvShows[0].toLowerCase() === input.toLowerCase()
        ) {
        setAnswer("CORRECT");
        setPoints((prev) => prev++);
      } else {
        setAnswer("INCORRECT");
      }
    } else if (char?.films[0].toLowerCase() && char?.tvShows[0].toLowerCase()){
      if ( 
        char?.films[0].toLowerCase() === input.toLowerCase() || 
        char?.tvShows[0].toLowerCase() === input.toLowerCase()
        ) {
        setAnswer("CORRECT");
        setPoints((prev) => prev++);
      } else {
        setAnswer("INCORRECT");
      }
    } else if (char?.name.toLowerCase()){
      if (
        char?.name.toLowerCase() === input.toLowerCase()
        ) {
        setAnswer("CORRECT");
        setPoints((prev) => prev++);
      } else {
        setAnswer("INCORRECT");
      }
    } else if (char?.films[0].toLowerCase()){
      if (
        char?.films[0].toLowerCase() === input.toLowerCase()
        ) {
        setAnswer("CORRECT");
        setPoints((prev) => prev++);
      } else {
        setAnswer("INCORRECT");
      }
    } else if (char?.tvShows[0].toLowerCase()){
      if (
        char?.tvShows[0].toLowerCase() === input.toLowerCase()
        ) {
        setAnswer("CORRECT");
        setPoints((prev) => prev++);
      } else {
        setAnswer("INCORRECT");
      }
    }
  };

  const handleContinue = () => {
    // clears input field
    setInput('')
    setScreen(false);
  };

  return (
    <div className="App">
      {screen !== false && (
        <>
          <p>your answer was {answer}</p>
          <button
            onClick={() => {
              handleContinue();
              handleStartGame();
            }}
          >
            Press to continue
          </button>
        </>
      )}
      {char ? (
        <>
          <div className="character">
            <br />
            <img
              src={char.imageUrl}
              alt="disney character"
              className="character-img"
            />
            <p>Who is that?</p>
            <input
              type="text"
              placeholder="Search here"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <span> </span>
            <button onClick={handleGuess}>Guess</button>
            <p>Your score is: {points}</p>
          </div>
        </>
      ) : (
        <>
          <br />
          <br />
          <br /> <button onClick={handleStartGame}>START GAME</button>
        </>
      )}
    </div>
  );
}

export default App;
