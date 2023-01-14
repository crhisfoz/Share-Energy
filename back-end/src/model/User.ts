import { InvalidCPF, InvalidEmail, InvalidPassword, InvalidRole } from "../error/customError";
import { ROLE_TYPE } from "./userTypes";

export class User {
  //regex para validar email
  private _emailRegeX: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //regex para validar cpf
  private _cpfRegex: RegExp =
    /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
      //regex para validar password
    private _passwordRegex: RegExp =
    /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,20}$/;

  constructor(
    private userName: string,
    private name: string,
    private email: string,
    private password: string,
    private phone: string,
    private address: string,
    private cpf: string,
    private role: ROLE_TYPE = ROLE_TYPE.NORMAL,
  ) {
    this.setCPF(cpf);
    this.setEmail(email);
    this.setPassword(password);
    this.setRole(role);
  }

  public getUserName(){
    return this.userName
  }
  public getName() {
    return this.name;
  }
  
  public getEmail() {
    return this.email;
  }
  public getPassword() {
    return this.password;
  }
  public getPhone(){
    return this.phone
  }
  public getAddress() {
    return this.address;
  }
  public getCpf() {
    return this.cpf;
  }
  public getRole() {
    return this.role;
  }

  public setEmail(email: string) {
    const result = this._emailRegeX.test(email);
    if (!result) throw new InvalidEmail();
  }

  public setCPF(cpf: string) {
    const result = this._cpfRegex.test(String(cpf));
    if (!result) throw new InvalidCPF();
  }
  public setPassword(password: string) {
    const result = this._passwordRegex.test(password);
    if (!result) throw new InvalidPassword();
  }

  public setRole(role: ROLE_TYPE) {
    if (role.trim().toLowerCase() === ROLE_TYPE.NORMAL) {
      this.role = ROLE_TYPE.NORMAL;
    } else if (role.trim().toLowerCase() === ROLE_TYPE.ADMIN) {
      this.role = ROLE_TYPE.ADMIN;
    } else if (
      role.trim().toLowerCase() !== ROLE_TYPE.NORMAL &&
      role.trim().toLowerCase() !== ROLE_TYPE.ADMIN
    ) {
      throw new InvalidRole();
    }
  }
  

}