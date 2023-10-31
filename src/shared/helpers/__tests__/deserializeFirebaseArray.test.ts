import { deserializeFirebaseArray } from "../deserializeFirebaseArray";

describe("deserializeFirebaseArray", () => {
  it("should return an empty array when given undefined", () => {
    expect(deserializeFirebaseArray(undefined)).toEqual([]);
  });

  it("should deserialize an array of objects with ids", () => {
    const input = {
      "1": "Alice",
      "2": "Bob",
      "3": "Charlie",
    };
    const expectedOutput = ["Alice", "Bob", "Charlie"];
    const result = deserializeFirebaseArray(input);
    expect(result).toEqual(expectedOutput);
  });
});
