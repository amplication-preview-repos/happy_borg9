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
import { Admins } from "./Admins";
import { AdminsCountArgs } from "./AdminsCountArgs";
import { AdminsFindManyArgs } from "./AdminsFindManyArgs";
import { AdminsFindUniqueArgs } from "./AdminsFindUniqueArgs";
import { DeleteAdminsArgs } from "./DeleteAdminsArgs";
import { AdminsService } from "../admins.service";
@graphql.Resolver(() => Admins)
export class AdminsResolverBase {
  constructor(protected readonly service: AdminsService) {}

  async _adminsItemsMeta(
    @graphql.Args() args: AdminsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Admins])
  async adminsItems(
    @graphql.Args() args: AdminsFindManyArgs
  ): Promise<Admins[]> {
    return this.service.adminsItems(args);
  }

  @graphql.Query(() => Admins, { nullable: true })
  async admins(
    @graphql.Args() args: AdminsFindUniqueArgs
  ): Promise<Admins | null> {
    const result = await this.service.admins(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Admins)
  async deleteAdmins(
    @graphql.Args() args: DeleteAdminsArgs
  ): Promise<Admins | null> {
    try {
      return await this.service.deleteAdmins(args);
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
