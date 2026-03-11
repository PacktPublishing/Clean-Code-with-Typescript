export type MakeOptional<T> = {
  [Key in keyof T]?: T[Key];
};

export type MakeReadOnly<T> = {
  readonly [Key in keyof T]: T[Key];
};

export type ConvertToString<T> = {
  [Key in keyof T]: string;
};

export type TransformNumbersToStrings<T> = {
  [Key in keyof T]: T[Key] extends number ? string : T[Key];
};

export interface MappedUser {
  name: string;
  age: number;
  isActive: boolean;
}

export type OptionalUser = MakeOptional<MappedUser>;
export type ReadOnlyUser = MakeReadOnly<MappedUser>;
export type StringifiedUser = ConvertToString<MappedUser>;
export type TransformedUser = TransformNumbersToStrings<MappedUser>;

export const mappedTypeExamples = {
  optionalUser: { name: 'Alice' } as OptionalUser,
  readOnlyUser: { name: 'Alice', age: 25, isActive: true } as ReadOnlyUser,
  stringifiedUser: { name: 'Alice', age: '25', isActive: 'true' } as StringifiedUser,
  transformedUser: { name: 'Alice', age: '25', isActive: true } as TransformedUser
};
