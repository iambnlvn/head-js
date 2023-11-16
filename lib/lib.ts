import path from "path";
import chalk from "chalk";

export const handleTag = (tag: boolean, filePath: string): void => {
  if (tag) {
    console.log(chalk.green("\n==>", path.basename(filePath), "<==\n\n"));
  }
};

export const validateInputArgs = (paths: string[], mode: number) => {
  if (paths.length === 0) {
    console.error(chalk.red("NO PATHS SPECIFIED"));
    process.exit(64);
  } else if (mode < 0 || !Number.isInteger(mode)) {
    console.error(
      chalk.red("Lines or Bytes number must be a positive integer"),
    );
    process.exit(64);
  }
};
export const printLines = (
  fileLines: string[],
  lineCounter: number,
  maxLines: number,
) => {
  for (const fileLine of fileLines) {
    if (lineCounter <= maxLines) {
      console.log(fileLine.toString());
      lineCounter++;
    }
  }
};
export const printBytes = (chars: string, maxByteCount: number) => {
  if (maxByteCount > chars.length) process.exit(64);
  console.log(chars.slice(0, maxByteCount));
};
