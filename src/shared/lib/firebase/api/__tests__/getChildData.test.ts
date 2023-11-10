import { child, get, ref } from "firebase/database";

import { getChildData } from "../getChildData";

jest.mock("firebase/database", () => ({
  child: jest.fn(),
  get: jest.fn(),
  ref: jest.fn(),
}));

jest.mock("@/shared/lib/firebase", () => ({
  database: {},
}));

describe("getChildData", () => {
  it("should fetch child data from the correct path", async () => {
    const path = "test/path";
    const mockData = { exists: () => true, exportVal: () => ["test data"] };
    (get as jest.Mock).mockResolvedValue(mockData);

    const result = await getChildData(path);

    expect(ref).toHaveBeenCalled();
    expect(child).toHaveBeenCalled();
    expect(get).toHaveBeenCalled();
    expect(result).toEqual(["test data"]);
  });

  it("should throw an error when data does not exist", async () => {
    const path = "test/path";
    const mockData = { exists: () => false };
    (get as jest.Mock).mockResolvedValue(mockData);

    await expect(getChildData(path)).rejects.toThrow(
      `Tried to extract child data for path "${path}", but failed!`,
    );
  });
});
