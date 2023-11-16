# Project Name

js head

# Description

A simple command line tool to print the first few lines of a file, inspired by the Unix head command.<br>
Runtime: [Bun](https://bun.sh)

# Usage

Install the dependencies with 
```bash
bun install
```

Run 
```bash
bun exec | ./jhead [options] [paths]
```
options:

-l, --lines: number of lines to print type: number default: 10<br>
-b, --bytes: number of bytes to print type: number<br>
-t, --tag: print the tag | file name type: boolean default: false<br>
-p, --paths: files path | file name type: string[]<br>
<br>
note: if both -l and -b are specified, -l will be ignored and -b will be used as default as it is more specific<br><br>
example: 
```
bun exec && ./jhead -l 11 -t -p README.md
```
![js-headexemple](https://github.com/iambnlvn/head-js/assets/97989036/82f3360c-e6ae-47da-8581-547a1b807be7)

Built using [type-flag](https://github.com/privatenumber/type-flag).

