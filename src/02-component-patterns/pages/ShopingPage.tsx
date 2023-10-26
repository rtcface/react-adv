import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
import { useShopingCart } from "../hooks/useShopingCart";
import { products } from "../data/products";

export const ShopingPage = () => {
  const { onProductCountChange, shopingCart } = useShopingCart();
  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center", // center, start, end, space-between, space-around, space-evenly
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shopingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shoping-card">
        {Object.entries(shopingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "90px" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />

            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
      {/* <div>
        <code>{JSON.stringify(shopingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};
