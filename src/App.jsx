import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Products } from "./pages/Products";
import { Orders } from "./pages/Orders";
import { Checkout } from "./pages/Checkout";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [cart, setCart] = useState([]);

 useEffect(()=>{
  axios.get("/api/cart-items?expand=product").then((response) => {
     setCart(response.data);
    });
 }, []);
  return (
    <Routes>
      <Route path="/" element={<Products cart={cart}/>}></Route>
      <Route path="/Orders" element={<Orders/>}></Route>
      <Route path="/Checkout" element={<Checkout cart={cart}/>}></Route>
    </Routes>
  );
}
export default App;
