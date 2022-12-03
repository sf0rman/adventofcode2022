import { readFileSync } from "fs";
import { resolve } from "path";

export class LoadInputError extends Error {
  constructor(message: string) {
    super(message);
    console.error("LoadInputError", message);
  }
}

/**
 *
 * @param day Day of month for Advent
 * @returns String representation of input data.
 */
export const loadInput = (day: number): string => {
  try {
    return readFileSync(resolve(`./input/day${day}.txt`), { encoding: "utf-8" });
  } catch (err: unknown) {
    throw new LoadInputError("Unable to load input file");
  }
};

export type Optional<T> = T | undefined;
