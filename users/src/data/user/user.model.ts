import { Model } from "../database";

export interface User extends Model {
  name: string;
}

export interface UserDTO {
  name: string;
}
