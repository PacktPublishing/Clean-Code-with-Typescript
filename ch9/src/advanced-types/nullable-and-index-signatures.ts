export function greet(name: string | null): string {
  return name ? `Hello, ${name}` : 'Hello, stranger';
}

export interface StringDictionary {
  [key: string]: string;
}

export const dictionary: StringDictionary = {
  hello: 'world',
  goodbye: 'everyone'
};

export const greetingExamples = [greet('Alice'), greet(null)];
