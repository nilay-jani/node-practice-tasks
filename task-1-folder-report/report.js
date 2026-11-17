import fs from "node:fs/promises";
import path from "node:path";

const folderPath = import.meta.dirname;
const files = await fs.readdir(folderPath);

console.log(`Total files: ${files.length}\n`);

for (const file of files) {
  //! TODO 1: Get file extension
  const extension = path.extname(file);

  //! TODO 2: Build full file path
  const fullPath = path.join(folderPath, file);

  //! TODO 3: Get file details
  const stats = await fs.stat(fullPath);

  //! TODO 4: Convert size to KB
  const sizeInKB = (stats.size / 1024).toFixed(1);

  //! TODO 5: Print everything
  console.log(`File is : ${file}`);
  console.log(`Extension is : ${extension}`);
  console.log(`Size in KB is : ${sizeInKB} KB`);
  console.log(`Size: ${stats.isFile()}`);
  console.log(`${stats.isDirectory()}`);
  console.log("----------------------");
}
