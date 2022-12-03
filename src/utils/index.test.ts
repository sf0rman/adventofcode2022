import { describe, it, expect } from "vitest";
import * as utils from ".";

describe("loadInput", () => {
  it("loads data from file", () => {
    const data = utils.loadInput(1);
    expect(data).toBeDefined();
    expect(typeof data).toEqual("string");
  });

  it("throws error if invalid", () => {
    expect(() => utils.loadInput(26)).toThrowError();
  });
});
