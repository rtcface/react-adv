import { useState } from "react";
import { ProductInCart } from "../interfaces/interfaces";

export const useShopingCart = () => {
  const [shopingCart, setShopingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShopingCart((oldShoping) => {
      const productInCart: ProductInCart = oldShoping[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoping,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoping;
      return rest;

      /* if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoping;
            return rest;
          }
    
          return {
            ...oldShoping,
            [product.id]: { ...product, count },
          }; */
    });
  };
  return {
    shopingCart,
    onProductCountChange,
  };
};
