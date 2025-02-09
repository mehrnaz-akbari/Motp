export const phoneNumberFormatter = (text: string): string => {
  const list: string[] = [];
  list.push(text.substring(0, 4));
  list.push(text.substring(4, 7));
  list.push(text.substring(7, 11));
  return list.reverse().toString().replaceAll(",", "  ");
};
