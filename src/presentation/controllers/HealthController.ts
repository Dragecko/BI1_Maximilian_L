import { Controller, Get, Route, Tags } from "tsoa";
import { HealthStatusDto } from "../dtos/HealthStatusDto";

@Route("health")
@Tags("Health")
export class HealthController extends Controller {
  /**
   * Indique si le service est en vie.
   */
  @Get()
  public async getHealth(): Promise<HealthStatusDto> {
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}