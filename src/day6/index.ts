import { loadInput } from "../utils";

const getCharacterList = (input: string, pos: number, len: number) => input.slice(pos - len, pos).split("");

export const findMarkerIndex = (input: string, length: number) => {
  for (let i = length - 1; i < input.length; i++) {
    if (new Set(getCharacterList(input, i, length)).size === length) {
      return i;
    }
  }
};

console.log("Day 6");
const start1 = Date.now();
console.log("Part 1:", findMarkerIndex(loadInput(6), 4));
console.log("Runtime:", Date.now() - start1);
console.log("Day 6");
const start2 = Date.now();
console.log("Part 2:", findMarkerIndex(loadInput(6), 14));
console.log("Runtime:", Date.now() - start2);