import { CSSProperties } from "react";
import styles from "../styles/styles.module.css";

import { Provider } from "../context";
import { useProduct } from "../hooks";
import {
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces/interfaces";

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element; //ReactElement | ReactElement[] |
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
