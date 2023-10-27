import { useState, useEffect } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface ArgsUseProduct {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: ArgsUseProduct) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (val: number) => {
    const newValue = Math.max(counter + val, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
