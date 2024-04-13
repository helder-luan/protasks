import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const storedValue = JSON.parse(localStorage.getItem(key)) ?? initialValue;

  const [value, setValue] = useState(storedValue);

  function updateValue(newValue) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  function removeValue() {
    setValue(initialValue);
    localStorage.removeItem(key);
  }

  return [value, updateValue, removeValue];
}
