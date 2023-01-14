import * as jwt from "jsonwebtoken";
import { ExpiredToken, InvalidToken } from "../error/customError";
import { ROLE_TYPE } from "../model/userTypes";

export type AuthenticationData = {
  id: string;
  role: ROLE_TYPE;
};

export class Authenticator {
  public generateToken = (payload: AuthenticationData): string => {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    });
    return token;
  };

  public getTokenData = (token: string): AuthenticationData => {
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
      ) as AuthenticationData;

      return payload;
    } catch (error: any) {
      if (error.message === "jwt expired") {
        throw new ExpiredToken();
      }
      throw new InvalidToken();
    }
  };
}
