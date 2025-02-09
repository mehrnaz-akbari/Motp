import type { ChangeEvent } from "react";

// replace special characters with
export const preventSpecialCharacters = (
  event: ChangeEvent<HTMLInputElement>
): string => {
  return event.target.value.replace(/[- #*;,.<>{}[\]\\/]/gi, "");
};
export const onlyNumbers = (e: ChangeEvent<HTMLInputElement>): boolean => {
  const re = /^[0-9\b]+$/;
  const value = e.target.value.replace(/[- #*;,.<>{}[\]\\/]/gi, "");
  // if value is not blank, then test the regex
  return value === "" || re.test(value);
};

export const isValidPhone = (val: string) => {
  return new RegExp("^[0][9][0-9][0-9]{8,8}$").test(val);
};

export const isValidIranianNationalCode = (input: string) => {
  if (!/^\d{10}$/.test(input)) return false;
  const check = +input[9];
  const sum =
    input
      .split("")
      .slice(0, 9)
      .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
  return sum < 2 ? check === sum : check + sum === 11;
};
