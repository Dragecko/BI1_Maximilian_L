import request from "supertest";
import { app } from "../src/app";

describe("GET /docs", () => {
  it("serves the Swagger UI page", async () => {
    const res = await request(app).get("/docs/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("swagger-ui");
  });
});

describe("OpenAPI spec", () => {
  it("documents the GET /health route", async () => {
    const spec = (await import("../src/generated/swagger.json")).default;
    expect(spec.paths["/health"].get).toBeDefined();
  });
});
