/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Accounts as PrismaAccounts } from "@prisma/client";

export class AccountsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AccountsCountArgs, "select">): Promise<number> {
    return this.prisma.accounts.count(args);
  }

  async accountsItems(
    args: Prisma.AccountsFindManyArgs
  ): Promise<PrismaAccounts[]> {
    return this.prisma.accounts.findMany(args);
  }
  async accounts(
    args: Prisma.AccountsFindUniqueArgs
  ): Promise<PrismaAccounts | null> {
    return this.prisma.accounts.findUnique(args);
  }
  async createAccounts(
    args: Prisma.AccountsCreateArgs
  ): Promise<PrismaAccounts> {
    return this.prisma.accounts.create(args);
  }
  async updateAccounts(
    args: Prisma.AccountsUpdateArgs
  ): Promise<PrismaAccounts> {
    return this.prisma.accounts.update(args);
  }
  async deleteAccounts(
    args: Prisma.AccountsDeleteArgs
  ): Promise<PrismaAccounts> {
    return this.prisma.accounts.delete(args);
  }
}
