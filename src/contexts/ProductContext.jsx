// ProductContext'i burada oluştur:
// createContext() ile context oluştur ve <ProductContext.Provider value={{ ... }}>
// ile saran bir Provider component'i export et (kitap listesini value olarak geç).
import { createContext, useState } from 'react';
import { data } from '../data';

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(data);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
