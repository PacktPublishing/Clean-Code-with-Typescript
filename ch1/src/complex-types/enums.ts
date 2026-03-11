enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum ErrorCode {
  NotFound = 404,
  Unauthorized = 401,
  InternalServerError = 500,
}

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

const playerDirection: Direction = Direction.Up;
const error: ErrorCode = ErrorCode.NotFound;
const today: DayOfWeek = DayOfWeek.Saturday;

console.log("Player is facing:", playerDirection);
console.log("Error code:", error);
console.log("Is today a weekend?", isWeekend(today));

export {};
