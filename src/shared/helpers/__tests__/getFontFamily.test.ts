import { FONT_FAMILY_MAP } from "@/shared/constants/fontFamily";

import { getFontFamily } from "../getFontFamily";

describe("getFontFamily", () => {
  it("should return roboto font family for regular variant", () => {
    expect(getFontFamily("regular")).toEqual(FONT_FAMILY_MAP.roboto);
  });

  it("should return roboto serif font family for serif variant", () => {
    expect(getFontFamily("serif")).toEqual(FONT_FAMILY_MAP.robotoSerif);
  });
});
