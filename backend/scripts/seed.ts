import { config } from "../src/config";
import { exec } from "child_process";
import * as fs from "fs";
import * as path from "path";

const dataDir = "./scripts/data";

function runMongoImport(collection: string, file: string) {
  return new Promise((resolve, reject) => {
    const command = `mongoimport --db ${config.DB.NAME} --collection ${collection} --file ${file} --jsonArray`;

    exec(command, (error, stdout, _stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function importData() {
  try {
    const filenames = fs.readdirSync(dataDir);
    let importPromises: Promise<void>[] = [];

    for (const filename of filenames) {
      const collectionName = path.basename(filename, path.extname(filename));
      const filePath = path.join(dataDir, filename);

      // Add the mongoimport subprocess to the importPromises array
      importPromises.push(
        runMongoImport(collectionName, filePath).then(() => {
          console.log(`Imported data into the ${collectionName} collection.`);
        })
      );
    }

    // Wait for all mongoimport subprocesses to complete
    await Promise.all(importPromises);
    console.log("Data imported successfully!");
  } catch (error) {
    console.error("Error importing data:", error);
  }
}
importData();
