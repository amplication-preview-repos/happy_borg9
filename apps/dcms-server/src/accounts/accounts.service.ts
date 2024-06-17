import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountsServiceBase } from "./base/accounts.service.base";

@Injectable()
export class AccountsService extends AccountsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
