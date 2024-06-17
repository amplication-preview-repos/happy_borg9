import { AdminsWhereInput } from "./AdminsWhereInput";
import { AdminsOrderByInput } from "./AdminsOrderByInput";

export type AdminsFindManyArgs = {
  where?: AdminsWhereInput;
  orderBy?: Array<AdminsOrderByInput>;
  skip?: number;
  take?: number;
};
