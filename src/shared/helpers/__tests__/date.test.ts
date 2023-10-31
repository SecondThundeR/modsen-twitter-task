import { getMonthIndex, getDaysAmount, formatTimeDifference } from "../date";

describe("date", () => {
  it("should return correct month index", () => {
    expect(getMonthIndex(-1)).toEqual(0);
    expect(getMonthIndex(0)).toEqual(0);

    expect(getMonthIndex(1)).toEqual(0);
    expect(getMonthIndex(2)).toEqual(1);

    expect(getMonthIndex(12)).toEqual(11);
    expect(getMonthIndex(13)).toEqual(11);
  });

  it("should return correct days amount", () => {
    expect(getDaysAmount(1, 2023)).toEqual(31);
    expect(getDaysAmount(1, 2024)).toEqual(31);

    expect(getDaysAmount(2, 2024)).toEqual(29);
    expect(getDaysAmount(2, 2024)).toEqual(29);

    expect(getDaysAmount(4, 2023)).toEqual(30);
    expect(getDaysAmount(4, 2024)).toEqual(30);
  });

  it("should return correct time difference", () => {
    jest.spyOn(Date, "now").mockImplementation(() => 1698758307608);

    const secondTimeDiff = Date.now() - 1000;
    const minuteTimeDiff = Date.now() - 60000;
    const hourTimeDiff = Date.now() - 3600000;
    const dayTimeDiff = Date.now() - 86400000;
    const largeTimeDiff = Date.now() - 7 * 24 * 60 * 60 * 100000;

    expect(formatTimeDifference(secondTimeDiff)).toEqual("1s");
    expect(formatTimeDifference(minuteTimeDiff)).toEqual("1m");
    expect(formatTimeDifference(hourTimeDiff)).toEqual("1h");
    expect(formatTimeDifference(dayTimeDiff)).toEqual("1d");
    expect(formatTimeDifference(largeTimeDiff)).toEqual(
      new Date(largeTimeDiff).toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    );
  });
});
