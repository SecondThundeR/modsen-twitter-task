import { OptionItem } from "@/shared/types/optionItem";

export function getOptionsDataArray(
  length: number,
  key: string,
  start: number = 0,
) {
  return Array.from({ length }, (_, i) => start + i + 1).map<OptionItem>(
    (item) => ({
      value: `${key}-${item}`,
      name: item.toString().padStart(2, "0"),
    }),
  );
}
