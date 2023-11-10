import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { uploadImage } from "../uploadImage";

jest.mock("firebase/storage", () => ({
  getDownloadURL: jest.fn(),
  ref: jest.fn(),
  uploadBytes: jest.fn(),
}));

jest.mock("@/shared/lib/firebase", () => ({
  storage: {},
}));

describe("uploadImage", () => {
  it("should update image correctly and get image URL", async () => {
    const path = "test/path";
    const imageData = new Uint8Array(1);
    const testUrl = "test-url";
    (uploadBytes as jest.Mock).mockResolvedValue({ ref: "test-ref" });
    (getDownloadURL as jest.Mock).mockResolvedValue(testUrl);

    const result = await uploadImage(path, imageData);

    expect(ref).toHaveBeenCalled();
    expect(uploadBytes).toHaveBeenCalled();
    expect(getDownloadURL).toHaveBeenCalled();
    expect(result).toEqual(testUrl);
  });
});
