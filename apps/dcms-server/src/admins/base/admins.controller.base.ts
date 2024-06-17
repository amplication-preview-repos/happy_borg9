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
import { AdminsService } from "../admins.service";
import { AdminsCreateInput } from "./AdminsCreateInput";
import { Admins } from "./Admins";
import { AdminsFindManyArgs } from "./AdminsFindManyArgs";
import { AdminsWhereUniqueInput } from "./AdminsWhereUniqueInput";
import { AdminsUpdateInput } from "./AdminsUpdateInput";

export class AdminsControllerBase {
  constructor(protected readonly service: AdminsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Admins })
  async createAdmins(@common.Body() data: AdminsCreateInput): Promise<Admins> {
    return await this.service.createAdmins({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Admins] })
  @ApiNestedQuery(AdminsFindManyArgs)
  async adminsItems(@common.Req() request: Request): Promise<Admins[]> {
    const args = plainToClass(AdminsFindManyArgs, request.query);
    return this.service.adminsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Admins })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async admins(
    @common.Param() params: AdminsWhereUniqueInput
  ): Promise<Admins | null> {
    const result = await this.service.admins({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Admins })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAdmins(
    @common.Param() params: AdminsWhereUniqueInput,
    @common.Body() data: AdminsUpdateInput
  ): Promise<Admins | null> {
    try {
      return await this.service.updateAdmins({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Admins })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAdmins(
    @common.Param() params: AdminsWhereUniqueInput
  ): Promise<Admins | null> {
    try {
      return await this.service.deleteAdmins({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
