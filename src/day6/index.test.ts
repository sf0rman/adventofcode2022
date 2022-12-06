import { vi, describe, it, expect } from "vitest";
import * as utils from "../utils";
import { readFileSync } from "fs";
import { resolve } from "path";
import { findMarkerIndex } from ".";

describe("day 6", () => {
  describe("part 1", () => {
    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toEqual(7);
    });

    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("bvwbjplbgvbhsrlpgdmjqwftvncz")).toEqual(5);
    });

    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("nppdvjthqldpwncqszvftbrmjlhg")).toEqual(6);
    });

    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toEqual(10);
    });

    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toEqual(11);
    });
  });
});
