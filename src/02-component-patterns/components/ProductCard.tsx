import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";
import { Provider } from "../context";
import { ProductCardProps } from "../interfaces/interfaces";

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
