import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";
import { Provider } from "../context";
import { ProductButtons, ProductTitle, ProductImage } from "./";

export const ProductCard = ({ product, children }: Props) => {
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

ProductCard.Buttons = ProductButtons;
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
