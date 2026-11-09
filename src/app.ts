import express, { NextFunction, Request, Response } from "express";
import { ValidateError } from "tsoa";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./generated/routes";
import swaggerDocument from "./generated/swagger.json";

export const app = express();

app.use(express.json());

RegisterRoutes(app);

// Documentation Swagger autogénérée par tsoa (src/generated/swagger.json)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route inconnue → 404
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

// Gestion centralisée des erreurs
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ValidateError) {
    return res.status(422).json({ message: "Validation Failed", details: err.fields });
  }
  console.error(err);
  return res.status(500).json({ message: "Internal Server Error" });
});