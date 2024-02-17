// q
// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ja.md

// a
// https://www.typescriptlang.org/play?ssl=25&ssc=64&pln=25&pc=1#code/PQKgUABBCMAsEFoIDECWAnAzgFwgewDMIBBddAQwE9JEE76aAjSkgO2wAs9WXkBXCAAoAAuXYE+ASggBiQLhKgLF9Z5MlTA0ZmiICuYwPKq6qIFlEwOhKAAwAqpwEkMgdeVAigyA15UBRDIEAGQLoMgOwZAAOZyPgdYZAW4ZARYZAMYZAYoYPQGj1K0AV+MBNBlM0LGwAHnMAPmtAfO1AUYjAdQZAPwY4wCAGAwhAaPlACQZABwZALH+y00bsTBpsSgAHAFMIFXRoCABeCABtAHJyUYAaCFHGKZmAY1GAXVaO7t6AJkGRgGZpzenoVbWuiA5O8gATfqGknBTe6HSIYGAIToAPLoXsTquINg8BBGN1xqNTt0LtdtncMA8ti83h9vp1fv9AcDQRBdjRGqYyi8AOKobAACT4jEA5gyALo9ALFRcUA0Qy1DjYbDtTAALjezQWHAAdAArTD8vDoADmwDgwEF5DAIGA6lAEAA+mr1Rr1RBAMoM2sA1gyAZoZAD8MgEmGKyADCjAKaKqs1tpVEAV6jaZ3uqXMKL+rCumB6PGGyxeQ3dX093ogrE6ADdOuh-RAAPzhqMxiCciDmYYABmWAG4lSAbXaNRAQoBOhkAEwyARoYjaXC0W1Q7FagALbtMW4Z3dADeEAAogBHPjkAA2017qN+EAAvhACOg8M2ZsJOwg+SPh51WOLOphgHxsKhh5gIWBOxAFuRMDudsMaOOfqkB0PhylXSlhvsIIcYAHprt0ukkx3hOj6DiOr7wqkwyCNIAwvNAmyfj25Bpjg6CoFu06-kIsHwYhAFAVA95oqBz4Qck77YRG0boARwEPikT7gW+wx8F6nQEBh-zYWxVwcVxVx0ScZ4xvOWA3jQyLLpgCBfA+slkGKNBvqMrB4NgpAUJQoyAZJ7zSbJIEKWJymQSkPaZmm4yqJQAAyqAANadKM066Scyr1sWgCE1h4pYhIAwwx+HW9aNmAoA0C8gDHkYAKt5WIAjoqAJDmTIsmyHLcsAvICsKooSlKsDAGImAAO4xjKcpQFFsWANGRzKsuyXI8pgfJCiKYqStKmB4MO+6oNwLQVRAniAGtyHiAE1RgAyGSl9XpZlLU5ZKsryoqQA

// my a
type First<T extends any[]> = T extends never[] ? never : T[0];

/*
 * other a
 */
type First2<T extends any[]> = T extends [] ? never : T[0];

// T['length']→インデックスアクセス型
type First3<T extends any[]> = T['length'] extends 0 ? never : T[0];

// タプル型にT['length]を使用すると、タプルの要素数を返す。
type Tupple = [1, 2, 3, 4, 5];
type TuppleLength = Tupple['length']; // 5

// infer Uで最初の要素の型を推論して型として取得。
// infer restはU型を得るために残余要素を表しただけの定義。
type First4<T extends any[]> = T extends [infer U, ...infer rest] ? U : never;