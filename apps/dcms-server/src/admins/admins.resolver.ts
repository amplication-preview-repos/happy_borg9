import * as graphql from "@nestjs/graphql";
import { AdminsResolverBase } from "./base/admins.resolver.base";
import { Admins } from "./base/Admins";
import { AdminsService } from "./admins.service";

@graphql.Resolver(() => Admins)
export class AdminsResolver extends AdminsResolverBase {
  constructor(protected readonly service: AdminsService) {
    super(service);
  }
}
