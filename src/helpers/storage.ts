type Key = string;

type Read = any;

const isWindow = typeof window !== "undefined";
const storage = isWindow ? window.localStorage : null;

// Check if the data is a valid JSON object
const shouldParse = (data: string) => {
  return data && data[0] && (data[0] === "{" || data[0] === "[");
};

// Store a key and value in the storage provider
export const store = (key: Key, data: any): string | undefined => {
  if (!window?.localStorage || !key) {
    return;
  }
  if (typeof data === "object") data = JSON.stringify(data);
  else data = String(data);
  if (storage) {
    storage.setItem(key, data);
  }
};

// Read a key from the storage provider
export const read = (key: Key): Read => {
  if (!storage || !key) {
    return;
  }
  const data: string | object | boolean | null = storage.getItem(key);
  if (!data) {
    return;
  }

  const parse = JSON.parse;
  try {
    return shouldParse(data) ? JSON.parse(data) : data;
  } catch (e) {
    return parse(`"${data}",${e}`);
  }
};

// Remove a key from the storage provider

export const remove = (key: string) => {
  if (!storage || !key) {
    return;
  }
  storage.removeItem(key);
};
