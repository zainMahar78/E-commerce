import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { formatMoney } from "../utils/money";
import "./products.css";
export function Products( {cart}) {
  const [products, setProduct] = useState([]);
  
  

    useEffect(()=>{
axios.get("/api/products").then((response) => {
      setProduct(response.data);
    })
    }, [])

  return (
    <>
      <Navbar cart={cart}/>
      <div className="all-products-container row">
        {products.map((pro) => {
          return (
            <div
              className="product-container col-lg-3 col-md-4 col-sm-6"
              key={pro.id}
            >
              <div>
                <img src={pro.image} alt="" className="product-img" />
              </div>
              <div className="product-name limit-text-to-2-lines">
                <span>{pro.name}</span>
              </div>
              <div className="rating-img-container">
                <img
                  src={`images/ratings/rating-${pro.rating.stars * 10}.png`}
                  alt="4.5 rating"
                  className="rating-img"
                />
                <span className="rating-text">{pro.rating.count}</span>
                <div></div>
              </div>
              <div className="product-price">
                <span>{formatMoney(pro.priceCents)}</span>
              </div>
              <div>
                <select className="select-div">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <button className="addtocart-btn">Add to Cart</button>
            </div>
          );
        })}{" "}
      </div>
    </>
  );
  }