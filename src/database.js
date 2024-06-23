import * as dotenv from "@dotenvx/dotenvx";
import * as mariadb from "mariadb";

dotenv.config();

export default class Database {
  constructor() {
    this.connection = this.createConnection();
  }

  async createConnection() {
    const connection = await mariadb.createConnection({
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      rowsAsArray: true,
      socketPath: process.env.DB_SOCKET,
      trace: true,
    });

    return connection;
  }
}
