// useLocalStorage hook'unu burada oluştur:
// localStorage'a 's11g1' gibi bir key ile veri okuyup yazan, [value, setValue]
// dönen bir custom hook yaz (useState + useEffect kullan).
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
