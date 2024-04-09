import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const isLocalStorageAvailable =
    typeof window !== 'undefined' && window.localStorage;

  const storedValue = isLocalStorageAvailable
    ? JSON.parse(localStorage.getItem(key))
    : initialValue;

  const [value, setValue] = useState(storedValue);

  const updateValue = (newValue) => {
    setValue(newValue);
    if (isLocalStorageAvailable) {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  const removeValue = () => {
    setValue(initialValue);
    if (isLocalStorageAvailable) {
      localStorage.removeItem(key);
    }
  };

  return [value, updateValue, removeValue];
}
