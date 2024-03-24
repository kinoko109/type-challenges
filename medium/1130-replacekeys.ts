// q
// https://github.com/type-challenges/type-challenges/blob/main/questions/01130-medium-replacekeys/README.md

// a
// https://www.typescriptlang.org/play?#code/PQKgUABBCM0MwAYIFoICUCmAHANgQwGMMBpDATwGdIVla7qAjMiQRliWIAKAARwFcd8TAFa8AdhgCUEAMQBbDABMAlr1kyA9gyEYCAF2QBrclWrSzEAIq8MFXUvWiw1AJKzcGeaN0Q8EXWSwMdGx8IlJKABo-AAs8bwAnEMIgo0oIJVEIMXtM-0CKKKUAMwgKdXk-AKDYighRdW9daKVa1KiRW1KDJSwIRNxCDIBzCOoAQUrAvzwjWqbEoLx4odUMLwoAOicoADF1eIgMAA88NxwMAC5tiAADO90qKDyggDl1BQwJgF4IAG9qJ5VC4QABEYxBALqp0upV08WGkKK+CGwNEqgYGHi1AAvtdnhA3h8AEIQH7-KCAwLAkFEiEU9IKVHozGI5FM2QYrFQXHUfGEjAAYVJf0hz2pArpFNE0OBtnhoiGrLwKLqzK5EB5lNe7xswv5EwAPgSdSSjfyBXiqsEBkQFPzaj9MDaSMYADyQ+2jekg6XyEEQI0gpHKkFeim-KHydmcgDcEGDKrlww11AAfBBgMA-mKIAByMa5qK+mFojmYqIJ2Vw4bYgPZoF5omFhnR8vxtmw+VDWtG3453MC5vF1vxCsdpMK2uZiAAd3U-AUfSSREjQSK8XKneTunUqrLo6XzvbyvjG7Upc5fl3E6GW15VqdoUUb10AFEji1dOEHdan9-XZ6oLFqGfw+HgI4aum059g2+ZDjKdQYAAbm2lZ7pyPbGsSdYwVSeaDkWCHiChB5oRemJTlmc4LoeT6rleiEkdQdw3Nc6YAGpKBgM4QA4EAAOJKLoAASvAMMC0S6LoWAUBcmYPAQ0QbEImz7EMwCwIgYAgMATigBAAD6RnGSZxkQAAmvOBwCjqEDCZiQSmU5RkQDpTj4o+yT-gAqlEAAqUTmemZIQAA2sQ6SZKk6glN5AC6wIRccuhrAotR+RAAD8EBJUcKWiGlEDRSU5lZRZ4VxRAqLIZiVUQN5FUpmA+nOU5EB+TY3gCngFC6q1pmubpShuPsjRWhGr4AI68HgOBRO+gR6Bqp6brmXDPMgimzecCo2MAvB2DgFC5u5Vr6sK5KTDCcHUMOW4KtQZFqmAPJ8iaF33nhuZNtQSiMuhLJQE9+4vadUzmh9WrAgOJ1QHdN6PR25FYq9D7Ls+OrfCKUN5gWt1Ec9QPjtWD2o1Mnm2vyJJkp910-VAf0jojypVl2oNgB56N2jqQo0zjMP41GAPqmhCNk9qLzQudfNXdDeNEyzwuCyWNUo2DEtSzzkOy-hsPHiqyPK9VTHi1huo-OdZrvVbHwWpzzrcx8P4UxjHyGr+ySOxgpoe5TPMc2dOoUG8ksVBb6ihxglvGpHEM2976sQAQPXm2F1ALTouiulNM04K6Lv-oBubFrmda5gmzYRndyNjorN6QVELtexQqapmGGd6Nn02zfn6OF0HUTF9CldgRB2Jt2bwcR9CrejHFekgIZ-VmTsvDxE0tUAMopTJS-LwZg3NeAUDppvsSJBAZBWaU6h8HYDiyRAknSbJ8kUIpymqcsGnwAgwB4KICgM5AYQA4lxHiZQ745Efs-GSclgAKSUipDYakf6IGAJAg60C0wQAALL7CCAKWIAg1hDBsBJKScC34f2QWpbSukgA
type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};
