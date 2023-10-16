import { getOptionsDataArray } from "@/shared/helpers/getOptionsDataArray";

const YEARS_THRESHOLD = 80;
const START_YEAR = new Date().getFullYear() - YEARS_THRESHOLD;

export const MONTHS_DATA = [
  {
    value: "month",
    name: "Month",
    isDisabled: true,
  },
  ...getOptionsDataArray(12, "month"),
];

export const DAYS_DATA = [
  {
    value: "day",
    name: "Day",
    isDisabled: true,
  },
  ...getOptionsDataArray(31, "day"),
];

export const YEARS_DATA = [
  {
    value: "year",
    name: "Year",
    isDisabled: true,
  },
  ...getOptionsDataArray(YEARS_THRESHOLD, "year", START_YEAR).reverse(),
];

export const DATE_OF_BIRTH_INFO =
  "Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.";
