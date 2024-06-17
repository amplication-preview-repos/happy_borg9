/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Customers } from "./Customers";
import { CustomersCountArgs } from "./CustomersCountArgs";
import { CustomersFindManyArgs } from "./CustomersFindManyArgs";
import { CustomersFindUniqueArgs } from "./CustomersFindUniqueArgs";
import { CreateCustomersArgs } from "./CreateCustomersArgs";
import { UpdateCustomersArgs } from "./UpdateCustomersArgs";
import { DeleteCustomersArgs } from "./DeleteCustomersArgs";
import { CustomersService } from "../customers.service";
@graphql.Resolver(() => Customers)
export class CustomersResolverBase {
  constructor(protected readonly service: CustomersService) {}

  async _customersItemsMeta(
    @graphql.Args() args: CustomersCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Customers])
  async customersItems(
    @graphql.Args() args: CustomersFindManyArgs
  ): Promise<Customers[]> {
    return this.service.customersItems(args);
  }

  @graphql.Query(() => Customers, { nullable: true })
  async customers(
    @graphql.Args() args: CustomersFindUniqueArgs
  ): Promise<Customers | null> {
    const result = await this.service.customers(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Customers)
  async createCustomers(
    @graphql.Args() args: CreateCustomersArgs
  ): Promise<Customers> {
    return await this.service.createCustomers({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Customers)
  async updateCustomers(
    @graphql.Args() args: UpdateCustomersArgs
  ): Promise<Customers | null> {
    try {
      return await this.service.updateCustomers({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Customers)
  async deleteCustomers(
    @graphql.Args() args: DeleteCustomersArgs
  ): Promise<Customers | null> {
    try {
      return await this.service.deleteCustomers(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
