import { useState, useEffect } from "react";
import { getNewJoke } from "../../services/jokes";

interface JokeType {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const Joke = () => {
  const [joke, setJoke] = useState<JokeType | null>(null);

  // Se ejecuta dos veces por React.StrinctMode. Una vez por el render inicial y otra por el render del useEffect. 
  // En producción se ejecuta una sola vez.
  useEffect(() => {
    if (joke === null) getNewJoke().then((joke) => setJoke(joke));
  }, []);

  return (
    <div className="joke">
      <div className="joke__content">
        <p className="joke__text">{joke?.setup}</p>
      </div>
      <div className="joke__actions">
        <button className="joke__button">Reveal</button>
        <button className="joke__button">Next</button>
      </div>
    </div>
  );
};

export default Joke;
