import { loadInput, Optional } from "../utils";

export interface Elf {
  items: number[];
  total_calories: number;
  rawInput: string;
}

export const parse = (input: string): Elf[] => {
  return splitPerElf(input).map(createElf);
};

export const getRichestElf = (elfs: Elf[]): Elf => elfs.reduce(compare, undefined);

const createElf = (raw: string): Elf => ({
  items: splitPerItem(raw),
  total_calories: splitPerItem(raw).reduce(sum, 0),
  rawInput: raw
});

const splitPerElf = (input: string): string[] => input.split("\r\n\r\n");

const splitPerItem = (input: string): number[] => input.split("\r\n").map((str: string) => parseInt(str.trim()));

const sum = (a: number, b: number) => a + b;

const compare = (max: Optional<Elf>, current: Elf) =>
  !max || current.total_calories > max?.total_calories ? current : max;

export const sumCalories = (total: number, current: Elf) => (total += current.total_calories);

export const sortElvesByTotalCalories = (elfs: Elf[]) => elfs.sort((a, b) => b.total_calories - a.total_calories);

export const getTopElves = (elfs: Elf[], count: number) => elfs.slice(0, count);

export const part1 = (input: string) => getRichestElf(parse(input)).total_calories;
export const part2 = (input: string) => getTopElves(sortElvesByTotalCalories(parse(input)), 3).reduce(sumCalories, 0);

// run day
console.log("Day 1");
const start1 = Date.now();
console.log("Part 1:", part1(loadInput(1)));
console.log("Runtime:", Date.now() - start1);
const start2 = Date.now();
console.log("Part 2:", part2(loadInput(1)));
console.log("Runtime:", Date.now() - start2);
