import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const telegramMe = "https://www.t.me/nortoylokov";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home Link */}
      <Nav.Link className="header_navlink p-0 m-0" as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/blog"
            className={
              pathName === "/blog" ? "header_link_active" : "header_link"
            }
          >
            Blog
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName === "/contact" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key, index) => (
            <a key={index} href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <a href={telegramMe} target="_blank">
            <CustomButton text={"Hire me"} icon={<Telegram />} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
