import React from "react";
import { Link } from "react-router-dom";
const name = sessionStorage.getItem("name");

export default function Navbar() {
  const handleLogout = () => {
    sessionStorage.clear("name");
    alert("Logged out successfully");
    window.location.reload();
  };
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link
          className="navbar__link"
          to="/"
          style={{ color: "white", fontSize: "25px", fontWeight: "600" }}
        >
          My Blogs
        </Link>
        <div className="navbar__links">
          {name ? (
            <p style={{ color: "Green", cursor: "pointer", fontSize: "25px" }}>
              Welcome {name}
            </p>
          ) : (
            <Link className="navbar__link" to="/login">
              Login
            </Link>
          )}
          {name ? (
            <span onClick={handleLogout}>
              <p
                style={{
                  color: "rgb(81, 0, 0)",
                  cursor: "pointer",
                  fontSize: "25px",
                }}
              >
                Logout
              </p>
            </span>
          ) : (
            <Link className="navbar__link" to="/register">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
