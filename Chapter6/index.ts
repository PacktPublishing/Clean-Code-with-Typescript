// -> code with incorrect logic
// function calculateAverage(numbers: number[]): number {
//   let sum: number = 0;
//   for (let i: number = 0; i <= numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }

// -> code with debug logs (console.log)
// function calculateAverage(numbers: number[]): number {
//   let sum: number = 0;
//   for (let i: number = 0; i <= numbers.length; i++) {
//     console.log(`Index: ${i}, Value: ${numbers[i]}`); // Debugging
//     sum += numbers[i];
//   }
//   console.log(`Sum: ${sum}, Length: ${numbers.length}`);
//   return sum / numbers.length;
// }

// const averageResult = calculateAverage([1, 2, 3, 4]);
// console.log(averageResult,'this is average result')


function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) return 0; // Handle edge case
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

