// q
// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ja.md

// a
// https://www.typescriptlang.org/play?ssl=23&ssc=51&pln=23&pc=1#code/PQKgUABBCMAMEFoIBUCuAHANgUwgFwHsIBVAOwEsDTJEE76aAjATwgEFS8ALK1gMVQQAFAAEAhpwBmqAJQQAxIFo5QFi+C8qUnYATgrwYcC1BSpga88xEBXMYHlVU1ED9DIHWGQNcMgOwZAJAqBpBkCRDIDOGQNMMgFUMgM8MgNHqgEkMgPiugAhGgJoMgNEMAAZoWNjIBGSUpAA8yAB8ieGA+dqAoxGA6gyAfgyxgEAMdhCA0fKAEgyADgx1ie14AM40eMzouGxaOgC8EADaAOTQEwA0EBMATLPzAMwTALp1vf0o2J14EKMpOOmZVNmDWnkQwMAQ2AAe-QDGeNgAJvhEjLhTExAAH3mS0BqwmNHaiTq1wA4uQ8AAJVCMQDmDIAuj0AsVEJQBY-1w8Hh0J0AFy3LrPLgAOgAVp0KQQtABzYBwYBUsRgEDAUygCAAfX5AsFAoggGUGEWAawZAM0MgB+GQCTDOFABhRgFNFPlCtW8iCc0zbXDHNIZYw5ZD3B5vUjvToQIwAa1IBAA7qQxutrkcxqRUABbH5aTZgHnqtUQQBjDIBOhkAEwyARoZpaHVYHhVryJ70PSDjqIABvCAAUQAjqgxJg5tmnthXhAAL4QSRaAie+YiHUIcmFnCkBl7YCoPDkTCdcFgdPPMSdPaHcY0EsvPDZPMFzC5fT6s45MbQBYrOYTAAsAFYAGzLPBaVDYF1zdcrUE7g--IHH095PIzSel16z-OFxepU6G7JrjdzxgDcnxfP0A3jYVAEJrVxQ2DQBhhkcONIM1LlQBoa5AGPIwAVb3CQBHRUASHMcTxAliVJTpyWpWl6SZFkJE6e1tFZdkoCw3DAGjI+JcXxQkSWAMlKRpOlGWZWBgE6AhMG7LJulYiBAF0GVxADW5VxACaowAZDO40i+IEqjhKZNkOS5IA
type TupleToUnion<T extends unknown[]> = T[number]

// other a
export type TupleToUnion2<T> = T extends Array<infer ITEMS> ? ITEMS : never