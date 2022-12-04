import { readFileSync } from "fs";
import { resolve } from "path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { canFullyWrap, getAllOverlapped, getAllWrapped, getGroup, hasAnyOverlap, parse } from ".";
import * as utils from "../utils";

vi.spyOn(utils, "loadInput").mockImplementation(() =>
  readFileSync(resolve("./src/day4/test.txt"), { encoding: "utf-8" })
);

describe("day 4", () => {
  let data;
  beforeAll(() => {
    data = parse(utils.loadInput(4));
  });

  describe("part 1", () => {
    it("can define group", () => {
      expect(getGroup(data[0])).toEqual([
        { from: 2, to: 4, areas: [2, 3, 4] },
        { from: 6, to: 8, areas: [6, 7, 8] }
      ]);
    });

    it("Groups with no overlaps return 0", () => {
      expect(canFullyWrap(getGroup(data[0]))).toEqual(0);
    });

    it("Groups with some overlap returns 0", () => {
      expect(canFullyWrap(getGroup(data[2]))).toEqual(0);
    });

    it("Groups where one side encompasses the other completely return 1", () => {
      expect(canFullyWrap(getGroup(data[3]))).toEqual(1);
    });

    it("There should be 2 pairs that fully overlap", () => {
      expect(data.map(getGroup).reduce(getAllWrapped, 0)).toEqual(2);
    });
  });

  describe("part 2", () => {
    it("Groups with no overlaps return 0", () => {
      expect(hasAnyOverlap(getGroup(data[0]))).toEqual(0);
    });

    it("Groups with some overlap returns 1", () => {
      expect(hasAnyOverlap(getGroup(data[2]))).toEqual(1);
    });

    it("Groups where one side encompasses the other completely return 1", () => {
      expect(hasAnyOverlap(getGroup(data[3]))).toEqual(1);
    });

    it("There should be 4 paris with some overlap", () => {
      expect(data.map(getGroup).reduce(getAllOverlapped, 0)).toEqual(4);
    });
  });
});
