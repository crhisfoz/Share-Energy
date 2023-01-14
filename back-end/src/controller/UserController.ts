import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {
  validateLoginInput,
  validateToken,
  validateUserInput,
} from "./userControllerSerializer";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}
  public signup = async (req: Request, res: Response)=> {
    try {
      const message = "Success: User Created";
      const input = {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        cpf: req.body.cpf,
        role: req.body.role,
      };
      //validação de propriedades do objeto input que vem no body da requisição
      validateUserInput(input);

      //aguardando criação do user e retorno do token
      const token = await this.userBusiness.signup(input);

      res.status(201).send({ message, token });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getIsValidToken = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      validateToken(token);

      const Isvalid = await this.userBusiness.getIsValidToken(token);
      
      res.status(200).send({Isvalid });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const message = "LOGIN, SUCCESSFULL ";
      const input = {
        username: req.body.username,
        password: req.body.password,
      };

      //validação de propriedades do objeto input que vem no body da requisição
      validateLoginInput(input);

      const newToken = await this.userBusiness.login(input);

      res.status(200).send({ message, newToken });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userBusiness.getUsers();

      res.status(200).send(users);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    try {

      const input =  {
        id: req.params.id,
        token: req.headers.authorization as string
      }

      validateToken(input.token)
      const user = await this.userBusiness.getUserById(input);

      res.status(200).send(user);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public updateUser = async (req: Request, res: Response) => {
    try {
      const message = "Success: User Updated";
      const input = {
        token: req.headers.authorization as string,
        id: req.params.id,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
      };

      //validação de token de autorização, caso não seja enviado já encerra a requisição

      validateToken(input.token);

      await this.userBusiness.updateUser(input);
      res.status(200).send({ message });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public deleteUser = async (req: Request, res: Response)=> {
    try {
      const message = "Success User Deleted";
      const input = {
        token: req.headers.authorization as string,
        id: req.params.id,
      };

  
      //validação de token de autorização, caso não seja enviado já encerra a requisição

      validateToken(input.token);

      await this.userBusiness.deleteUser(input);
      res.status(200).send({ message });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };
}
