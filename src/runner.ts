import * as day1 from "./day1/day1";
import * as day2 from "./day2/day2";
import { loadInput } from "./utils";

class NotYetImplementedError extends Error {
  constructor(message: string) {
    super(`NotYetImplementedError: ${message} is not yet implemented`);
    console.error(message);
  }
}

/**
 * We know that all challenges result in a number as the final answer
 * @param result output of the days challenge
 */
const printResult = (result: number): void => {
  console.log(result);
};

export const runCode = (day: number, part?: number) => {
  const input = loadInput(day);
  switch (day) {
    case 1:
      printResult(day1.part1(input));
      printResult(day1.part2(input));
      break;
    case 2:
      printResult(day2.part1(input));
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    default:
      throw new NotYetImplementedError(part ? `day ${day} part ${part}` : `day ${day}`);
  }
};
