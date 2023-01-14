import dotenv from "dotenv";
import { MongoClient as Mongo, Db } from "mongodb";

dotenv.config();
export const BaseDatabase = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.DB_URL || "localhost: 27017";
    const username = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;

    const client = new Mongo(url, { auth: { username, password } });

    const db = client.db("users-db");

    this.client = client;
    this.db = db;

    try {
      console.log("connected to mongodb!!")
      
    } catch (error:any) {
      console.log("Error in DB connection", error.message)
    }
   
  },
};

BaseDatabase.connect()