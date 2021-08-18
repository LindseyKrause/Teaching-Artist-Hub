/** @format */

import React from "react";
import SocialDrawer from "../SocialDrawer";

const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ fixed: "bottom", position: "sticky" }}>
        <a style={{ fixed: "bottom", position: "sticky" }} href="https://phoenixcenterforthearts.org/" target="_blank" rel="noopener noreferrer">&copy;2021Central Arts Alliance 1202 North 3rd Street, Phoenix, AZ
            85004 (602) 254-3100</a>
      </div>
      <SocialDrawer></SocialDrawer>
    </footer>
  );
};

export default Footer;
