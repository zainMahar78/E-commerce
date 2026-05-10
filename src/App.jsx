import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Products } from "./pages/home/Products";
import { Orders } from "./pages/orders/Orders";
import { Checkout } from "./pages/Checkout/Checkout";
import { TrackPackage } from "./pages/orders/TrackPackage";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [cart, setCart] = useState([]);

 useEffect(()=>{
  const getAppData = async () => {
    const response = axios.get("/api/cart-items?expand=product");
    setCart(response.data);

  }
  getAppData();
 }, []);
  return (
    <Routes>
      <Route path="/" element={<Products cart={cart}/>}></Route>
      <Route path="/Orders" element={<Orders cart={cart}/>}></Route>
      <Route path="/Checkout" element={<Checkout cart={cart}/>}></Route>
      <Route path="/TrackPackage/:orderId/:productId" element={ <TrackPackage cart={cart}/>}></Route>
    </Routes>
  );
}
export default App;
