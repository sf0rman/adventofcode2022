import { readFileSync } from "fs";
import { resolve } from "path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import * as utils from "../utils";
import { Elf, getRichestElf, getTopElves, parse, sortElvesByTotalCalories, sumCalories } from ".";

vi.spyOn(utils, "loadInput").mockImplementation(() =>
  readFileSync(resolve("./src/day1/test.txt"), { encoding: "utf-8" })
);

describe("day 1", () => {
  let elfs: Elf[];
  beforeAll(() => {
    const data = utils.loadInput(1);
    const dataset = parse(data);
    elfs = dataset;
  });

  describe("part 1", () => {
    it("there are five elfs", () => {
      expect(elfs.length).toEqual(5);
    });

    it("elf 1 is carrying 6000 cals", () => {
      expect(elfs[0].total_calories).toEqual(6000);
    });

    it("elf 2 is carrying 4000 cals", () => {
      expect(elfs[1].total_calories).toEqual(4000);
    });

    it("elf 3 is carrying 11000 cals", () => {
      expect(elfs[2].total_calories).toEqual(11000);
    });

    it("elf 4 is carrying 24000 cals", () => {
      expect(elfs[3].total_calories).toEqual(24000);
    });

    it("elf 5 is carrying 10000 cals", () => {
      expect(elfs[4].total_calories).toEqual(10000);
    });

    it("elf 4 is carrying the most calories", () => {
      const richest_elf = getRichestElf(elfs);
      expect(richest_elf).toEqual(elfs[3]);
    });

    it("elf 4 is carrying 24000 calories", () => {
      const richest_elf = getRichestElf(elfs);
      expect(richest_elf.total_calories).toEqual(24000);
    });
  });

  describe("part 2", () => {
    it("Top three elves are 4, 3, 5", () => {
      const sortedElves = sortElvesByTotalCalories(elfs);
      expect(sortedElves[0].total_calories).toEqual(24000);
      expect(sortedElves[1].total_calories).toEqual(11000);
      expect(sortedElves[2].total_calories).toEqual(10000);
    });

    it("Top three elves are carrying 45000 calories in total", () => {
      const sortedElves = sortElvesByTotalCalories(elfs);
      const top3Elves = getTopElves(sortedElves, 3);
      const totalCalories = top3Elves.reduce(sumCalories, 0);
      expect(totalCalories).toEqual(45000);
    });
  });
});
