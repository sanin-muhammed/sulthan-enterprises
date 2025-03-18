import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="logo_div">
        <h1 className="logo">SULTHAN ENTERPRISES</h1>
      </div>
      <div className="menu">
        <div className="menu_item">
          <h5>Home</h5>
        </div>
        <div className="menu_item">
          <h5>Shop</h5>
        </div>
        <div className="menu_item">
          <h5>About Us</h5>
        </div>
        <div className="menu_item">
          <h5>Contact Us</h5>
        </div>
      </div>
      <div className="header_icons">
        <div className="profile_icon">
          <div className="icon">
            <FiUser />
          </div>
        </div>
        <div className="cart_icons">
          <div className="icon">
            <FiShoppingCart />
          </div>
          <div className="icon">
            <FiHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
