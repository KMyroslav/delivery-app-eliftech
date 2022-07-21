import ProductListItem from "./ProductListItem";
import styles from "./productsContainer.module.scss";

export default function ProductContainer({ shop }) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {shop.products.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
