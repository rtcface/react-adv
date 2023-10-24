import { ProductContextProps } from "../interfaces/interfaces";
import { createContext } from "react";

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;
