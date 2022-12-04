import { loadInput } from "../utils";

type Theirs = "A" | "B" | "C";
type Response = "X" | "Y" | "Z";

type ITypeScore = {
  [key in Response]: number;
};

type IWinScore = {
  [key in Response]: number;
};

const TypeScore: ITypeScore = {
  X: 1,
  Y: 2,
  Z: 3
} as const;

const WinScore: IWinScore = {
  X: 0,
  Y: 3,
  Z: 6
} as const;

export interface Decoded {
  theirs: Theirs;
  response: Response;
  points: number;
}

export const parse = (input: string): string[] => {
  return input.split("\r\n");
};

export const decodeMessagePart1 = (message: string): Decoded => {
  const opt = message.split(" ") as [Theirs, Response];
  return {
    theirs: opt[0],
    response: opt[1],
    points: findIsWin(opt[0], opt[1]) + getTypePoint(opt[1])
  };
};

export const decodeMessagePart2 = (message: string): Decoded => {
  const opt = message.split(" ") as [Theirs, Response];
  return {
    theirs: opt[0],
    response: opt[1],
    points: isWin(opt[1]) + findTypePoints(opt[0], opt[1])
  };
};

export const isWin = (r: Response): number => WinScore[r];
export const getTypePoint = (r: Response): number => TypeScore[r];

export const findIsWin = (t: Theirs, r: Response): number => {
  if ((t === "A" && r == "Y") || (t === "B" && r === "Z") || (t === "C" && r === "X")) {
    return 6;
  }
  if ((t === "A" && r == "X") || (t === "B" && r === "Y") || (t === "C" && r === "Z")) {
    return 3;
  }
  if ((t === "A" && r == "Z") || (t === "B" && r === "X") || (t === "C" && r === "Y")) {
    return 0;
  }
};

export const findTypePoints = (t: Theirs, r: Response): number => {
  if ((t === "A" && r == "Y") || (t === "B" && r === "X") || (t === "C" && r === "Z")) {
    return 1;
  }
  if ((t === "A" && r == "Z") || (t === "B" && r === "Y") || (t === "C" && r === "X")) {
    return 2;
  }
  if ((t === "A" && r == "X") || (t === "B" && r === "Z") || (t === "C" && r === "Y")) {
    return 3;
  }
};

export const getSum = (input: Decoded[]) => input.reduce(sumTotal, 0);

const sumTotal = (total: number, current: Decoded) => (total += current.points);

export const part1 = (input: string) => getSum(parse(input).map(decodeMessagePart1));
export const part2 = (input: string) => getSum(parse(input).map(decodeMessagePart2));

// run day
console.log("Day 2");
const start1 = Date.now();
console.log("Part 1:", part1(loadInput(2)));
console.log("Runtime:", Date.now() - start1);
const start2 = Date.now();
console.log("Part 2:", part2(loadInput(2)));
console.log("Runtime:", Date.now() - start2);
