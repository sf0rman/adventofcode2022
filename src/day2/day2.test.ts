import { readFileSync } from "fs";
import { resolve } from "path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import * as utils from "../utils";
import { getSum, parse } from "./day2";

vi.spyOn(utils, "loadInput").mockImplementation(() =>
  readFileSync(resolve("./src/day2/test.txt"), { encoding: "utf-8" })
);

describe("day2", () => {
  let strategyGuide;
  beforeAll(() => {
    const data = utils.loadInput(2);
    strategyGuide = parse(data);
  });

  it("Win round 1 with 8 points", () => {
    expect(strategyGuide[0].points).toEqual(8);
  });

  it("Lose round 2 with 1 point", () => {
    expect(strategyGuide[1].points).toEqual(1);
  });

  it("draw round 3 with 6 points", () => {
    expect(strategyGuide[2].points).toEqual(6);
  });

  it("total points is 15", () => {
    expect(getSum(strategyGuide)).toEqual(15);
  });
});
