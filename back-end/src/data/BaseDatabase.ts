import { MongoClient as Mongo, Db } from "mongodb";

export class BaseDatabase {
  private static client: Mongo;
  private static db: Db;

  private static url = process.env.DB_URL || "localhost:27017";
  private static username = process.env.DB_USER;
  private static password = process.env.DB_PASSWORD;

  public static async connect(): Promise<void> {
    const client = new Mongo(this.url, {
      auth: { username: this.username, password: this.password },
    });
    const db = client.db("users-db");
    this.client = client;
    this.db = db;

    try {
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.log("Error in DB connection:");
    }
  }

  public static getClient(): Mongo {
    return this.client;
  }

  public static getDb(): Db {
    return this.db;
  }
}
