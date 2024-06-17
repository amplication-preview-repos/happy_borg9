import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminsService } from "./admins.service";
import { AdminsControllerBase } from "./base/admins.controller.base";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminsController extends AdminsControllerBase {
  constructor(protected readonly service: AdminsService) {
    super(service);
  }
}
