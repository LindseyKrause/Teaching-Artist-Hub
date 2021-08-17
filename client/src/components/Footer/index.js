/** @format */

import { Height } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

// const img = styled.img`
// width: 37px !important;
// height: 27px !important;
// `
const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ fixed: "bottom", position: "sticky" }}>
        <a href="https://phoenixcenterforthearts.org/" target="_blank" rel="noopener noreferrer">&copy;2021Central Arts Alliance 1202 North 3rd Street, Phoenix, AZ
            85004 (602) 254-3100</a>
      </div>
    </footer>
  );
};
export default Footer;
