import request from "supertest";
import { app } from "../src/app";

describe("GET /health", () => {
  it("reply 200 with status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(typeof res.body.uptime).toBe("number");
    expect(typeof res.body.timestamp).toBe("string");
  });

it("reply 404 on an unknown route", async () => {
    const res = await request(app).get("/unknown-route");
    expect(res.status).toBe(404);
  });
});