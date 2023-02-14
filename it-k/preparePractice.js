/**
 *  Это node.js программа, которая подготавливает пространство для практики.
 *  Копирует файлы задач в нужные директории (перезаписывая старые решения)
 */

import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tasksInAnki from './tasksThatAreAlreadyInAnki.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jetbrainsUrl = 'jetbrains://web-storm/navigate/reference?project=jsPractice&path=';
const pathToStartScanning = __dirname;
const dirNameWithTasks = "tasks_descriptions";
let pathsToCopyTasks = [];

const getPathsToAllTasksFolders = async (folder) => {
  const dirents = await fs.readdir(folder, { withFileTypes: true });
  const dirs = dirents.filter((dirent) => dirent.isDirectory());

  for (const dir of dirs) {
    if (dir.name === dirNameWithTasks) {
      const pathsPair = {
        sourcePath: folder + "/" + dir.name,
        destinationPath: folder.toString()
      };
      pathsToCopyTasks.push(pathsPair);
    }
    await getPathsToAllTasksFolders(folder + "/" + dir.name);
  }
};
const copyTasksToDestinationsPaths = async (pathsToCopyTasks) => {
  for (const pathsPair of pathsToCopyTasks) {
    await fs.cp(pathsPair.sourcePath, pathsPair.destinationPath, {
      recursive: true,
      force: true
    });
  }
};


const theseTasksAreNotInAnki = async (paths) => {
  const tasksPaths = paths.map((value) => value.destinationPath)
  const tasksAreNotInAnki = [];

  for (const dir of tasksPaths) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });


    dirents.forEach((dirent) => {
      if(dirent.isFile() && dirent.name.includes('.js')){
        const mdnFolderPath = dir.substring(
          dir.indexOf("mdn")
        );
        const urlForAnki = jetbrainsUrl + mdnFolderPath +'/'+dirent.name//mdn/JavaScript/Reference/Global_Objects/Array/at/1_task.js

        if(!tasksInAnki.includes(urlForAnki)){
          tasksAreNotInAnki.push(urlForAnki)
        }
      }
    });
  }
  return tasksAreNotInAnki;
};

await getPathsToAllTasksFolders(pathToStartScanning);
await copyTasksToDestinationsPaths(pathsToCopyTasks);
const tasksAreNotInAnki = await theseTasksAreNotInAnki(pathsToCopyTasks);
console.log(tasksAreNotInAnki)
