import * as graphql from "@nestjs/graphql";
import { AccountsResolverBase } from "./base/accounts.resolver.base";
import { Accounts } from "./base/Accounts";
import { AccountsService } from "./accounts.service";

@graphql.Resolver(() => Accounts)
export class AccountsResolver extends AccountsResolverBase {
  constructor(protected readonly service: AccountsService) {
    super(service);
  }
}
