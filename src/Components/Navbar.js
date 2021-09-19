import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../Assets/Logo.svg";
import Drop from "../Assets/Drop.svg";
import Popup from "./Popup";
import Signup from "./Signup";
import Signin from "./Signin";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import StatIco from "../Assets/StatIco.svg";

export default function Navbar() {
  const matches = useMediaQuery("(max-width:420px)");
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  return (
    <>
      <nav className="Navbar">
        {matches ? (
          <div className="NavDiv">
            <img src={StatIco} alt="" />
          </div>
        ) : (
          <div className="NavDiv">
            <h1
              style={{
                fontFamily: "sans-serif",
                margin: "0",
              }}
            >
              <span style={{ color: "#27a365" }}>ATG.</span>
              <span style={{ color: "#5C5D5D" }}>
                W
                <img
                  src={Logo}
                  style={{ marginBottom: ".8rem" }}
                  alt=""
                  width="30"
                  height="30"
                />
                RLD
              </span>
            </h1>
            <div className="SearchBar">
              <SearchIcon className="searchIcon" />
              <input
                className="Searchtext"
                type="search"
                placeholder="Search for your favorite groups in ATG"
              />
            </div>
            <div className="Dropdown">
              <button
                className="Dropbutton"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <span style={{ fontSize: "1.6rem" }}>Create account.</span>
                <span
                  style={{
                    color: "#2F6CE5",
                    fontWeight: "500",
                    fontSize: "1.6rem",
                  }}
                >
                  It’s free!
                  <img
                    style={{
                      margin: "0 0 .3rem .5rem",
                      height: "1rem",
                      width: "1rem",
                    }}
                    src={Drop}
                    alt=""
                  />
                </span>
              </button>
              {open && (
                <div>
                  <button
                    className="Dropbutton"
                    onClick={() => {
                      setOpenSignin(true);
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    className="Dropbutton"
                    onClick={() => {
                      setOpenSignup(true);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
      <Popup openPopup={openSignup} setOpenPopup={setOpenSignup}>
        <Signup />
      </Popup>
      <Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
        <Signin />
      </Popup>
    </>
  );
}
