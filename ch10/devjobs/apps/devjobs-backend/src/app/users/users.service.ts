import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import {
  CreateUser,
  User,
  UserResponse,
} from "../../../../../libs/api-types/model";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  private users: User[] = []; // Now using internal type for secure storage

  async register(user: CreateUser): Promise<UserResponse> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = {
      id: randomUUID(),
      name: user.name,
      email: user.email,
      role: user.role,
      companyId: user.companyId,
      password: hashedPassword,
    };

    this.users.push(newUser);

    const { password, ...userWithoutPassword } = newUser;

    return userWithoutPassword;
  }
}
