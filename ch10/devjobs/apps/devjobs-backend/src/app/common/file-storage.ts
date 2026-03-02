import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export class FileStorage<T> {
  private filePath: string;

  constructor(filename: string) {
    this.filePath = join(process.cwd(), "apps/devjobs-backend/data", filename);
  }

  private ensureFileExists() {
    if (!existsSync(this.filePath)) {
      writeFileSync(this.filePath, JSON.stringify([], null, 2));
    }
  }

  read(): T[] {
    this.ensureFileExists();
    const content = readFileSync(this.filePath, "utf-8");
    return JSON.parse(content) as T[];
  }

  write(data: T[]) {
    writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }
}
