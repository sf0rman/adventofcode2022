import { runCode } from "./runner";

type Argument = "-day" | "-part";

const args: string[] = process.argv.slice(2);

// legal arguments
const inputArgs: Argument[] = ["-day", "-part"];

class InvalidArgumentsError extends Error {
  constructor(message: string, exitCode: number) {
    super(message);
    console.error("Invalid Arguments:", message);
    process.exit(exitCode);
  }
}

const validateParameterValue = (param: string, value: string): number => {
  const temp = Number(value);
  if (temp > 25 || temp < 1) {
    throw new InvalidArgumentsError(`Invalid argument for parameter ${param}: ${temp}`, 1);
  }
  return temp;
};

/**
 * -day must be provided
 * -part is optional
 */

let day: number;
let part: number;

for (let i = 0; i < args.length; i += 2) {
  if (!inputArgs.includes(args[i] as Argument)) {
    throw new InvalidArgumentsError(`${args[i]} ${args[i + 1]}`, 1);
  }

  if (args[i] === "-day") {
    day = validateParameterValue(args[i], args[i + 1]);
  }

  if (args[i] === "-part") {
    part = validateParameterValue(args[i], args[i + 1]);
  }
}

if (!day) {
  throw new InvalidArgumentsError("Missing -day parameter value", 2);
}

runCode(day, part);
