import { getOptionsDataArray } from "../getOptionsDataArray";

describe("getOptionsDataArray", () => {
  it("should return an array of length 'length'", () => {
    const length = 5;
    const key = "testKey";
    const result = getOptionsDataArray(length, key);

    expect(result).toHaveLength(length);
  });

  it("should return an array of objects with the correct keys", () => {
    const length = 5;
    const key = "testKey";
    const result = getOptionsDataArray(length, key);

    result.forEach((item) => {
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("value");
    });
  });

  it("should return an array of objects with the correct values", () => {
    const length = 5;
    const key = "testKey";
    const start = 10;
    const result = getOptionsDataArray(length, key, start);

    result.forEach((item, index) => {
      expect(item.value).toBe(`testKey-${start + index + 1}`);
      expect(item.name).toBe(String(start + index + 1));
    });
  });
});
