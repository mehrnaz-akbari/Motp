export const phoneNumberFormatter = (text: string): string => {
  const list: string[] = [];
  list.push(text.substring(0, 4));
  list.push(text.substring(4, 7));
  list.push(text.substring(7, 11));
  return list.reverse().toString().replaceAll(",", "  ");
};
export const formatToPhone = (value: string): string => {
  const theValue = value.trim().replaceAll(" ", "");
  const areaCode = theValue.substring(0, 4);
  const prefix = theValue.substring(4, 7);
  const suffix = theValue.substring(7, 11);
  let digits = "";
  if (theValue.length > 7) {
    digits = `${areaCode} ${prefix} ${suffix}`;
  } else if (theValue.length > 4) {
    digits = `${areaCode} ${prefix}`;
  } else if (theValue.length > 0) {
    digits = `${areaCode}`;
  }
  return digits;
};

export const phoneNumberDeFormatter = (text: string): string => {
  return text.replaceAll(" ", "");
};
