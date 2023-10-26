import { useState, useEffect, useRef } from "react";
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

  const isControlled = useRef(!!onChange);
  console.log(isControlled.current);
  const increaseBy = (val: number) => {
    if (isControlled.current) {
      return onChange!({ count: val, product });
    }
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
