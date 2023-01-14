import { BaseDatabase } from "./BaseDatabase";
import { UserRepository } from "./../business/userRepository";
import { CustomError } from "../error/customError";
import { UpdateUser, UserDTO } from "../model/userTypes";
import { ObjectId } from "mongodb";

export class UserDatabase implements UserRepository {
  public signup = async (user: UserDTO): Promise<void> => {
    try {
      await BaseDatabase.db.collection("users").insertOne(user);
    } catch (error: any) {
      throw new CustomError(500, error);
    }
  };

  public getUserByUsername = async (username: string): Promise<UserDTO> => {
    try {
      let newUser: any = {};
      const user = await BaseDatabase.db
        .collection("users")
        .findOne({ username });

      newUser = {
        id: user?.id,
        username: user?.username,
        name: user?.name,
        email: user?.email,
        password: user?.password,
        address: user?.address,
        phone: user?.phone,
      };
      return newUser;
    } catch (error: any) {
      throw new CustomError(500, error);
    }
  }; 

  public getUsers = async (): Promise<UserDTO[]> => {
    try {
      let arrayUsers: any = [];
      let newUser: any = {};
      const users = await BaseDatabase.db
        .collection<Omit<UserDTO, "id">>("users")
        .find({})
        .toArray();
      // como não sei ainda omitir mais de um campo, fiz um map para não retornar o hashpassword do usuário
      users.map((user) => {
        newUser = {
          id: user._id.toHexString(),
          username: user.username,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          cpf: user.cpf,
        };

        arrayUsers.push(newUser);
      });

      return arrayUsers;
    } catch (error: any) {
      throw new CustomError(500, error);
    }
  };

  public getUserById = async (id: string): Promise<UserDTO> => {
    try {
      let newUser: any = {};
      const user = await BaseDatabase.db
        .collection<Omit<UserDTO, "password">>("users")
        .findOne({ _id: new ObjectId(id) });

      newUser = {
        id: user?.id,
        username: user?.username,
        name: user?.name,
        email: user?.email,
        address: user?.address,
        phone: user?.phone,
      };
      return newUser;
    } catch (error: any) {
      throw new CustomError(500, error);
    }
  };

  public updateUser = async (
    id: string,
    dataUser: UpdateUser
  ): Promise<void> => {
    try {
      await BaseDatabase.db.collection("users").updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            ...dataUser,
          },
        }
      );
    } catch (error: any) {
      throw new CustomError(500, error);
    }
  };

  public deleteUser = async (id: string): Promise<void> => {
    try {
      await BaseDatabase.db
        .collection("users")
        .deleteOne({ _id: new ObjectId(id) });
    } catch (error: any) {
      throw new CustomError(500, error);
    }
  };
}
