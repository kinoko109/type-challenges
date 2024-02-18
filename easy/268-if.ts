// q
// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.ja.md

// a
// https://www.typescriptlang.org/play?#code/PQKgUABBBMBsAcEC0ECSAzSyk91gRgJ4QAKAhgG4CmANhAOI0CuAzgBYDWA9hRABQABAA5l2TAC4cAlBADEgXCVAWL5yJASxoswWWToiArmMDyqlqiBDc0BvcoBIFAAYBhK4EAGCLauAZBgjiAThLbFA5gyAhBkBohkAWDUAIFUA7BkBuI0AohgtwwGj1KwAVB2c3dDINPyCwqNiEqwAxK0AkhkB15UBFBkA15UCrDFLAfO1AUYjAdQZAPwZATQZAIAYsc2s7CEB7BitPJiorQGkGKwyNcfDASwZAQwZASIYJgMDAZQZACwYXQHxzQFD9QFUGQBiGTpd7ZKsILadiocBvuUB4QwSSrc2d30BZBk6erEBo+UAEgyABwZAFj-xicVhGmig4kIQioEAAghAALxodAAHlGVAANBAAORkfF4-H4fEAPgA3BBgMAIFQAB7wgDG4ioABN3FwIPgEYT8VhYfCIAAhVHojEzFi4glEklkqk0umMllsznibm8glkrCQqzg8kMVTiAASTHwvkAXR6AWKiOoEQWxxOIhCwAFy08QsZlsAB0ACsWD6uB4AObAODwYB+shgEDALSgCAAfRTqbTqYgGw2gGsGQDNDIAfhkAkwwlQAYUYBTRWT6arSYgca0QoRGAxNjxSTxhUNaJs9IZbIAduyWO4vAiAPwQJIQV0QQqUhMgSvVtMQQBjDIBOhkAEwyARoZ82vF0uU7X46oALZCYPidxwhEAbwgAFEAI5MTJ4+9MqisiAAXwg6A8XAngSAgNkg3qZDQVB9iGVAsMAagaAKYANhAzKiLB4oANpYO+qoYk+L40BiTbYiScrahSZEUuSOI4R+rL4c+mTEZiUoyvyeLQDRMDkjRYAALoJnSIEsEgKqfuIYkeABHjIde9LScG4pNn2TA0DQVHyhS877geECAITW4RriugDDDIA6wy6UuR5gKAWCGoAx5GACreJSAI6KgCQ5naDpOi67rAJ63r+oGwZhhGwBkH2LAAO5UB4UYxlADnOYA0ZH2o6zpuh6Xq+gGQahuGCDACwXDMOIqhcBFdkQIAugzhIAa3LhIATVGADIZXnpb5-nZUFeXRrG8ZAA

// my a
type If<C, T, F> = C extends true ? T : F;

// other a
type If2<C extends boolean, T, F> = C extends true ? T : F;