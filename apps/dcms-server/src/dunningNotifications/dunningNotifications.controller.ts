import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DunningNotificationsService } from "./dunningNotifications.service";
import { DunningNotificationsControllerBase } from "./base/dunningNotifications.controller.base";

@swagger.ApiTags("dunningNotifications")
@common.Controller("dunningNotifications")
export class DunningNotificationsController extends DunningNotificationsControllerBase {
  constructor(protected readonly service: DunningNotificationsService) {
    super(service);
  }
}
