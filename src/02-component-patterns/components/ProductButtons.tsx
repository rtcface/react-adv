import { useContext, CSSProperties, useCallback } from "react";

import styles from "../styles/styles.module.css";
import { ProductContext } from "../context/ProductContext";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //Todo: maxCount
  const { counter, increaseBy, maxCount } = useContext(ProductContext);
  const isMaxReached = useCallback(() => {
    return !!maxCount && counter === maxCount;
  }, [counter, maxCount]);

  return (
    <div
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
