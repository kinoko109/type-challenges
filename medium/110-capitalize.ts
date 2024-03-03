// q
// https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.ja.md

// a
// https://www.typescriptlang.org/play?#code/PQKgUABBCM0AwQLQQMIEMAOBLALmgNlgF4CmkSilV5ARgJ4QCCAdjgBYD2zDAYgK4QAFAAE0rAGZ8AlBADEgWjlAWL5ycJALYZ8aVYkKqATgTDlZpiICuYwPKqxqIHDTQOragdCVAdgyAAc0C4Ss4eAkhkDkmg8BrBkBITUBt40B1BkBABkBdBkAYhkBTuUA0TUB7BijnQD8GNIDATQZAaIYIAAN0bDxCUgAeABUAPnyIb0B87UBRiLC0rMAgBhsIQGj5QAkGQAcGTvyhnABnchw6DBIIAGNMXAJiEgATCABeVHmSpbKAcjYSfHwOCAB3Dn18Zd2qiGBgCBIADymZ1VWcE5pp3YAJQ+OZwuV125CG+U6twA4rhfnwaIBzBkAXR6AWKjcoAsf7YOBwGBGAC57qMZmwAHQAKxGJIuAHNgLA4MAyWgwCBgMZQBAAPrcnm8nkQQDKDAKAoBmhkAPwyASYZvIAMKMApopcvmKzkQVnGCZTCAAWToRQWpRIZQAyo8nqpmMsRhARjh9FhmNTbhtjc8zRaCgASADedvEJH0EB4AF8vT6-RAADKB2oAfg9noAqhgpvo5iMDTwqsHPZHaniIIb2SAFUreRBAGMMgE6GQATDIBGhjFFeLJe5KrZWA0FxwEHV009EAAogBHPgEAA0-ZeJDeEEDEHE+g4aggu2E3cQxII+BI9pII2AfBwWHwI1BYG7szQactGwA2uQ+xO3mVB8P8GVtbrtuVduIOBwaGh9BuMddh4X9-0AqoqhHO8HxwJ8hwIN8dS2RYvx4AB5dCACFGAAJSApcMOwvCbigmDXjg59EPfFD9T2H8vgAgiQN-CBwNI6CoHvCj4JfJCP1Qg1dmYjjyMnSiENfGjikEvY0GYxhRK42DeOo5CZLo3YaGYrClPHHiqKk9S9R2XYZmYlA9O48TVKMgTNOuKClwAESslTDP42jTJIZi+zcgzJM8jTTPEZieH8myPOkkyv2pZioQix8ouMz8hLYZjfkSiS+Oi1K9iwZiAEkstsoKYqEslmIAKRK5L7NMgBrZiAGlasC3LZN2fBmPDNqcpSzq1GYzU+rU+qv2YZiADlRrsryvw4Zj0Nmsq8t2DBmIABRWjrNIHZiAEUdoGzSIOA-DIM4-TIvak7TOPJzdkNY7xqEnBmIqF75qEvhmPjL7gq-AA3ZiADUAfKvZTmYgB1CG1qeZiAA14c6uhmIATVRzSiGYgAtUSAF1C0bJsIEAQmtnArMtAGGGQB1hlJksWzAUByFuQBjyMAFW9vEAR0VAEhzDEsRxfFCRGYlyUpGk6XgYAxBGU4-UZZkoA57nAGjInJMWxXECWAIlSQpKl9FpelgBGDh8H3LAuDGFWIFSQA1uWcQAmqMAGQyteF3X9Ylo3aSZFk2SAA
type MyCapitalize<S extends string> = S extends `${infer F}${infer L}`
  ? `${Uppercase<F>}${L}`
  : S;