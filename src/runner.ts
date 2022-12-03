import { loadInput } from "./utils";
import { getRichestElf, getTopElves, parse, sortElvesByTotalCalories, sumCalories } from "./day1/day1";

class NotYetImplementedError extends Error {
  constructor(message: string) {
    super(`NotYetImplementedError: ${message} is not yet implemented`);
    console.error(message);
  }
}

export const runCode = (day: number, part?: number) => {
  switch (day) {
    case 1:
      const input = loadInput(1);
      printResult(getRichestElf(parse(input)).total_calories);
      printResult(getTopElves(sortElvesByTotalCalories(parse(input)), 3).reduce(sumCalories, 0));
      break;
    case 2:
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

const printResult = (result: number): void => {
  console.log(result);
};
