export class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;

  private constructor() {}

  static getInstance(): DatabaseConnection {
    if (DatabaseConnection.instance === null) {
      DatabaseConnection.instance = new DatabaseConnection();
    }

    return DatabaseConnection.instance;
  }

  query(sql: string): string {
    return `Executing query: ${sql}`;
  }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

export const singletonSharesInstance = db1 === db2;
export const singletonExample = db1.query('SELECT * FROM users');
