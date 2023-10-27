import { Props as PropsProductCard } from "../components/ProductCard";
import { Props as PropsProductButtons } from "../components/ProductButtons";
import { Props as PropsProductImage } from "../components/ProductImage";
import { Props as PropsProductTitle } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  maxCount?: number;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: PropsProductCard): JSX.Element;
  Title: (Props: PropsProductTitle) => JSX.Element;
  Image: (Props: PropsProductImage) => JSX.Element;
  Buttons: (Props: PropsProductButtons) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
