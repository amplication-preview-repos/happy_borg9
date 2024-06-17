import { Accounts as TAccounts } from "../api/accounts/Accounts";

export const ACCOUNTS_TITLE_FIELD = "id";

export const AccountsTitle = (record: TAccounts): string => {
  return record.id?.toString() || String(record.id);
};
