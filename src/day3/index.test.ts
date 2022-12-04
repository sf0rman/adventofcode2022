import { readFileSync } from "fs";
import { resolve } from "path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import {
  getCommonGroupLetter,
  getCommonLetter,
  getPriority,
  getSum,
  parse,
  splitIntoGroups,
  splitItem
} from ".";
import * as utils from "../utils";

vi.spyOn(utils, "loadInput").mockImplementation(() =>
  readFileSync(resolve("./src/day3/test.txt"), { encoding: "utf-8" })
);

describe("day 3 - part 1", () => {
  let items;
  beforeAll(() => {
    const input = utils.loadInput(3);
    items = parse(input);
  });

  it("'vJrwpWtwJgWrhcsFMMfFFhFp' to be split into 'vJrwpWtwJgWr' and 'hcsFMMfFFhFp'", () => {
    expect(splitItem("vJrwpWtwJgWrhcsFMMfFFhFp")).toEqual(["vJrwpWtwJgWr", "hcsFMMfFFhFp"]);
  });

  it("'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL' to be split into 'jqHRNqRjqzjGDLGL' and 'rsFMfFZSrLrFZsSL'", () => {
    expect(splitItem("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL")).toEqual(["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"]);
  });

  it("'PmmdzqPrVvPwwTWBwg' to be split into 'PmmdzqPrV' and 'vPwwTWBwg'", () => {
    expect(splitItem("PmmdzqPrVvPwwTWBwg")).toEqual(["PmmdzqPrV", "vPwwTWBwg"]);
  });

  it("Common type for 'vJrwpWtwJgWrhcsFMMfFFhFp' is 'p'", () => {
    const split = splitItem("vJrwpWtwJgWrhcsFMMfFFhFp");
    expect(getCommonLetter(split)).toEqual("p");
  });

  it("Common type for 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL' is 'L'", () => {
    const split = splitItem("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL");
    expect(getCommonLetter(split)).toEqual("L");
  });

  it("Common type for 'PmmdzqPrVvPwwTWBwg' is 'P'", () => {
    const split = splitItem("PmmdzqPrVvPwwTWBwg");
    expect(getCommonLetter(split)).toEqual("P");
  });

  it("Common type for 'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn' is 'v'", () => {
    const split = splitItem("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn");
    expect(getCommonLetter(split)).toEqual("v");
  });

  it("Common type for 'ttgJtRGJQctTZtZT' is 't'", () => {
    const split = splitItem("ttgJtRGJQctTZtZT");
    expect(getCommonLetter(split)).toEqual("t");
  });

  it("Common type for 'CrZsJsPPZsGzwwsLwLmpwMDw' is 's'", () => {
    const split = splitItem("CrZsJsPPZsGzwwsLwLmpwMDw");
    expect(getCommonLetter(split)).toEqual("s");
  });

  it("p returns priority 16", () => {
    expect(getPriority("p")).toEqual(16);
  });

  it("L returns priority 38", () => {
    expect(getPriority("L")).toEqual(38);
  });

  it("P returns priority 42", () => {
    expect(getPriority("P")).toEqual(42);
  });

  it("v returns priority 22", () => {
    expect(getPriority("v")).toEqual(22);
  });

  it("t returns priority 20", () => {
    expect(getPriority("t")).toEqual(20);
  });

  it("s returns priority 19", () => {
    expect(getPriority("s")).toEqual(19);
  });

  it("sum of priorities is 157", () => {
    expect(getSum(["p", "L", "P", "v", "t", "s"])).toEqual(157);
  });
});

describe("day 3 - part 1", () => {
  let items;
  beforeAll(() => {
    const input = utils.loadInput(3);
    items = parse(input);
  });

  it("can split into groups", () => {
    expect(splitIntoGroups(items)).toEqual([
      ["vJrwpWtwJgWrhcsFMMfFFhFp", "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", "PmmdzqPrVvPwwTWBwg"],
      ["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn", "ttgJtRGJQctTZtZT", "CrZsJsPPZsGzwwsLwLmpwMDw"]
    ]);
  });

  it("for first groups, common badge is r", () => {
    expect(
      getCommonGroupLetter(["vJrwpWtwJgWrhcsFMMfFFhFp", "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", "PmmdzqPrVvPwwTWBwg"])
    ).toEqual("r");
  });

  it("for second group, common badge is Z", () => {
    expect(
      getCommonGroupLetter(["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn", "ttgJtRGJQctTZtZT", "CrZsJsPPZsGzwwsLwLmpwMDw"])
    ).toEqual("Z");
  });
});
