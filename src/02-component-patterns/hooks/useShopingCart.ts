import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";

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
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoping;
        return rest;
      }

      return {
        ...oldShoping,
        [product.id]: { ...product, count },
      };
    });
  };
  return {
    shopingCart,
    onProductCountChange,
  };
};
