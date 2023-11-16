import { typeFlag } from "type-flag";
import fs from "node:fs";
import chalk from "chalk";

import {
  handleTag,
  printBytes,
  printLines,
  validateInputArgs,
} from "../lib/lib";
// jhead [opts] [paths]:
// -l for lines default 10
// -b for bytes
// -t for file Tag name (file name)
// -p for files paths

const args = typeFlag({
  lines: {
    type: Number,
    alias: "l",
    default: 10,
  },
  bytes: {
    type: Number,
    alias: "b",
  },
  tag: {
    type: Boolean,
    alias: "t",
    default: false,
  },
  paths: {
    type: [String],
    alias: "p",
    // default: () => pipedPaths,
  },
});
let { lines, bytes, tag, paths } = args.flags;

//bytes flag is prioritized as it is more specific
let mode = bytes || lines;
validateInputArgs(paths, mode);

const readFile = (filePath: string) => {
  try {
    let data = fs.readFileSync(filePath, "utf8");
    handleTag(tag, filePath);

    if (bytes) {
      printBytes(data, bytes);
    } else {
      let lineCounter = 1;
      const fileLines = data.split(/\r?\n/);
      printLines(fileLines, lineCounter, lines);
    }
  } catch (err) {
    console.error(chalk.red(err));
    process.exit(65);
  }
};

paths.forEach((path) => readFile(path));
process.exit(0);
