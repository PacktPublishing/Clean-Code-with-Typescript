export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function ensureValidEmail(userInputEmail: string): void {
  if (!validateEmail(userInputEmail)) {
    throw new Error('Invalid email format.');
  }
}
