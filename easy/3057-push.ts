//q
// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.ja.md

// a
// https://www.typescriptlang.org/play?#code/PQKgUABBDMAMCsB2CBaCAFArgZwBaVRSOIICMBPCAKwEsBDAOwHM9GIAKAAVsZd0YC2AUwAudAJQQAxIFwlQFi+0ugCcldcmAJStEQFcxgeVUNUAAYmAgirUA6AA45cJo4DsGQB0MgcoZAswyArhkDDDIHqGQAsMgD8MzoDnDIDPDIBJDID52oCjEYDqDIB+DICaDIBADIYQgNHygBIMgA4MgFj-6Q4i5NZC2ADGSjTWIgTFpRAASmWYADYiEAC8GHYAPADaAIwANBAATAC6owDk0NMAfBDAwBBDo2MzcxMEDumLAOI0IgASmKSA5gyAXR6AsVFJgNEMebgiItbYAFzLIhW4llTYlgB7JRMYBwJDAKh0MAgYAaUAQAD6SORKOREEAygzowDWDIBmhkCgEmGCKADCjAKaKiNRFIREBhGnqQh6eF6ABVRgBVRbdJkQIQADxEQgYABNsBBGOR+hMIAB+VaWOUsiCsyVvCAMIQANyESjhIHJlJREEAYwyAToZABMMgEaGQLGvX6pHU2E0ATWIEdOkQADeEAAogBHTB0VqjL080rlDoAXwgADMlACBBBppw6ShyvxWq0BUwysBMCIaK1sNNaSV6eU6Ngyl1VgRg6GRL1ff7Wr0sIyJaNBvNRkMJvMuzWQ0Iww2-QGW301uMpgm5l3ViNxptpr3+1Ba0P642x63cANpoNpusl9PSACARnGHP+vvD4uZ7fT+ehIwV8MwNswPDbQbAITWjmNhreIA6ww2ra9qfuAUCLIAx5GACreESAI6KgCQ5vcjzPK8HzAF8qa-P8QIgmCiDAIw2AAO5ahCUJQRAcERIA0ZEPE8LzvJ83y4YCwKgggRHYOeuY0ACDDYAQiyALoMjiAGtyjiAE1RgAyGWhzGYdhPx-BxIKQtCsJAA
type Push<T, U> = T extends any[] ? [...T, U] : never

// other a
type Push1<T, U> = T extends readonly unknown[] ? [...T, U] : never