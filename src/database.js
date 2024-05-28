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
	/**
	 * select - select a single row from the datatbase
	 *
	 * @param {object} options
	 * @param {string} options.table - table in the database
	 * @param {string} options.field - field to search on
	 * @param {string} options.criteria - what the field should contain
	 * 
	 * @returns {object} row from the table
	 */
	async select(options) {
		const response = await this.connection.query(
			`SELECT * FROM ${options.table}
        WHERE ${options.field} = ${options.criteria}`
		);

		return response[0];
	}

	/**
	 * insert - insert a new row into the database
	 *
	 * @param {object} options
	 * @param {string} options.table - table in the database
	 * @param {object} options.values - key:value pairs column:value
	 */
	async insert(options) {
		const columns = this._getColumnNames({ tableName: options.table });
		const response = await this.connection.insert(
			`INSERT INTO ${options.table}
        VALUES ()
    );
  }

  async _getColumnNames (options) {
    const response = await this.connection.query(
      `SELECT column_name FROM information_schema.columns 
          WHERE table_name = '${options.table}'`
    );

    console.log('response: ', response);

    return response;
  }
}
