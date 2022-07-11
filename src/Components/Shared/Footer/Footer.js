import React from "react";
import appointment from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <div style={{ background: `url(${appointment})`, backgroundSize: "cover" }}>
      <footer className="footer p-10 py-12 text-black-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Our Health</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="text-center py-3">
        <p>Copyright © 2022 - All right reserved by Hello Doctor Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
