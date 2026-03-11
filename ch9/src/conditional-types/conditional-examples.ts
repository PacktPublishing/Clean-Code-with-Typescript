export type IsTypeString<T> = T extends string ? "Yes, it's a string" : "No, it's not a string";

export type InferredReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

export type ExcludeType<T, U> = T extends U ? never : T;
export type CleanNonNullable<T> = T extends null | undefined ? never : T;
export type IsArray<T> = T extends any[] ? true : false;

export type OptionalIfString<T> = {
  [K in keyof T]: T[K] extends string ? T[K] | undefined : T[K];
};

export type Status<T extends number> = T extends 200 ? 'Success' : 'Error';

type MyFunction = () => number;
type AllTypes = string | number | boolean;
type MaybeNullable = string | null | undefined;

interface ConditionalUser {
  name: string;
  age: number;
}

export const conditionalExamples = {
  stringCheck: "Yes, it's a string" as IsTypeString<string>,
  numberCheck: "No, it's not a string" as IsTypeString<number>,
  inferredReturnValue: 123 as InferredReturnType<MyFunction>,
  filteredUnion: 'hello' as ExcludeType<AllTypes, boolean>,
  nonNullableValue: 'ready' as CleanNonNullable<MaybeNullable>,
  arrayCheck: true as IsArray<number[]>,
  modifiedUser: { name: undefined, age: 30 } as OptionalIfString<ConditionalUser>,
  status200: 'Success' as Status<200>,
  status404: 'Error' as Status<404>
};
