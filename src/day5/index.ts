import { loadInput } from "../utils";

type Stacks = Array<Array<string>>;

interface Instruction {
  count: number;
  from: number;
  to: number;
}

interface Decoded {
  stacks: Stacks;
  instructions: Instruction[];
}

export const parse = (input: string): [Stacks, Instruction[]] => {
  const [s, i] = input.split("\r\n\r\n");
  return [createStacks(s), createInstructionSet(i)];
};

const rotateMatrix = (matrix) => matrix[0].map((_, i) => matrix.map((row) => row[i]));

const createStacks = (input: string): Stacks =>
  rotateMatrix(input.split("\r\n").reverse().slice(1).map(buildSingleStack)).map(clearNestedEmpty);

const clearNestedEmpty = (row) => row.filter((n: string) => !n.match(/\s/));

const buildSingleStack = (input) => {
  const tempArr = [];
  for (let i = 1; i < input.length; i += 4) {
    tempArr.push(input.charAt(i));
  }
  return tempArr;
};

const createInstructionSet = (input: string): Instruction[] =>
  input.split("\r\n").map(decodeLine).map(createInstruction);

const decodeLine = (input: string): string[] =>
  input
    .split(/[move|from|to]/)
    .map((str) => str.trim())
    .filter((n) => n);

const createInstruction = (input: string[]): Instruction => ({
  count: Number(input[0]),
  from: Number(input[1]) - 1,
  to: Number(input[2]) - 1
});

const moveItem = (from: number, to: number, stacks: Stacks) => {
  const moved = stacks[from].pop();
  stacks[to].push(moved);
};

export const moveItemsSingular = (instruction: Instruction, stacks: Stacks) => {
  for (let i = 0; i < instruction.count; i++) {
    moveItem(instruction.from, instruction.to, stacks);
  }
  return stacks;
};

export const moveItemsBulk = (instruction: Instruction, stacks: Stacks) => {
  const moved = stacks[instruction.from].splice(
    stacks[instruction.from].length - instruction.count,
    stacks[instruction.from].length
  );

  stacks[instruction.to] = [...stacks[instruction.to], ...moved];
  return stacks;
};

export const detectTopItems = (stacks: Stacks) => stacks.map((col) => col[col.length - 1]).join("");

// run day
console.log("Day 5");
const start1 = Date.now();
const [stacks1, instructions1] = parse(loadInput(5));
instructions1.forEach((inst) => moveItemsSingular(inst, stacks1));
console.log("Part 2:", detectTopItems(stacks1));
console.log("Runtime:", Date.now() - start1);


//Part 2
const start2 = Date.now();
const [stacks2, instructions2] = parse(loadInput(5));
instructions2.forEach((inst) => moveItemsBulk(inst, stacks2));
console.log("Part 2:", detectTopItems(stacks2));
console.log("Runtime:", Date.now() - start2);
