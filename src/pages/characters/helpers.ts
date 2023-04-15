import fs from "fs";
import path from "path";

/** @returns `['yoshi.json', 'toad.json', ...]` */
export function getFileList(): string[] {
  return fs.readdirSync(path.resolve("dataDir"));
}

export function readJsonFile(filePath: string): string {
  return fs.readFileSync(path.resolve(filePath), "utf-8");
}
