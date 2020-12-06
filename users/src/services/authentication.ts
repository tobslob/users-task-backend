import dotenv from "dotenv";
import { UserRepo, UserDTO } from "@app/data/user";

dotenv.config();

class User {
  async createUser(dto: UserDTO) {

    return UserRepo.create({
      name: dto.name,
    });
  }
}

export const UserService = new User();
