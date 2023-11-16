# Project Name

js head

# Description

A simple command line tool to print the first few lines of a file, inspired by the Unix head command
Runtime: [Bun](https://bun.sh)

# Usage

Install the dependencies with `bun install`

Run `bun exec | ./jhead [options] [paths]`

options:

-l, --lines: number of lines to print type: number default: 10
-b, --bytes: number of bytes to print type: number
-t, --tag: print the tag | file name type: boolean default: false
-p, --paths: files path | file name type: string[]

note: if both -l and -b are specified, -l will be ignored and -b will be used as default as it is more specific
example: `bun exec | ./jhead -l 10 -t -p README.md`
