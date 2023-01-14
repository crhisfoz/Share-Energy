import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { BaseDatabase } from "./data/BaseDatabase";

dotenv.config();

export const app = express();

//converte o resultado da requisição para json
app.use(express.json());
app.use(cors({origin: "*", credentials: true}));


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(
      `Server is running in DESAFIO-SHARENERGY-2023-01 http://localhost:${address.port}`
    );
  } else {
    console.error(`Failure upon starting server.`);
  }
});


