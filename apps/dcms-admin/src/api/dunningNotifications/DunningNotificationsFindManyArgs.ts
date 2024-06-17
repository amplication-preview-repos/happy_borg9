import { DunningNotificationsWhereInput } from "./DunningNotificationsWhereInput";
import { DunningNotificationsOrderByInput } from "./DunningNotificationsOrderByInput";

export type DunningNotificationsFindManyArgs = {
  where?: DunningNotificationsWhereInput;
  orderBy?: Array<DunningNotificationsOrderByInput>;
  skip?: number;
  take?: number;
};
