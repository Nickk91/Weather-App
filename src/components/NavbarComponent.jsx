import React, { useEffect } from "react";
import "../stylesheets/navbar-styling.css";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = ({ handleLogout, setIsLogged, isLogged }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/stats">
          <li>Stats</li>
        </Link>
        <Link to="/comments">
          <li>Comments</li>
        </Link>

        <Link to="/login">
          <li onClick={handleLogout}>Logout</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
