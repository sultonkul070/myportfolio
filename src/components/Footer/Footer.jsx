import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">
          <a href="/">My Portfolio</a>
        </Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          © 2020 Designed and developed by <a href="/">Sultonkul Nortoylokov</a>
          <br />
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
