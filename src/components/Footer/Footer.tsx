import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_contents">
        <div className="content">
          <h3 className="footer_heading">SULTHAN ENTERPRISES</h3>
          <p>
            Sulthan Enterprises brings you farm-fresh vegetables and quality produce, carefully<br/> sourced and delivered to
            your doorstep.<br/> We’re dedicated to healthy living and customer satisfaction.
          </p>
          <div className="social_icons">
            <div className="icon">
              <FiInstagram size={20} />
            </div>
            <div className="icon">
              <FaFacebookF size={20} />
            </div>
            <div className="icon">
              <GrTwitter size={20} />
            </div>
          </div>
        </div>
        <div className="footer_items">
          <div className="content">
            <h3>Menu</h3>
            <Link href={"#"}>Shop</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Contact Us</Link>
          </div>
          <div className="content">
            <h3>Help</h3>
            <Link href={"#"}>Shipping Information</Link>
            <Link href={"#"}>Returns & Exchange</Link>
            <Link href={"#"}>Terms & Conditions</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <p className="copy_right">© 2025 Sulthan Enterprises. All rights reserved.</p>
    </div>
  );
};

export default Footer;
