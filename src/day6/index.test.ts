import { describe, expect, it } from "vitest";
import { findMarkerIndex } from ".";

describe("day 6", () => {
  describe("part 1", () => {
    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 4)).toEqual(7);
    });

    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("bvwbjplbgvbhsrlpgdmjqwftvncz", 4)).toEqual(5);
    });

    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("nppdvjthqldpwncqszvftbrmjlhg", 4)).toEqual(6);
    });

    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 4)).toEqual(10);
    });

    it("can detect marker end position example 1", () => {
      expect(findMarkerIndex("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 4)).toEqual(11);
    });
  });

  describe("part 2", () => {
    it("can detect message end position example 1", () => {
      expect(findMarkerIndex("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 14)).toEqual(19);
    });

    it("can detect message end position example 1", () => {
      expect(findMarkerIndex("bvwbjplbgvbhsrlpgdmjqwftvncz", 14)).toEqual(23);
    });

    it("can detect message end position example 1", () => {
      expect(findMarkerIndex("nppdvjthqldpwncqszvftbrmjlhg", 14)).toEqual(23);
    });

    it("can detect message end position example 1", () => {
      expect(findMarkerIndex("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 14)).toEqual(29);
    });

    it("can detect message end position example 1", () => {
      expect(findMarkerIndex("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 14)).toEqual(26);
    });
  });
});
