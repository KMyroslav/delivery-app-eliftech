import { NavLink, useNavigate } from "react-router-dom";

export default function Nav () {
return <div>
    <nav>
        <NavLink to="/">
          Shops
        </NavLink>

        <NavLink to="/cart">
          Shopping Cart
        </NavLink>
        </nav>
</div>
}