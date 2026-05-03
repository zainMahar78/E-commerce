import { Link } from "react-router-dom";
import whiteLogo from "../assets/images/logo-white.png";
import searchIcon from "../assets/icons/search-icon.png";
import cartIcon from "../assets/images/cart-icon.png"
import mobilelog from "../assets/images/mobile-logo.png";
import "./Navbar.css";

export function Navbar( {cart}) {
   let totalQuantity =  (cart || []).reduce((total, item) => {
  return total + (item.quantity || 0);
}, 0);;
   
  return (
    
    <nav className="navbar">
        <Link className="logo-link header-link" to="/">

      <img src={whiteLogo} alt="" className="logo"/>
      <img src={mobilelog} alt="" className="mobile-logo"/>
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
      <Link to="/Checkout" className="cart-link header-link">
        <img src={cartIcon} alt="" className="cart-icon"/>
        <div className="cart-quantity">{totalQuantity}</div>
        <div className="cart-text">Cart</div>
      </Link>
    </nav>
    
  );
}
