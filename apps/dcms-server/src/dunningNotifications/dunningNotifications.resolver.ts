import * as graphql from "@nestjs/graphql";
import { DunningNotificationsResolverBase } from "./base/dunningNotifications.resolver.base";
import { DunningNotifications } from "./base/DunningNotifications";
import { DunningNotificationsService } from "./dunningNotifications.service";

@graphql.Resolver(() => DunningNotifications)
export class DunningNotificationsResolver extends DunningNotificationsResolverBase {
  constructor(protected readonly service: DunningNotificationsService) {
    super(service);
  }
}
