import { getOptionsDataArray } from "@/shared/helpers/getOptionsDataArray";

const YEARS_THRESHOLD = 80;
const START_YEAR = new Date().getFullYear() - YEARS_THRESHOLD;

export const MONTH_KEY_BASE = "month";
export const DAY_KEY_BASE = "day";
export const YEAR_KEY_BASE = "year";

export const MAX_DAYS = 31;
export const MONTHS_DATA = [
  {
    value: MONTH_KEY_BASE,
    name: "Month",
    isDisabled: true,
  },
  ...getOptionsDataArray(12, MONTH_KEY_BASE),
];

export const DAYS_DATA = [
  {
    value: DAY_KEY_BASE,
    name: "Day",
    isDisabled: true,
  },
  ...getOptionsDataArray(31, DAY_KEY_BASE),
];

export const YEARS_DATA = [
  {
    value: YEAR_KEY_BASE,
    name: "Year",
    isDisabled: true,
  },
  ...getOptionsDataArray(YEARS_THRESHOLD, YEAR_KEY_BASE, START_YEAR).reverse(),
];

export const DATE_OF_BIRTH_INFO =
  "Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.";
