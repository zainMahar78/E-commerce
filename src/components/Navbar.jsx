import { Link } from "react-router-dom";
import whiteLogo from "../assets/images/logo-white.png";
import searchIcon from "../assets/icons/search-icon.png";
import cartIcon from "../assets/images/cart-icon.png"

import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
        <Link className="logo-link header-link" to="/">

      <img src={whiteLogo} alt="" className="logo"/>
        </Link>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar"/>
        <button className="search-btn">
          <img src={searchIcon} alt="" className="search-icon"/>
        </button>
      </div>
      <Link to="/Orders" className="order-link header-link">
        <span>Orders</span>
      </Link>
      <Link to="" className="cart-link header-link">
        <img src={cartIcon} alt="" className="cart-icon"/>
        <div className="cart-quantity">3</div>
        <div className="cart-text">Cart</div>
      </Link>
    </nav>
  );
}
