import { vi, describe, it, expect } from "vitest";
import * as utils from "../utils";
import { readFileSync } from "fs";
import { resolve } from "path";
import { findMarkerIndex, findMessageMarker } from ".";

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

  describe("part 2", () => {
    it("can detect message end position example 1", () => {
      expect(findMessageMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toEqual(19);
    });

    it("can detect message end position example 1", () => {
      expect(findMessageMarker("bvwbjplbgvbhsrlpgdmjqwftvncz")).toEqual(23);
    });

    it("can detect message end position example 1", () => {
      expect(findMessageMarker("nppdvjthqldpwncqszvftbrmjlhg")).toEqual(23);
    });

    it("can detect message end position example 1", () => {
      expect(findMessageMarker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toEqual(29);
    });

    it("can detect message end position example 1", () => {
      expect(findMessageMarker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toEqual(26);
    });
  })
});
