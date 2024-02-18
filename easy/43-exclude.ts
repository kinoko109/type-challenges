//q
// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.ja.md

// a
// https://www.typescriptlang.org/play?#code/PQKgUABBAsDMEFoIFEAeBjANgVwCYFNJEETSiAjATwgC0ALfRgOwHMIAKAAQC8HmWAlBADEgXCVAWL4jy2AJaYALghlMR2JjID2TMEWF6IgK5jA8qo6ogEV9A-gyAe+IuA7BkDR6oDOGQD8MgMYZAxQyArhg8ADNFjx8CAAeABUAGggAVQA+H0AkhkB-eUAKV0BtBkAtBkBABh8on0BrBkAnJUAohkBlfUAzBkB75UBfgMArBnt4n1CfQGkGQEiGQBM0wDRNQE0GQGiGesB87UBRiMB1BkA-Bm7AIAZTCEBo+UAJBkAHBkAsf5mfdfkAZyJ5SgAHIIAlfE3sBQgAXggAWUp-HAJggHIAQyeIAB8IJ-J3r6f0E9Iq8njEIMBgN9fp9voCiOsfDMwQBxGTyAAS2HIgHMGQBdHoBYqL6yzo8nke02AC4IVt0HQAHQAK02dI0ACcWMA4MAGS8wCBgDpQBAAPqisXisUQQDKDFK8oBmhmcgEmGeKADCjAKaKIolWuFEH5Ol2BxudwwD3wYUisUuEFCEHwqHk+CYuE20QgAH4IEx8AA3fCsiAU60AbkFIE12vFEFcgE6GQATDIBGhmc0fDEdFuoFMgAtns2fIIAaggBvFAAR2wL0wkTQB3QeYAvhAAGasjSZ76cAsIWkVzCOlgnYDYeRyTZPfX7ILoF6bE5WgDaRGr+FrwWQZYrwVu90CzzeMJ+f1hQO+bxiwOh-0BMTPi9QNfkq-XmE3xoCjxB+4vR+Be-+vzPR7XuEt73o+5bPluJo7ps8issobBfEw2CZuQfowuw7BCBcYLehoMi4AIkQAGJqLWmhMABMFwawMJIShfpAWAAC6oYpqmECAITWtjRq4gDDDIA6wxsRG6ZgKARBgoAx5GACre8SAI6KgCQ5kSJJkpS1KbLSjLMmyHJci8TCbAA7n63K8lAkkyYA0ZG9MSpLklSwA0vSTIsuynKwMAmwaDgw5aNsZkQIAugy2IAa3K2IATVGADIZNkqfZjmaS5HI8nyApAA

type MyExclude<T, U> = T extends U ? never : T;

// memo
// C型の書き方だと、A型は汎用型ではなく、文字列リテラルの集まりなので、AすべてがBすべてにextends関係かをチェックしているため'hoge' | 'fuga' | 'piyo'という推論結果になる。
// MyExcludeのジェネリクス型で書くことで汎用的な型としてチェックして分配型になるので個別で推論される。
type A = 'hoge' | 'fuga' | 'piyo'
type B = 'hoge' | 'fuga'
type C = A extends B ? never : A // 'hoge' | 'fuga' | 'piyo'