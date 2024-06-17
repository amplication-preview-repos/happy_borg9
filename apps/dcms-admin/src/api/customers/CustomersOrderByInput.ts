import { SortOrder } from "../../util/SortOrder";

export type CustomersOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
