import { readFileSync } from "fs";
import { resolve } from "path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import * as utils from "../utils";
import { detectTopItems, moveItems, parse } from ".";

vi.spyOn(utils, "loadInput").mockImplementation(() =>
  readFileSync(resolve("./src/day5/test.txt"), { encoding: "utf-8" })
);

describe("day 5", () => {
  describe("part 1", () => {
    it("Does create starting point", () => {
      const [stacks, instructions] = parse(utils.loadInput(5));
      expect(stacks).toEqual([["Z", "N"], ["M", "C", "D"], ["P"]]);
    });

    it("does create instructionset", () => {
      const [stacks, instructions] = parse(utils.loadInput(5));
      expect(instructions).toEqual([
        { count: 1, from: 1, to: 0 },
        { count: 3, from: 0, to: 2 },
        { count: 2, from: 1, to: 0 },
        { count: 1, from: 0, to: 1 }
      ]);
    });

    it("Can move a single item", () => {
      expect(moveItems({ count: 1, from: 1, to: 0 }, [["Z", "N"], ["M", "C", "D"], ["P"]])).toEqual([
        ["Z", "N", "D"],
        ["M", "C"],
        ["P"]
      ]);
    });

    it("Can move several items", () => {
      expect(moveItems({ count: 2, from: 1, to: 0 }, [["Z", "N"], ["M", "C", "D"], ["P"]])).toEqual([
        ["Z", "N", "D", "C"],
        ["M"],
        ["P"]
      ]);
    });

    it("Can detect top items", () => {
      expect(detectTopItems([["Z", "N", "D"], ["M", "C"], ["P"]])).toEqual("DCP");
    });

    it("End result should be 'CMZ'", () => {
      const [stacks, instructions] = parse(utils.loadInput(5));
      instructions.forEach((inst) => moveItems(inst, stacks));
      const result = detectTopItems(stacks);
      expect(result).toEqual("CMZ");
    });
  });
});
