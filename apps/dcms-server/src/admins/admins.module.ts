import { Module } from "@nestjs/common";
import { AdminsModuleBase } from "./base/admins.module.base";
import { AdminsService } from "./admins.service";
import { AdminsController } from "./admins.controller";
import { AdminsResolver } from "./admins.resolver";

@Module({
  imports: [AdminsModuleBase],
  controllers: [AdminsController],
  providers: [AdminsService, AdminsResolver],
  exports: [AdminsService],
})
export class AdminsModule {}
