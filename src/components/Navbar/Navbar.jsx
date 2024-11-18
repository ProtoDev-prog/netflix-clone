import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import React, { useEffect, useRef } from "react";
import { logOut } from "../../firebase";
const Navbar = () => {
  let navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        navRef.current.classList.add("add");
      } else {
        navRef.current.classList.remove("add");
      }
    });
  }, []);
  let locate = useNavigate();
  return (
    <nav className="nav-bar" ref={navRef}>
      <div className="left">
        <img src="/src/assets/logo.png" alt="" width={"100px"} />
        <div className="links">
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">News & Popular</a>
          <a href="#">My List</a>
          <a href="#">Browse By Languages</a>
        </div>
      </div>
      <div className="right">
        <img src="/src/assets/search_icon.svg" alt="" />
        <p>Children</p>
        <img src="/src/assets/bell_icon.svg" alt="" />
        <div className="user-details">
          <img src="/src/assets/profile_img.png" alt="" className="user" />
          <a className="button" onClick={logOut}>
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
