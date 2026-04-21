import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Products } from "./pages/Products";
import { Orders } from "./pages/Orders";
import { Checkout } from "./pages/Checkout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/Orders" element={<Orders/>}></Route>
      <Route path="/Checkout" element={<Checkout/>}></Route>
    </Routes>
  );
}
export default App;
