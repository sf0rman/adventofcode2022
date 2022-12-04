import { readFileSync } from "fs";
import { resolve } from "path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import * as utils from "../utils";
import { decodeMessagePart1, decodeMessagePart2, findIsWin, findTypePoints, getSum, getTypePoint, isWin, parse } from ".";

vi.spyOn(utils, "loadInput").mockImplementation(() =>
  readFileSync(resolve("./src/day2/test.txt"), { encoding: "utf-8" })
);

describe("day2 - part 1", () => {
  let strategyGuide;
  beforeAll(() => {
    const data = utils.loadInput(2);
    strategyGuide = parse(data).map(decodeMessagePart1);
  });

  it("Win conditions return 6", () => {
    expect(findIsWin("A", "Y")).toEqual(6);
    expect(findIsWin("B", "Z")).toEqual(6);
    expect(findIsWin("C", "X")).toEqual(6);
  });

  it("Draw conditions return 6", () => {
    expect(findIsWin("A", "X")).toEqual(3);
    expect(findIsWin("B", "Y")).toEqual(3);
    expect(findIsWin("C", "Z")).toEqual(3);
  });

  it("Lose conditions return 6", () => {
    expect(findIsWin("A", "Z")).toEqual(0);
    expect(findIsWin("B", "X")).toEqual(0);
    expect(findIsWin("C", "Y")).toEqual(0);
  });

  it("Get type score returns 1 for X", () => {
    expect(getTypePoint("X")).toEqual(1);
  });

  it("Get type score returns 2 for Y", () => {
    expect(getTypePoint("Y")).toEqual(2);
  });

  it("Get type score returns 3 for Z", () => {
    expect(getTypePoint("Z")).toEqual(3);
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

describe("day2 - part 2", () => {
  let strategyGuide;
  beforeAll(() => {
    const data = utils.loadInput(2);
    strategyGuide = parse(data).map(decodeMessagePart2);
  });

  it("X is loss", () => {
    expect(isWin("X")).toEqual(0);
  });

  it("Y is draw", () => {
    expect(isWin("Y")).toEqual(3);
  });

  it("Z is win", () => {
    expect(isWin("Z")).toEqual(6);
  });

  it("Selecting Rock returns 1", () => {
    expect(findTypePoints("A", "Y")).toEqual(1);
    expect(findTypePoints("B", "X")).toEqual(1);
    expect(findTypePoints("C", "Z")).toEqual(1);
  });

  it("Selecting Paper returns 2", () => {
    expect(findTypePoints("A", "Z")).toEqual(2);
    expect(findTypePoints("B", "Y")).toEqual(2);
    expect(findTypePoints("C", "X")).toEqual(2);
  });
  it("Selecting Scissors returns 3", () => {
    expect(findTypePoints("A", "X")).toEqual(3);
    expect(findTypePoints("B", "Z")).toEqual(3);
    expect(findTypePoints("C", "Y")).toEqual(3);
  });

  it("Draw round 1 with 4 points", () => {
    expect(strategyGuide[0].points).toEqual(4);
  });

  it("Lose round 2 with 1 point", () => {
    expect(strategyGuide[1].points).toEqual(1);
  });

  it("Win round 3 with 7 points", () => {
    expect(strategyGuide[2].points).toEqual(7);
  });

  it("total points is 12", () => {
    expect(getSum(strategyGuide)).toEqual(12);
  });
});
