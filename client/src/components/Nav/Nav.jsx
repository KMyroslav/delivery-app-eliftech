import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.company}>
        Delivery App
      </NavLink>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navLink}>
          Shops
        </NavLink>

        <NavLink to="/cart" className={styles.navLink}>
          Shopping Cart
        </NavLink>
      </nav>
    </header>
  );
}
