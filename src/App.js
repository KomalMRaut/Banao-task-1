import { React, useState } from "react";
import "./App.css";
import Logo from "./Assets/Logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "react-bootstrap";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import TodayIcon from "@material-ui/icons/Today";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import EditIcon from "@material-ui/icons/Edit";
import Post from "./Post";
import Post1 from "./Assets/post1.png";
import Post2 from "./Assets/post2.png";
import Post3 from "./Assets/post3.png";
import Profile1 from "./Assets/Profile/profile 1.svg";
import Profile2 from "./Assets/Profile/profile 2.svg";
import Profile3 from "./Assets/Profile/profile 3.svg";
import Profile4 from "./Assets/Profile/profile 4.svg";
import Drop from "./Assets/Drop.svg";
import StatIco from "./Assets/StatIco.svg";
import Popup from "./Popup";
import Signup from "./Signup";
import Signin from "./SignIn";
import { Typography, useMediaQuery } from "@material-ui/core";

function App() {
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  const matches = useMediaQuery("(max-width:1200px)");
  const matches2 = useMediaQuery("(max-width:960px)");
  const matches3 = useMediaQuery("(max-width:480px)");
  return (
    <div className="app">
      <div className="navigation">
        {matches2 ? (
          <img src={StatIco} alt="" />
        ) : (
          <>
            <h2>
              <span style={{ color: "#27a365" }}>ATG.</span>
              <span style={{ color: "#5C5D5D" }}>
                W
                <img
                  src={Logo}
                  style={{ marginBottom: ".4rem" }}
                  alt=""
                  width="24"
                  height="24"
                />
                RLD
              </span>
            </h2>
            <div className="nav__searchbar">
              <SearchIcon className="nav__search-icon" />
              <input
                className="search__txt"
                type="search"
                placeholder="Search for your favorite groups in ATG"
              />
            </div>
            <div className="nav__btn">
              <button
                className="nav__btn__dropdown"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <span style={{ fontSize: "1rem" }}>Create account.</span>
                <span
                  style={{
                    color: "#2F6CE5",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  It’s free!
                  <img
                    style={{
                      margin: "0 0 3px 5px",
                      height: "0.625rem",
                      width: "0.625rem",
                    }}
                    src={Drop}
                    alt=""
                  />
                </span>
              </button>
              {open && (
                <div>
                  <button
                    className="nav__btn__dropdown"
                    onClick={() => {
                      setOpenSignin(true);
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    className="nav__btn__dropdown"
                    onClick={() => {
                      setOpenSignup(true);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <div className="head-sec">
        {matches3 && (
          <div className="head-sec__nav">
            <ArrowBackIcon />
            <button className="head-sec__nav__btn">Join Group</button>
          </div>
        )}
        <div className="head-sec__txt">
          <div className="head-sec__heading">Computer Engineering</div>
          <div className="head-sec__sub-heading">
            142,765 Computer Engineers follow this
          </div>
        </div>
      </div>
      <div className="main-sec">
        <div className="main__post-nav">
          <div className="post-nav__sections">
            {matches ? (
              <button className="post__mobile">Posts(368)</button>
            ) : (
              <>
                <button className="post post--active">All Posts(32)</button>
                <button className="post">Article</button>
                <button className="post">Event</button>
                <button className="post">Education</button>
                <button className="post">Job</button>
              </>
            )}
          </div>
          <div className="post-nav__btns">
            <Button variant="light" className="post-nav__btns__light-btn">
              {matches ? "Filter: All" : "Write a Post"}
            </Button>
            {!matches && (
              <Button variant="primary" className="post-nav__btns__primary-btn">
                <GroupAddIcon
                  fontSize="small"
                  style={{ marginRight: "0.5rem", verticalAlign: "top" }}
                />
                Join Group
              </Button>
            )}
          </div>
        </div>
        <div className="main__posts">
          <div className="main__posts__cards">
            <Post
              img={Post1}
              topic={"✍️ Article"}
              heading={
                "What if famous brands had regular fonts? Meet RegulaBrands!"
              }
              info={
                "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
              }
              profileIcon={Profile1}
              profileName={"Sarthak Kamra"}
            />
            <Post
              img={Post2}
              topic={"🔬️ Education"}
              heading={
                "Tax Benefits for Investment under National Pension Scheme launched by Government"
              }
              info={
                "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
              }
              profileIcon={Profile2}
              profileName={"Sarah West"}
            />
            <Post
              img={Post3}
              topic={"🗓️ Meetup"}
              heading={"Finance & Investment Elite Social Mixer @Lujiazui"}
              infoIcon={
                <TodayIcon
                  style={{ verticalAlign: "bottom", marginRight: "0.5rem" }}
                />
              }
              infoTxt={"Fri, 12 Oct, 2018"}
              location={"Ahmedabad, India"}
              btnTxt={"Visit Website"}
              btnColor={"#E56135"}
              profileIcon={Profile3}
              profileName={"Ronal Jones"}
            />
            <Post
              topic={"💼️ Job"}
              heading={"Software Developer"}
              infoIcon={
                <WorkOutlineIcon
                  style={{ verticalAlign: "bottom", marginRight: "0.5rem" }}
                />
              }
              infoTxt={"Innovaccer Analytics Private Ltd."}
              location={"Noida, India"}
              btnTxt={"Apply on Timesjobs"}
              btnColor={"#02B875"}
              profileIcon={Profile4}
              profileName={"Joseph Gray"}
            />
          </div>
          {!matches && (
            <div className="main__posts__location">
              <div className="location__details">
                <Typography className="location-txt">
                  <LocationOnOutlinedIcon style={{ verticalAlign: "middle" }} />
                  Noida, India
                </Typography>
                <EditIcon style={{ verticalAlign: "middle" }} />
              </div>
              <div className="location__info">
                <ErrorOutlineIcon />
                <Typography>
                  Your location will help us serve better and extend a
                  personalised experience.
                </Typography>
              </div>
            </div>
          )}
        </div>
      </div>
      <Popup openPopup={openSignup} setOpenPopup={setOpenSignup}>
        <Signup />
      </Popup>
      <Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
        <Signin />
      </Popup>
    </div>
  );
}

export default App;
