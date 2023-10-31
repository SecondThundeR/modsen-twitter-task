import { get, ref } from "firebase/database";

import { isDataExists } from "../isDataExists";

jest.mock("firebase/database", () => ({
  get: jest.fn(),
  ref: jest.fn(),
}));

jest.mock("@/shared/lib/firebase", () => ({
  database: {},
}));

describe("isDataExists", () => {
  it("should check if data exists", async () => {
    const path = "test/path";
    const mockData = { exists: () => true };
    (get as jest.Mock).mockResolvedValue(mockData);

    const result = await isDataExists(path);

    expect(ref).toHaveBeenCalled();
    expect(get).toHaveBeenCalled();
    expect(result).toEqual(true);
  });
});
