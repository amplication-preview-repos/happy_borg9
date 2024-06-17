import { AccountsWhereInput } from "./AccountsWhereInput";
import { AccountsOrderByInput } from "./AccountsOrderByInput";

export type AccountsFindManyArgs = {
  where?: AccountsWhereInput;
  orderBy?: Array<AccountsOrderByInput>;
  skip?: number;
  take?: number;
};
