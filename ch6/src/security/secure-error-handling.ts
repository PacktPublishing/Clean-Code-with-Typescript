export type ErrorLogger = (error: unknown) => void;

export function logError(error: unknown): void {
  console.error('Secure log entry:', error);
}

export function handleSecurely(
  callback: () => void,
  logger: ErrorLogger = logError
): void {
  try {
    callback();
  } catch (error) {
    console.error('An error occurred. Please try again later.');
    logger(error);
  }
}
