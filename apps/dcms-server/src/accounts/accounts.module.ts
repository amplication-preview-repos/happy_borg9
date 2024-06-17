import { Module } from "@nestjs/common";
import { AccountsModuleBase } from "./base/accounts.module.base";
import { AccountsService } from "./accounts.service";
import { AccountsController } from "./accounts.controller";
import { AccountsResolver } from "./accounts.resolver";

@Module({
  imports: [AccountsModuleBase],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsResolver],
  exports: [AccountsService],
})
export class AccountsModule {}
