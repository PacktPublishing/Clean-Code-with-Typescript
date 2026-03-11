export type User = {
  name: string;
};

export function greet(user: User): void {
  console.log(user.name.toUpperCase());
}

export function runUnsafeGreeting(): void {
  greet(undefined as unknown as User);
}
