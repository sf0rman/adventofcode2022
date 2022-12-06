import { loadInput } from "../utils";

export const findMarkerIndex = (input: string) => {
  for (let i = 3; i < input.length; i++) {
    if (new Set([input.charAt(i - 3), input.charAt(i - 2), input.charAt(i - 1), input.charAt(i)]).size === 4) {
      return i + 1;
    }
  }
};

console.log("Day 6");
const start1 = Date.now();
console.log("Part 2:", findMarkerIndex(loadInput(6)));
console.log("Runtime:", Date.now() - start1);
