import { loadInput } from "../utils";

const getCharacterList = (input: string, pos: number, len: number) => input.slice(pos - len, pos).split("");

export const findMarkerIndex = (input: string) => {
  for (let i = 3; i < input.length; i++) {
    if (new Set(getCharacterList(input, i, 4)).size === 4) {
      return i;
    }
  }
};

export const findMessageMarker = (input: string) => {
  for (let i = 14; i < input.length; i++) {
    if (new Set(getCharacterList(input, i, 14)).size === 14) {
      return i;
    }
  }
};

console.log("Day 6");
const start1 = Date.now();
console.log("Part 1:", findMarkerIndex(loadInput(6)));
console.log("Runtime:", Date.now() - start1);
console.log("Day 6");
const start2 = Date.now();
console.log("Part 2:", findMessageMarker(loadInput(6)));
console.log("Runtime:", Date.now() - start2);
