// q
// https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.ja.md

// a
type LookUp<U, T> = U extends { type: T } ? U : never;
