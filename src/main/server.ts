import { app } from "./app";
import settings from "../config/settings.json";

const port = Number(process.env.PORT) || settings.port;

app.listen(port, () => {
  console.log(`Service démarré sur http://localhost:${port}`);
  console.log(`serveur documentation: http://localhost:${port}/docs`);
});