export function getFormattedDateOfBirth(
  monthOfBirth: string,
  dayOfBirth: string,
  yearOfBirth: string,
) {
  return `${monthOfBirth.split("-")[1]}-${dayOfBirth.split("-")[1]}-${
    yearOfBirth.split("-")[1]
  }`;
}
