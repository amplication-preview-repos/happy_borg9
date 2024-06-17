import { DunningNotifications as TDunningNotifications } from "../api/dunningNotifications/DunningNotifications";

export const DUNNINGNOTIFICATIONS_TITLE_FIELD = "id";

export const DunningNotificationsTitle = (
  record: TDunningNotifications
): string => {
  return record.id?.toString() || String(record.id);
};
