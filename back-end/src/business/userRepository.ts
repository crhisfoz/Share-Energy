import { UserDTO, UpdateUser } from "./../model/userTypes";

export interface UserRepository {
  signup(user: UserDTO): Promise<void>;

  getUsers(): Promise<UserDTO[]>;

  getUserById(id: string): Promise<UserDTO>;

  updateUser(id: string, dataUser: UpdateUser): Promise<void>;

  deleteUser(id: string): Promise<void>;

  getUserByUsername(username: string): Promise<UserDTO>;
}
