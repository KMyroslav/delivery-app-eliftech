import ProductListItem from "./ProductListItem";

export default function ProductContainer({ shop }) {
  return (
    <div>
      <ul>
        {shop.products.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
