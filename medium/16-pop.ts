// q
// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ja.md

// a
// https://www.typescriptlang.org/play?#code/PQKgUABBCMBsEFoIAUD2AHSiE91gRgJ4QCCAdgC4AWqZxAYgK4QAUAAgIaUBmjAlBADEgWjlAWL5COAJ0kdCYLIMURAVzGB5VXlQAfBEDKDIDsGQE1RgGQzA5gyB7BgAqhdAFMAygGNJAS3QUIAFgB0ABkAyDIAVxoAWmoCqDIAxDIB+DICaDBoQgLKJgOhKEAAGFskQgEkMgOvKgIoMgGvKgFEMgIAMgADmgDH6eoCBkYAEvhmAJmmAIgyA+gyJGYAr8VGAcjaAFK6AIW6AVgwpaOgAPBaa6RmA+dqAoxGA6gyAZgyA8gyABgwhDYBADLGA0fKAEgyADgyxyccUAM5YFNY2EFKS0BAAvBAA2gDkHK8ANBCv+F8-Dn+rwAJq8ALoXK43aQAJkeLwAzN8Yd9oBDIbYIJIbPcnsMRrdoNpgMAIDYAB62BwUGzAiAUVAQfDXN4fb6-IGAiFQS6Y7FwvEYAmw4mkilUml0hlMllIiAw7kpY6xEAgQBSDBEcqqAFwQQAwKoANy0A1gwpOxUZzcCjJIpDRinKjWlIAVTI9otVoggCCGWYmQCyDNFANIMgHx-2LaADizgoAAlGPgTIAuj0AsVFRQDRDIAsf6oFAo6FO2pJZwcVC8ACtTl5UJIAObAODAYscMAgYDyUAQAD6Hc7Xc7uh0RsAzQyAH4ZAJMMGUAGFGAU0V292Z22IE35LzrviLGTyTSyMDTjc6M8wdonhZngAiAA2NjIleox7Ba43W4gPggAH4XrfdauKfft88vH-nGQ3A2JIED0N8AFASBba3q+9AQLqZA2AAbsBLYgNOs5dhAgBjDIAnQyABMMgCNDIOuEYZhHbzs2zgALboBW7hLhAADeEAAKIAI6MBwp7fKxlI2NSEAAL4QNwkioNRPxsEuCCFtx56XjYpzAIwFDOKepyvIuUIOBwpxKfCzxYHxEojBxXGniM+LPHKKIwPu3w2ci+6aJ8xn8dSZmcdxVlCqyQJ-OygLsqCDkvO8AWcuCmiue5pnmT51lhXuMVueirbkVhgCE1nouHYYAwwyAOsMZHkZRYCgFg2iAMeRgAq3hkgCOioAkOaphmWY5nmwAFkWpbllWNawMAXCnAA7sBdYNloEC1RkgDRkemmbZrm+anIWJZlhW1a1qcqCnqpzi0Ock2ALoMeiAGtyhhGK1i0dV1a29dW9aNs2QA
type Pop<T extends any[]> = T["length"] extends 0
  ? []
  : T extends [...infer F, infer _]
  ? F
  : never;

// other a
type Pop2<T extends any[]> = T extends []
  ? []
  : T extends [...infer R, infer L]
  ? R
  : never;
