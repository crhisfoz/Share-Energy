export interface CreateUserInput {
  username: string,
  name: string;
  email: string;
  password: string,
  phone: string;
  address: string;
  cpf: string;
  role: ROLE_TYPE
}
export enum ROLE_TYPE {
  ADMIN = "admin",
  NORMAL = "normal",
}


export interface LoginInput{
  username: string,
  password: string,
}

export interface GetUserIdInput{
  id: string,
  token: string,
}

//  deixar id no UsreDTO para caso haja uma troca de Banco de dados não ser necessário 

export interface UserDTO {
  username: string,
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  cpf: string;
  role: ROLE_TYPE
}

export interface UpdateUser {
  username?: string;
  email?: string | undefined;
  phone?:string | undefined;
  address?:string | undefined;
}

export interface UpdateUserInput {
  id: string;
  token: string;
  username?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface DeleteUser {
  id: string,
  token: string
}
