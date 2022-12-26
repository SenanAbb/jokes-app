import { useState, useEffect, use } from "react";
import { getNewJoke } from "../../services/jokes";
import Button from "../Button";
import styles from "./Joke.module.scss";

interface JokeType {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const Joke = () => {
  const [joke, setJoke] = useState<JokeType | null>(null);
  const [reveal, setReveal] = useState<boolean>(false);

  const handleRevealClick = () => {
    if (reveal) {
      setReveal(false);
      getNewJoke().then((joke) => setJoke(joke));
    } else {
      setReveal(true);
    }
  };

  // Se ejecuta dos veces por React.StrinctMode. Una vez por el render inicial y otra por el render del useEffect.
  // En producción se ejecuta una sola vez.
  useEffect(() => {
    if (joke === null) getNewJoke().then((joke) => setJoke(joke));
  }, []);

  return (
    <div className={styles.joke}>
        <p>{joke?.setup}</p>
        {reveal && <p>{joke?.punchline}</p>}
        <Button onClick={handleRevealClick}>
          {reveal ? "Next joke" : "Reveal"}
        </Button>
    </div>
  );
};

export default Joke;
