import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(key);
    if (jsonVal !== null) {
      return JSON.parse(jsonVal);
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
