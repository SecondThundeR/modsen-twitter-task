import { push, ref } from "firebase/database";

import { pushData } from "../pushData";

jest.mock("firebase/database", () => ({
  push: jest.fn(),
  ref: jest.fn(),
}));

jest.mock("@/shared/lib/firebase", () => ({
  database: {},
}));

describe("pushData", () => {
  it("should push data correctly and get data key", async () => {
    const path = "test/path";
    const mockData = { key: "test-key" };
    (push as jest.Mock).mockResolvedValue(mockData);

    const result = await pushData(path, { value: "test" });

    expect(ref).toHaveBeenCalled();
    expect(push).toHaveBeenCalled();
    expect(result).toEqual("test-key");
  });

  it("should throw an error when failed to push", async () => {
    const path = "test/path";
    const mockData = { key: null };
    (push as jest.Mock).mockResolvedValue(mockData);

    await expect(pushData(path, { value: "test" })).rejects.toThrow(
      "Failed to extract data key",
    );
  });
});
