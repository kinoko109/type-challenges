// q
// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ja.md

// a
type MyReturnType<T> = T extends (...arg: any) => infer U ? U : never;

// other a

// コンパイラーはneverがTArgと代入可能かを比較する。nerverは特殊な型であり、拡張もとの一般的な方に代入できるため真を返す。
type MyReturnType2<TArg> = TArg extends (...args: never[]) => infer TReturn ? TReturn : TArg

// 逆にunknownは特定の型に代入できない最も基本的な型なので偽を返すためエラーとなる。
type MyReturnType3<TArg> = TArg extends (...args: unknown[]) => infer TReturn ? TReturn : TArg