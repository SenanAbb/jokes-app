import express from "express";
import cors from "cors";
import { db_conn } from "./db/connection.js";

const app = express();
const PORT = process.env.port || 4000;

app.use(cors({ origin: "http://localhost:3000" }));

// Se debe exportar a un archivo aparte, en una carpeta Routes, por ejemplo, y luego importarlo con app.use
// Al hacerlo así, se puede tener un archivo de rutas por cada recurso, y así no se sobrecarga el archivo principal
// Pero en este caso, como solo hay una ruta, se puede dejar así

// También es buena práctica crear modelos para cada tabla de la base de datos, y luego importarlos en el archivo de rutas
// En este caso, se puede dejar así, pero en un proyecto real, se recomienda hacerlo

app.get("/", async (req, res) => {
  const random = Math.floor(Math.random() * 400) + 1;
  db_conn.query("SELECT * FROM jokes WHERE id = ?", [random], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error on the server.");
    } else {
      console.log(rows[0]);
      res.status(200).send(rows[0]);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
