import { Navbar } from "../components/Navbar";
import socks from "../assets/images/athletic-cotton-socks-6-pairs.jpg";
import rating45 from "../assets/rating/rating-45.png";
import basketball from "../assets/images/intermediate-composite-basketball.jpg";
import shirts from "../assets/images/adults-plain-cotton-tshirt-2-pack-teal.jpg";
import rating40 from "../assets/rating/rating-40.png";
import "./products.css";
export function Products() {
  const product = [
    {
      img: socks,
      description: "Black and gray Athletic Cotton Socks-6 Pairs",
      rating_img: rating45,
      rating_text: "87",
      product_price: 10.9,
    },{
      img: basketball,
      description: "Intermediate Size Basketball",
      rating_img: rating40,
      rating_text: "127",
      product_price: 20.90,
    },{
      img: shirts,
      description: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating_img: rating45,
      rating_text: "56",
      product_price: 7.99,
    }
  ];
  return (
    <>
      <Navbar />
      <div className="all-products-container">
    {product.map((pro, index) => {
     return <div className="product-container" key={index}>
          <div>
            <img src={pro.img} alt="" className="product-img" />
          </div>
          <div className="product-name limit-text-to-2-lines">
            <span>{pro.description}</span>
          </div>
          <div className="rating-img-container">
            <img src={pro.rating_img} alt="4.5 rating" className="rating-img" />
            <span className="rating-text">{pro.rating_text}</span>
            <div></div>
          </div>
          <div className="product-price">
            <span>${pro.product_price}</span>
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
    })} </div>
    </>)}