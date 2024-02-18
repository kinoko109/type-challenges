// q
// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.ja.md

// a
// https://www.typescriptlang.org/play?#code/PQKgUABBCMAcEFoIBkCmA7A5gFwBYQHsAzCAFQFcAHAG1UkQUafoCMBPCAZwEt0CD0EABQABHnwEBKCAGJAuEqAsX1nYqtMPRmaIgK5jA8qrqogfoZA6wyBrhgAGpc4CSGQOvKgRQZAa8qAohkCADIF0GQHYMJ058DuqYCqDNaAK-GAmgyA0ermaFh4ADykAHw2gPnagKMRgOoMgH4MoYBADAYQgNHygBIMgA4MgFj-+eZV2Jz02GyUqBDYqJzUAIYQALwQANoA5C1t7f0ANBD9ALYEACao1BAAzGMT03MLABorU7PzEACa-QC6dQ1NnJTtAMaoG919-QBiAILIAMIA8gByEACc2y93t8IAAJACizwAaodxv0ACIAJWeAHFvtsAMqkZ4I9EggCSAAVtiCAKoAWWeP3RBOebzBj2QeORINIx3y9UazVaHWiOHwPV5cSGHQSUGAwAgqAAHo0ri0ZhAACynTkXa63QX8lAYPmxNU3Dai8WSmWoOWoBUAVnoVXM+VFyO42BB5BYgHMGQBdHoBYqNCgGiGMq4bDYSicABc4pqV1wADoAFacaMEABOmGAcGAsfaYBAwHUoAgAH0i8WS8WIIBlBnLgGsGQDNDIAfhkAkwzWQAYUYBTRULpc7BYgObzEqTqHaMwE1A41kAG3KAODl0oArBkAIgyACwZALBygGNrQDHkWBjRympr4qKeqQTS10DNOBB2ug2L0jhAAPxkAa0GK4Y4QUMQdCoABuqCTAG4wG3bVnz3e5D2lY9TwgAchxHDgLyvG971IR8dTwV930-H9-zzEAOy7EsIEAMYZAE6GQAJhkARoY6xI-CCKLHtc24SZKGTbBmjOCAAG8IDBABHch2mocYwVNOUIAAXwgIgkwISYJhEbcECjQSn0wVpgHIbBuGoTh+nUK4BE4NjhU6HoBhM7Y1j2ZZYSszZLN2BZDhvdozwM9AjLAdyjK4S4DXuAZAU+H5-lhILgXBKEYQmREUTRWFMWxXFCWJclKQgalaXpRlmVZFy3MM7B1CAq5XNaAL6BE2VsFiPiBOoWJd23YguWGBJxkVBJ2sq0SarqwTGrQ3BYmakh9VudqIEtLrRnoY0FM4BBpWqpakxkpN6F3abZrFCUFqW3rVvWzahtifpcHmagCAgAB3ZNqBmfpupOTc8LowjAEJrTwSKIwBhhmMWi6IY176FFNdABVvaxAEdFQBIcz9AMgxDcNgEjGN40TFM01gYAL04G7fwzLMoDByHAGjI-1A2DMMI04KM4wTZNU3TTgCGoTTuEM0GIC8QA1uU8QAmqMAGQyEap5HUfpjHU0zbNcyAA

// my a
// type Length<T> = T extends any[] ? T['length'] : never;

// correct
// readonlyを付与して変更できないように定義することで、より正確な型情報を与える。（変更されないことを前提に推論される）
type Length<T> = T extends readonly any[] ? T['length'] : never;