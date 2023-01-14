import { validateFieldsUpdate, validateRole } from "../controller/userControllerSerializer";
import {
  InvalidId,
  InvalidParametersId,
  InvalidPassword,
<<<<<<< HEAD
  NotAllowedToCreate,
=======
  NotAllowedToCreateCPF,
>>>>>>> c0dcd3b5996f2c3e84068125b0b6183737104563
  NotFoundUser,
  NotFoundUsername,
  NotFoundUsers,
  Unauthorized,
} from "../error/customError";
import {
  CreateUserInput,
  DeleteUser,
  GetUserIdInput,
  LoginInput,
  UpdateUserInput,
  UserDTO,
} from "../model/userTypes";
import { AuthenticationData } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IAuthenticator, IIdGenerator } from "./Ports";
import { UserRepository } from "./userRepository";
import { User } from "./../model/User";
import {
  NotAllowedToCreateEmail,
  NotAllowedToCreateUsername,
} from "./../error/customError";

export class UserBusiness {
  constructor(
    private userDB: UserRepository,
    private hashManager: HashManager,
    private authenticator: IAuthenticator,
    private idGenerator: IIdGenerator
  ) {}

  public signup = async (input: CreateUserInput): Promise<string> => {
    const { username, name, email, password, phone, address, cpf, role } = input;

    //verificação se já existe usuário com o mesmo e-mail no banco de dados
     const usersExists = await this.userDB.getUsers();
    usersExists.forEach((user) => {
      if (username === user.username) {
        throw new NotAllowedToCreateUsername();
      }
      if (email === user.email) {
        throw new NotAllowedToCreateEmail();
      }
      if (cpf === user.cpf) {
        throw new NotAllowedToCreateCPF();
      }
    });
 
    //baseando-se na hipotése de os inputs não serem tratados no front, faço a retirada de espaços vazios, e crio o usuário antes sem id para utilizar métodos de validação de propriedades email, password e cpf, na hora da criação do usário, caso estejam fora dos padrões estabelecidos já apresenta erro

    const user = new User(
      username.trim().toLowerCase(),
      name.trim().toLowerCase(),
      email.trim().toLowerCase(),
      password.trim(),
      phone.trim().toLowerCase(),
      address.trim().toLowerCase(),
      cpf.trim().toLowerCase(),
      role
    );

    //criação de id
    const id: string = this.idGenerator.generateId();

    //geração de hashPassword
    const hashPassword = await this.hashManager.generateHash(
      user.getPassword()
    );

    //criação do novo usuário validado na criação da classe User
    const newUser: UserDTO = {
      id,
      username: user.getUserName(),
      name: user.getName(),
      email: user.getEmail(),
      password: hashPassword,
      phone: user.getPhone(),
      address: user.getAddress(),
      cpf: user.getCpf(),
      role: user.getRole(),
    };

    //criação de payload que pode vir a ser necessária para geração de token
    const payload: AuthenticationData = {
      id,
      role: newUser.role,
    };

    await this.userDB.signup(newUser);

    //depois de aguardar a criação de usuário, gera token e o retorna
    const token = this.authenticator.generateToken(payload);
    return token;
  };

  public getIsValidToken = async (token:string):Promise<any> => {

    try {
      
    } catch (error) {
      
    }
    const authentication = this.authenticator.getTokenData(token)
    
    if(!authentication){
      return false
    }  
    return true
 
  }


  public login = async (input: LoginInput): Promise<string> => {
    const dataInputUser = {
      username: input.username.trim(),
      password: input.password.trim(),
    };

    const user = await this.userDB.getUserByUsername(dataInputUser.username);

    if (user.username === undefined) {
      throw new NotFoundUsername();
    }

    //tive que colocar o retorno do password no getByEmail para efetuar a comparação de senhas

    const hashCompare = await this.hashManager.compareHash(
      dataInputUser.password,
      user.password
    );

    if (!hashCompare) {
      throw new InvalidPassword();
    }

    const payload: AuthenticationData = {
      id: user.id,
      role: user.role,
    };

    const newToken = this.authenticator.generateToken(payload);

    return newToken;
  };

  public getUsers = async (): Promise<UserDTO[]> => {
    const users = await this.userDB.getUsers();

    if (!users.length) {
      throw new NotFoundUsers();
    }

    return users;
  };

  public getUserById = async (input: GetUserIdInput) => {
    const { id, token } = input;

    //validação se o token é válido,
    const authentication = this.authenticator.getTokenData(token);

    const user = await this.userDB.getUserById(id);

    if (!user.id) {
      throw new NotFoundUser();
    }

    if(authentication.id != user.id){
      throw new InvalidParametersId();
    }

    return user;
  };

  public updateUser = async (input: UpdateUserInput): Promise<void> => {
    // aqui faço a validação se o input tem alguma propriedade faltando, se o id tem a quantidade de caracteres necessários, ou se existe alguma propriedade no input que não está autorizada a atualizar

    const dataUser = validateFieldsUpdate(input);

    //validação se o token é válido,
    const authentication = this.authenticator.getTokenData(input.token);


    //faço a busca pra ver se o usuário existe no banco de dados

    const user = await this.userDB.getUserById(input.id);


    if (!user.id) {
      throw new NotFoundUser();
    }

    //essa verificação serve para comparar se o token gerado na hora de criar o usuário pertence ao mesmo usuário que está sendo atualizado
    await this.userDB.updateUser(input.id, dataUser);
  };

  public deleteUser = async (input: DeleteUser): Promise<void> => {
    const { id, token } = input;
    // aqui faço a validaçãose o id tem a quantidade de caracteres necessários

    if (id.length < 24) {

      throw new InvalidId();
    }

    //validação se o token é válido,
    
    this.authenticator.getTokenData(token);

    //faço a busca pra ver se o usuário existe no banco de dados

    const user = await this.userDB.getUserById(id);

    if (!user.id) {
      throw new NotFoundUser();
    }


    await this.userDB.deleteUser(input.id);
  };
}
