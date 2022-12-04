import { loadInput } from "../utils";

type Group = [string, string, string];
type Items = [string, string];

export const parse = (input: string): string[] => input.split("\r\n");

export const splitItem = (input: string): Items => [
  input.substring(0, Math.floor(input.length / 2)),
  input.substring(Math.floor(input.length / 2), input.length)
];

export const getCommonLetter = (input: Items) => input[0].split("").find((val) => input[1].includes(val));
export const getCommonGroupLetter = (input: Group) =>
  getCommonLetter([
    input[0]
      .split("")
      .filter((val) => input[1].includes(val))
      .join(""),
    input[2]
  ]);

export const splitIntoGroups = (input: string[]): Group[] => {
  const groups: Group[] = [];
  for (let i = 0; i < input.length; i += 3) {
    groups.push([input[i], input[i + 1], input[i + 2]]);
  }
  return groups;
};

/**
 * We know that charCodeAt returns 65-90 for A-Z and 97-122 for a-z
 * Subtracts 38 from capital letters or 96 for lowercase..
 * @param c single character (or first character in string will be used)
 * @returns number in range 1-52 (a-z as 1-26) (A-Z as 27-52)
 */
export const getPriority = (c: string): number => (c.match(/[A-Z]/) ? c.charCodeAt(0) - 38 : c.charCodeAt(0) - 96);

const sumCharCodes = (total: number, current: string) => (total += getPriority(current));

export const getSum = (input: string[]): number => input.reduce(sumCharCodes, 0);

const part1 = (input: string) => getSum(parse(input).map(splitItem).map(getCommonLetter));
const part2 = (input: string) => getSum(splitIntoGroups(parse(input)).map(getCommonGroupLetter));

// run day
console.log("Day 3");
const start1 = Date.now();
console.log("Part 1:", part1(loadInput(3)));
console.log("Runtime:", Date.now() - start1);
const start2 = Date.now();
console.log("Part 2:", part2(loadInput(3)));
console.log("Runtime:", Date.now() - start2);
