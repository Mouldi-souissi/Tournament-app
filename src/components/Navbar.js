import React from "react";
import { Link } from "react-router-dom";
import winner from "../assets/cup.png";
const Navbar = () => {
  return (
    <div className="pt-3 pb-3 d-flex bg-dark justify-content-center align-items-center">
      <img src={winner} alt="logo" height="80px" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <header className="display-4 text-white">Tournament</header>
      </Link>
    </div>
  );
};

export default Navbar;
