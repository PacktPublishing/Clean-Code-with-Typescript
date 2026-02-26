import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import {
  CreateUser,
  User,
  UserResponse,
} from "../../../../../libs/api-types/model";
import * as bcrypt from "bcrypt";
import { FileStorage } from "../common/file-storage";

@Injectable()
export class UsersService {
  private storage = new FileStorage<any>("users.json");

  constructor() {}

  private users: User[] = this.storage.read();

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
    this.storage.write(this.users);

    const { password, ...userWithoutPassword } = newUser;

    return userWithoutPassword;
  }

  findByEmail(email: string): User | undefined {
    const users = this.storage.read();
    return users.find((user) => user.email === email);
  }
}
