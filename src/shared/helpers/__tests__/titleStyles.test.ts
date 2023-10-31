import { FONT_SIZE_MAP } from "@/shared/constants/sizing";

import { getFontSize, getFontSizePhone } from "../titleStyles";

const { extrasmall, compact, small, regular, large } = FONT_SIZE_MAP.title;

describe("titleStyles", () => {
  it("should return the correct font size for regular", () => {
    expect(getFontSize("regular")).toBe(regular.desktop);
    expect(getFontSizePhone("regular")).toBe(regular.phone);
  });

  it("should return the correct font size for small", () => {
    expect(getFontSize("small")).toBe(small.desktop);
    expect(getFontSizePhone("small")).toBe(small.phone);
  });

  it("should return the correct font size for compact", () => {
    expect(getFontSize("compact")).toBe(compact.desktop);
    expect(getFontSizePhone("compact")).toBe(compact.phone);
  });

  it("should return the correct font size for extrasmall", () => {
    expect(getFontSize("extrasmall")).toBe(extrasmall.desktop);
    expect(getFontSizePhone("extrasmall")).toBe(extrasmall.phone);
  });

  it("should return the correct font size for large", () => {
    expect(getFontSize("large")).toBe(large.desktop);
    expect(getFontSizePhone("large")).toBe(large.phone);
  });
});
