type Theirs = "A" | "B" | "C";
type Response = "X" | "Y" | "Z";

export interface Options {
  theirs: Theirs;
  response: Response;
  points: number;
}

export const parse = (input: string): Options[] => {
  return input.split("\r\n").map((row) => {
    const opt = row.split(" ");
    return {
      theirs: opt[0] as Theirs,
      response: opt[1] as Response,
      points: winCondition(opt[0] as Theirs, opt[1] as Response) + getResponsePoints(opt[1] as Response)
    };
  });
};

const getResponsePoints = (selection: Response): number => {
  switch (selection) {
    case "X":
      return 1;
    case "Y":
      return 2;
    case "Z":
      return 3;
  }
};

const winCondition = (t: Theirs, r: Response) => {
  switch (t) {
    case "A":
      switch (r) {
        case "X":
          return 3;
        case "Y":
          return 6;
        case "Z":
          return 0;
      }
    case "B":
      switch (r) {
        case "X":
          return 0;
        case "Y":
          return 3;
        case "Z":
          return 6;
      }
    case "C":
      switch (r) {
        case "X":
          return 6;
        case "Y":
          return 0;
        case "Z":
          return 3;
      }
  }
};

export const getSum = (input: Options[]) => input.reduce(sumTotal, 0);
const sumTotal = (total, current) => (total += current.points);
