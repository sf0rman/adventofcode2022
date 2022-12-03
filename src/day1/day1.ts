import { Optional } from "../utils";

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
