import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";


import { UserDatabase } from "../data/userDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from './../services/HashManager';

export const userRouter = express.Router();

const userDB = new UserDatabase();
const hashManager = new HashManager()
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();

const userBusiness = new UserBusiness(
    userDB,
    hashManager,
    authenticator,
    idGenerator
)

const userController = new UserController(userBusiness);

userRouter.post("/signup", (req, res) => userController.signup(req, res));

userRouter.get("/check-token", (req, res)=> userController.getIsValidToken(req, res))

userRouter.post("/login", (req, res) => userController.login(req, res));

userRouter.get("/", (req, res)=> userController.getUsers(req, res))

userRouter.get("/:id", (req, res)=> userController.getUserById(req, res))

userRouter.patch("/:id", (req, res)=> userController.updateUser(req, res))

userRouter.delete("/:id", (req, res)=> userController.deleteUser(req, res))