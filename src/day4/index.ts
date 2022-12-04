import { loadInput } from "../utils";

interface Section {
  from: number;
  to: number;
  areas: number[];
}

type Group = [Section, Section];

export const parse = (input: string): string[] => input.split("\r\n");

export const getGroup = (input: string): Group => input.split(",").map(createSection) as Group;

export const createArea = (from: number, to: number): number[] => {
  const list = [];
  for (let i = from; i <= to; i++) {
    list.push(i);
  }
  return list;
};

export const createSection = (input: string): Section => {
  const range = input.split("-");
  const from = parseInt(range[0]);
  const to = parseInt(range[1]);

  return {
    from,
    to,
    areas: createArea(from, to)
  };
};

export const canFullyWrap = (group: Group) => {
  if (group[0].from <= group[1].from && group[0].to >= group[1].to) {
    return 1;
  }
  if (group[1].from <= group[0].from && group[1].to >= group[0].to) {
    return 1;
  }
  return 0;
};

export const hasAnyOverlap = (group: Group): number =>
  group[0].areas.find((val) => group[1].areas.includes(val)) ? 1 : 0;

export const getAllWrapped = (total: number, current: Group) => (total += canFullyWrap(current));
export const getAllOverlapped = (total: number, current: Group) => (total += hasAnyOverlap(current));

const part1 = (input: string) => parse(loadInput(4)).map(getGroup).reduce(getAllWrapped, 0);
const part2 = (input: string) => parse(loadInput(4)).map(getGroup).reduce(getAllOverlapped, 0);

// run day
console.log("Day 2");
const start1 = Date.now();
console.log("Part 1:", part1(loadInput(3)));
console.log("Runtime:", Date.now() - start1);
const start2 = Date.now();
console.log("Part 2:", part2(loadInput(3)));
console.log("Runtime:", Date.now() - start2);
