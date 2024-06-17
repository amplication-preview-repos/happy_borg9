import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DunningNotificationsServiceBase } from "./base/dunningNotifications.service.base";

@Injectable()
export class DunningNotificationsService extends DunningNotificationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
