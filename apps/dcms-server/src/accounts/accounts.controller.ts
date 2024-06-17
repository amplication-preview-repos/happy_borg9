import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountsService } from "./accounts.service";
import { AccountsControllerBase } from "./base/accounts.controller.base";

@swagger.ApiTags("accounts")
@common.Controller("accounts")
export class AccountsController extends AccountsControllerBase {
  constructor(protected readonly service: AccountsService) {
    super(service);
  }
}
