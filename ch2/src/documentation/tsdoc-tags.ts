export type User = {
  id: number;
  name: string;
};

/**
 * Concatenates two strings.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 */
export function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

/**
 * @returns {Promise<User>} A promise that resolves to the user data.
 */
export async function getUserData(userId: number): Promise<User> {
  const response = await fetch(`/api/users/${userId}`);
  return response.json() as Promise<User>;
}

/**
 * Converts a temperature from Celsius to Fahrenheit.
 * @remarks The formula used for conversion is (Celsius * 9/5) + 32.
 */
export function convertCelsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

/**
 * Calculates the area of a rectangle.
 * @deprecated Use the `calculateRectangleArea` function instead.
 */
export function getArea(width: number, height: number): number {
  return width * height;
}

export function calculateRectangleArea(width: number, height: number): number {
  return width * height;
}
