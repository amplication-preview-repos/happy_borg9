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
import { Accounts } from "./Accounts";
import { AccountsCountArgs } from "./AccountsCountArgs";
import { AccountsFindManyArgs } from "./AccountsFindManyArgs";
import { AccountsFindUniqueArgs } from "./AccountsFindUniqueArgs";
import { DeleteAccountsArgs } from "./DeleteAccountsArgs";
import { AccountsService } from "../accounts.service";
@graphql.Resolver(() => Accounts)
export class AccountsResolverBase {
  constructor(protected readonly service: AccountsService) {}

  async _accountsItemsMeta(
    @graphql.Args() args: AccountsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Accounts])
  async accountsItems(
    @graphql.Args() args: AccountsFindManyArgs
  ): Promise<Accounts[]> {
    return this.service.accountsItems(args);
  }

  @graphql.Query(() => Accounts, { nullable: true })
  async accounts(
    @graphql.Args() args: AccountsFindUniqueArgs
  ): Promise<Accounts | null> {
    const result = await this.service.accounts(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Accounts)
  async deleteAccounts(
    @graphql.Args() args: DeleteAccountsArgs
  ): Promise<Accounts | null> {
    try {
      return await this.service.deleteAccounts(args);
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
