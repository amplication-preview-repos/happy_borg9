/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CustomersService } from "../customers.service";
import { CustomersCreateInput } from "./CustomersCreateInput";
import { Customers } from "./Customers";
import { CustomersFindManyArgs } from "./CustomersFindManyArgs";
import { CustomersWhereUniqueInput } from "./CustomersWhereUniqueInput";
import { CustomersUpdateInput } from "./CustomersUpdateInput";

export class CustomersControllerBase {
  constructor(protected readonly service: CustomersService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customers })
  async createCustomers(
    @common.Body() data: CustomersCreateInput
  ): Promise<Customers> {
    return await this.service.createCustomers({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Customers] })
  @ApiNestedQuery(CustomersFindManyArgs)
  async customersItems(@common.Req() request: Request): Promise<Customers[]> {
    const args = plainToClass(CustomersFindManyArgs, request.query);
    return this.service.customersItems({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customers(
    @common.Param() params: CustomersWhereUniqueInput
  ): Promise<Customers | null> {
    const result = await this.service.customers({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Customers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomers(
    @common.Param() params: CustomersWhereUniqueInput,
    @common.Body() data: CustomersUpdateInput
  ): Promise<Customers | null> {
    try {
      return await this.service.updateCustomers({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phone: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Customers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomers(
    @common.Param() params: CustomersWhereUniqueInput
  ): Promise<Customers | null> {
    try {
      return await this.service.deleteCustomers({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phone: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
