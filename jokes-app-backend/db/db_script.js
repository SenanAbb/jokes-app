import fetch from "node-fetch";

import { db_conn } from "./connection.js";

db_conn.connect();

let jokes;

await fetch(
  "https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json"
)
  .then((res) => res.json())
  .then((data) => (jokes = data));

// EL ID 189 está repetido en el JSON, por lo que no se puede insertar en la base de datos
// Insertamos sin tener en cuenta el ID que viene de la API
db_conn.query(
  `INSERT INTO jokes (type, setup, punchline) VALUES ?`,
  [
    jokes.map((joke) => {
      // Eliminamos el carácter de corazón que viene en el JSON porque no se puede insertar en la base de datos
      if (joke.punchline.includes("💘")) {
        joke.punchline = joke.punchline.replace("💘", "");
      }
      return [joke.type, joke.setup, joke.punchline];
    }),
  ],
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

db_conn.end();
