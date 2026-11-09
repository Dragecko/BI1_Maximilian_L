# Guide d'installation

← [README](../README.md)

## Prérequis

Node.js 22 LTS, npm 10+, Git, VS Code ou Cursor.

## Installation

```bash
git clone https://github.com/Dragecko/BI1_Maximilian_L
cd BI1_Maximilian_L
npm install
npm run dev
```

- API : http://localhost:3000/health
- Swagger : http://localhost:3000/docs
- Port configurable : `PORT=4000 npm run dev`

## Tests

```bash
npm test
```

## Debug

Ouvrir le dossier du projet (pas un dossier parent), poser un point d'arrêt dans `src/controllers/HealthController.ts`, puis `F5` → **Debug API**.

La configuration (`.vscode/launch.json`) régénère les routes tsoa avant le lancement et exécute le TypeScript via `ts-node/register`. Arrêter `npm run dev` avant, sinon le port 3000 est occupé.

## Ajouter une route

Créer `src/controllers/XxxController.ts` (suffixe `Controller.ts` obligatoire, lu par `tsoa.json`). La route et sa documentation Swagger sont générées automatiquement au prochain `npm run dev`.

## À savoir

- `src/generated/` est généré par tsoa et ignoré par git : `npm run generate` si `app.ts` ne trouve pas `./generated/routes`.
- tsoa est fixé en **6.x** : le tag `latest` pointe vers une alpha 7.0.
- Ne pas lancer `npm audit fix --force` (vulnérabilités *moderate* sur des dépendances indirectes).
