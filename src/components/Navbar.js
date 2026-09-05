import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { MdWorkspaces } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { path: "/", icon: <AiOutlineHome />, label: "Home" },
    { path: "/about", icon: <AiOutlineUser />, label: "About" },
    {
      path: "/project",
      icon: <AiOutlineFundProjectionScreen />,
      label: "Projects",
    },
    { path: "/resume", icon: <CgFileDocument />, label: "Resume" },
    { path: "/blog", icon: <ImBlog />, label: "Blog" },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      role="navigation"
      aria-label="Primary"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={scrollToTop}
          className="d-flex align-items-center"
        >
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <span className="navbar-brand-text">
            <span className="brand-first">Dawid</span>
            <span className="brand-dot">.</span>
            <span className="brand-second">Olko</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-expanded={expand ? true : false}
          aria-label="Toggle navigation menu"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map((item) => (
              <Nav.Item key={item.path}>
                <Nav.Link
                  as={Link}
                  to={item.path}
                  onClick={() => updateExpanded(false)}
                  aria-current={
                    location.pathname === item.path ? "page" : undefined
                  }
                  className={
                    location.pathname === item.path ? "active-nav" : ""
                  }
                >
                  <span className="nav-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item>
              <Nav.Link
                href="https://workstation.dawidolko.pl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WorkStation (opens in a new tab)"
                className="external-link nav-workstation"
              >
                <MdWorkspaces
                  aria-hidden="true"
                  style={{ marginBottom: "2px" }}
                />{" "}
                WorkStation
                <span className="nav-external-badge" aria-hidden="true">
                  ↗
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://cv.dawidolko.pl/en/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CV (opens in a new tab)"
                className="external-link"
              >
                <CgFileDocument
                  aria-hidden="true"
                  style={{ marginBottom: "2px" }}
                />{" "}
                CV
                <span className="nav-external-badge" aria-hidden="true">
                  ↗
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
