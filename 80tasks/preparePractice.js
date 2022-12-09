/**
 *  Это node.js программа, которая подготавливает пространство для практики.
 *  Копирует файлы задач в нужные директории (перезаписывая старые решения)
 */

import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = __dirname + "/backupOfTasks";
const destinationPath = __dirname + "/todo";

await fs.cp(sourcePath, destinationPath, {
  recursive: true,
  force: true
});
