import { Admins as TAdmins } from "../api/admins/Admins";

export const ADMINS_TITLE_FIELD = "id";

export const AdminsTitle = (record: TAdmins): string => {
  return record.id?.toString() || String(record.id);
};
