import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const products = [
  { id: 1, name: "Tomato", price: 30, mrp:35, image: "/images/products/tomato_1.webp" },
  { id: 2, name: "Carrot", price: 60, mrp:72, image: "/images/products/carrot_1.png" },
  { id: 3, name: "Onion", price: 32, mrp:44, image: "/images/products/onion_1.png" },
  { id: 4, name: "Garlic", price: 20, mrp:30, image: "/images/products/garlic_1.png" },
  { id: 5, name: "Purple Cabbage", price: 20, mrp:30, image: "/images/products/cabbage_1.png" },
  { id: 6, name: "Bell pepper", price: 20, mrp:30, image: "/images/products/bell_pepper_1.png" },
  { id: 7, name: "Brocolli", price: 20, mrp:30, image: "/images/products/brocolli_1.png" },
  { id: 8, name: "Red Chilli", price: 20, mrp:30, image: "/images/products/red_chilli_1.png" },
  { id: 9, name: "Green Beans", price: 20, mrp:30, image: "/images/products/beans_1.png" },
  { id: 10, name: "Spring Onion", price: 20, mrp:30, image: "/images/products/spring_onion_1.png" },
];

const ProductsList = () => {
  return (
    <div className="product_list_container">
      <h1 className="product_list_h1">Our Products</h1>
      <div className="products_container">
        {products.map((product) => (
          <div key={product.id} className="product_item">
            <div className="image_div">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="details_div">
              <div className="details">
                <h3>{product.name}</h3>
              </div>
              <div className="price_div">
                <h2>{product.price.toFixed(2)} <span className="mrp">{product.mrp.toFixed(2)}</span></h2>
                <div className="cart_icon">
                  <FiShoppingCart size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
