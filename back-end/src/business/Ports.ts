import { AuthenticationData } from "../services/Authenticator";

export interface IIdGenerator {
  generateId(): string;
}

export interface IAuthenticator {
  generateToken(id: AuthenticationData): string;
  getTokenData(token: string): AuthenticationData;
}
