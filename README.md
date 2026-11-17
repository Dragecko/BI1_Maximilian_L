# BI1_Maximilian_L

Micro-service REST de l'ETL de classe BI1.

## Quick Start

```bash
git clone https://github.com/Dragecko/BI1_Maximilian_L
cd BI1_Maximilian_L
npm install
npm run dev        # http://localhost:3000/health
```

- Swagger : http://localhost:3000/docs
- Tests : `npm test`
- Guide pour un nouveau développeur : [docs/INSTALL.md](docs/INSTALL.md)

## Stack

| Élément | Choix |
|---|---|
| Langage | TypeScript |
| Framework API | Express |
| Routes + Swagger | tsoa (générés depuis les contrôleurs) |
| Tests | Jest + Supertest |

## Architecture

```
src/
├── config/          # réglages (port)
├── main/            # app.ts (Express) et server.ts (démarrage)
├── presentation/
│   ├── controllers/ # routes HTTP (décorateurs tsoa)
│   └── dtos/        # format des données échangées par l'API
├── routes/          # généré par tsoa, ignoré par git
└── swagger/         # généré par tsoa, ignoré par git
tests/               # tests Jest + Supertest
```

## Debug

- **Depuis VS Code** : point d'arrêt dans un contrôleur, puis `F5` → **Debug API**.
- **Depuis la console** : `npm run debug`, puis **Attach to API** dans VS Code (ou `chrome://inspect`).

## Scripts

| Script | Rôle |
|---|---|
| `npm run dev` | génère les routes + relance à chaque modification |
| `npm run debug` | lance le serveur avec le debugger ouvert |
| `npm test` | génère les routes + lance les tests |
| `npm run build` / `npm start` | compile dans `dist/` / lance la version compilée |

## Sources

| Lien | Retenu |
|---|---|
| [Express — Routing](https://expressjs.com/en/5x/guide/routing/) | définition des routes et des handlers |
| [Express — FAQ](https://expressjs.com/en/starter/faq) | aucune structure imposée ; 404 via un middleware en fin de pile |
| [Express — Error handling](https://expressjs.com/en/guide/error-handling.html) | middleware d'erreur à 4 arguments, défini en dernier |
| [tsoa — Getting started](https://tsoa-community.github.io/docs/getting-started.html) | `tsoa.json`, contrôleurs `@Route` / `@Get`, `RegisterRoutes(app)` |
| [tsoa — Live reloading](https://tsoa-community.github.io/docs/live-reloading.html) | Swagger UI sur `/docs`, `nodemon.json` |
| [Jest — Getting started](https://jestjs.io/docs/getting-started) | `describe` / `test` / `expect` |
| [Supertest](https://www.npmjs.com/package/supertest) | `request(app)` lance l'app sur un port temporaire et l'appelle en HTTP |
| [VS Code — Node.js debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) | `launch.json`, modes `launch` et `attach` |