import { update, ref } from "firebase/database";

import { updateData } from "../updateData";

jest.mock("firebase/database", () => ({
  update: jest.fn(),
  ref: jest.fn(),
}));

jest.mock("@/shared/lib/firebase", () => ({
  database: {},
}));

describe("updateData", () => {
  it("should update data correctly and get data key", async () => {
    const path = "test/path";

    await updateData(path, { value: "test" });

    expect(ref).toHaveBeenCalled();
    expect(update).toHaveBeenCalled();
  });

  it("should throw an error when failed to update", async () => {
    const path = "test/path";
    (update as jest.Mock).mockRejectedValue(new Error("Internal error"));

    await expect(updateData(path, { value: "test" })).rejects.toThrow(
      `Failed to update data for path "${path}"! Internal error`,
    );
  });
});
