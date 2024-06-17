import { Module } from "@nestjs/common";
import { DunningNotificationsModuleBase } from "./base/dunningNotifications.module.base";
import { DunningNotificationsService } from "./dunningNotifications.service";
import { DunningNotificationsController } from "./dunningNotifications.controller";
import { DunningNotificationsResolver } from "./dunningNotifications.resolver";

@Module({
  imports: [DunningNotificationsModuleBase],
  controllers: [DunningNotificationsController],
  providers: [DunningNotificationsService, DunningNotificationsResolver],
  exports: [DunningNotificationsService],
})
export class DunningNotificationsModule {}
