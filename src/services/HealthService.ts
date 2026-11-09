import { HealthStatus } from "../models/HealthStatus";

export class HealthService {
  public getStatus(): HealthStatus {
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}