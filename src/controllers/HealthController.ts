import { Controller, Get, Route, Tags } from "tsoa";
import { HealthStatus } from "../models/HealthStatus";
import { HealthService } from "../services/HealthService";

@Route("health")
@Tags("Health")

export class HealthController extends Controller {
    /**
     * Indique si le service est en vie.
     */
    @Get()
    public async getHealth(): Promise<HealthStatus> {
        return new HealthService().getStatus();
  }
}