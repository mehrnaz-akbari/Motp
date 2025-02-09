export const getUrlListSearchParams = (
  names: string[],
  params: URLSearchParams
): Record<string, string[]> => {
  const result: Record<string, string[]> = {};

  names.forEach((name) => {
    const value = params.get(name);
    if (value) {
      result[name] = value.includes(",") ? value.split(",") : [value];
    }
  });
  return result;
};

export const getUrlSearchParams = (
  names: string[],
  params: URLSearchParams
): Record<string, string> => {
  const result: Record<string, string> = {};

  names.forEach((name) => {
    const value = params.get(name);
    if (value) {
      result[name] = value;
    }
  });

  return result;
};
