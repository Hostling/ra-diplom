import React from "react";
import FooterMenu from "./FooterMenu";
import FooterPay from "./FooterPay";
import FooterContacts from "./FooterContacts";

const Footer = (props) => {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <FooterMenu />
        <FooterPay />
        <FooterContacts />
      </div>
    </footer>
  );
};

export default Footer;
