import { get, ref } from "firebase/database";

import { getData } from "../getData";

jest.mock("firebase/database", () => ({
  get: jest.fn(),
  ref: jest.fn(),
}));

jest.mock("@/shared/lib/firebase", () => ({
  database: {},
}));

describe("getData", () => {
  it("should fetch data from the correct path", async () => {
    const path = "test/path";
    const mockData = { exists: () => true, exportVal: () => ["test data"] };
    (get as jest.Mock).mockResolvedValue(mockData);

    const result = await getData(path);

    expect(ref).toHaveBeenCalled();
    expect(get).toHaveBeenCalled();
    expect(result).toEqual(["test data"]);
  });

  it("should throw an error when data does not exist", async () => {
    const path = "test/path";
    const mockData = { exists: () => false };
    (get as jest.Mock).mockResolvedValue(mockData);

    await expect(getData(path)).rejects.toThrow(
      `Tried to extract data for path "${path}", but failed!`,
    );
  });
});
