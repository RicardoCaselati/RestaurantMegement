import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChaoMenuProps from "../interface/ChaoMenuInterface";

const ChaoMenu: React.FC<ChaoMenuProps> = ({ itens, routes }) => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth > 991,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 991);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const listItensMenu = () => {
    return itens.map((eachItem, index) => (
      <li className="nav-item" key={index}>
        <Link className="nav-link" to={`${routes[index]}`}>
          {eachItem}
        </Link>
      </li>
    ));
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#f6f2e9",
        height: isLargeScreen ? "100vh" : "auto",
        width: isLargeScreen ? "200px" : "100%",
        position: isLargeScreen ? "static" : "static",
        display: isLargeScreen ? "flex" : "block",
        alignItems: isLargeScreen ? "flex-start" : "normal",
      }}
    >
      <div className="container-fluid justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">{listItensMenu()}</ul> */}
          <ul className="navbar-nav flex-lg-column">{listItensMenu()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default ChaoMenu;
