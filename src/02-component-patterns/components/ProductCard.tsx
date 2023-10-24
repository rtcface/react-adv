import styles from "../styles/styles.module.css";
import noImagen from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <img
        src="./coffee-mug.png"
        alt="Coffee"
        className={styles.productImg}
      />
      {/*  <img
        className={styles.productImg}
        src={noImagen}
        alt=""
      /> */}

      <span className={styles.productDescription}> Coffee Mug</span>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonMinus}
          onClick={() => increaseBy(-1)}
        >
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button
          className={styles.buttonAdd}
          onClick={() => increaseBy(+1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
