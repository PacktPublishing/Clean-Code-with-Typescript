export function getUserData(id: number): string | null {
  if (typeof id !== 'number' || id <= 0) {
    return null;
  }

  return `User ${id}`;
}
