import { readFileSync } from "fs";
import { resolve } from "path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import * as utils from "../utils";
import { Elf, getRichestElf, parse } from "./day1";

vi.spyOn(utils, "loadInput").mockImplementation(() =>
  readFileSync(resolve("./src/day1/test.txt"), { encoding: "utf-8" })
);

declare module "vitest" {
  export interface TestContext {
    elfs?: Elf[];
  }
}

describe("day1", () => {
  let elfs: Elf[];
  beforeAll(() => {
    const data = utils.loadInput(1);
    const dataset = parse(data);
    elfs = dataset;
  });

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
    expect(richest_elf.total_calories).toEqual(24000);
  });
});
