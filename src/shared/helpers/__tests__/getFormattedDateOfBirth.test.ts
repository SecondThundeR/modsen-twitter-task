import { getFormattedDateOfBirth } from "../getFormattedDateOfBirth";

describe("getFormattedDateOfBirth", () => {
  it("should return a formatted date string", () => {
    const monthOfBirth = "month-01";
    const dayOfBirth = "day-01";
    const yearOfBirth = "year-2000";

    const result = getFormattedDateOfBirth(
      monthOfBirth,
      dayOfBirth,
      yearOfBirth,
    );

    expect(result).toEqual("01-01-2000");
  });
});
