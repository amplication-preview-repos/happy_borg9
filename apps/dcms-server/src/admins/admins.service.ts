import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminsServiceBase } from "./base/admins.service.base";

@Injectable()
export class AdminsService extends AdminsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
