import {
  controller,
  httpPost,
  requestBody,
  request,
  response,
  httpGet,
  requestParam,
  httpDelete,
  httpPatch
} from "inversify-express-utils";
import { Request, Response } from "express";
import { UserDTO, User } from "@app/data/user";
import { BaseController } from "@app/data/util";
import { UserService } from "@app/services/authentication";
import { UserRepo } from "@app/data/user";
import { isUser, isID, isUserUpdate } from "./user.validator";
import { validate } from "@app/data/util";
import dotenv from "dotenv";

dotenv.config()

type ControllerResponse = User | User[] | string;

@controller("/user")
export class UserController extends BaseController<ControllerResponse> {
  @httpPost("/", validate(isUser))
  async createUser(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: UserDTO
  ) {
    const user = await UserService.createUser(body);

    this.handleSuccess(req, res, user);

    this.log(req, {
      activity: "create.user",
      message: "New Created user",
      object_id: user.id
    });
  }

  @httpGet("/:id", validate(isID))
  async getUser(
    @request() req: Request,
    @response() res: Response,
    @requestParam("id") id: string
  ) {
    const user = await UserRepo.byID(id);
    this.handleSuccess(req, res, user);
  }

  @httpGet("/")
  async getAllUsers(@request() req: Request, @response() res: Response) {
    const user = await UserRepo.all({
      sort: "+created_at"
    });
    this.handleSuccess(req, res, user);
  }

  @httpDelete("/:id", validate(isID))
  async deleteUser(
    @request() req: Request,
    @response() res: Response,
    @requestParam("id") id: string
  ) {
    const user = await UserRepo.destroy(id);
    this.handleSuccess(req, res, user);
  }

  @httpPatch("/:id", validate(isID), validate(isUserUpdate))
  async updateUser(
    @request() req: Request,
    @response() res: Response,
    @requestParam("id") id: string,
    @requestBody() body: UserDTO
  ) {
    const update: any = {
      name: body.name,
    };

    const user = await UserRepo.atomicUpdate(id, update);
    this.handleSuccess(req, res, user);
  }
}
