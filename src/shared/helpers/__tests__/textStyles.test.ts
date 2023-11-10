import {
  INACTIVE_OPACITY,
  REGULAR_OPACITY,
} from "../../constants/generalStyles";
import { FONT_SIZE_MAP } from "../../constants/sizing";

import { getFontSize, getOpacity } from "../textStyles";

describe("textStyles", () => {
  it("should return the correct font size for a given TextSize", () => {
    expect(getFontSize("small")).toEqual(FONT_SIZE_MAP.text.small);
    expect(getFontSize("regular")).toEqual(FONT_SIZE_MAP.text.regular);
    expect(getFontSize("large")).toEqual(FONT_SIZE_MAP.text.large);
  });

  it("should return the correct opacity based on isSubtext", () => {
    expect(getOpacity(false)).toEqual(REGULAR_OPACITY);
    expect(getOpacity(true)).toEqual(INACTIVE_OPACITY);
  });
});
