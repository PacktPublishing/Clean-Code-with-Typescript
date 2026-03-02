import { Controller, Post,  Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import type {
  CreateUser,
  UserResponse,
} from "../../../../../libs/api-types/model";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  register(@Body() user: CreateUser): Promise<UserResponse> {
    return this.usersService.register(user);
  }
}

// wire user service to user controller
// make a curl command -> test in post man ->
// copy curl command
