export type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};

export interface ReadonlyPerson {
  name: string;
  age: number;
}

export const readonlyPerson: ReadonlyType<ReadonlyPerson> = {
  name: 'John',
  age: 30
};

export type IsString<T> = T extends string ? true : false;

export type IsStringForString = IsString<string>;
export type IsStringForNumber = IsString<number>;

export const conditionalTypeExamples = {
  stringCheck: true as IsStringForString,
  numberCheck: false as IsStringForNumber
};
