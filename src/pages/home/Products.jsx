import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ProductContainer } from "./ProductContainer";
import "./products.css";
export function Products( {cart}) {
  const [products, setProduct] = useState([]);
  
  

    useEffect(()=>{
      const getHomeData = async () => {
        const response = await axios.get("/api/products");
        setProduct(response.data);
      }
      
    getHomeData();
    }, [])

  return (
    <>
      <Navbar cart={cart}/>
      <div className="all-products-container row">
       <ProductContainer products={products}/>
      </div>
    </>
  );
  }