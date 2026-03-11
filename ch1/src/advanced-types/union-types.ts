type Input = string | number;

function processInput(value: Input): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2), "number");
  }
}

processInput("hello");
processInput(3.14121);

export {};
