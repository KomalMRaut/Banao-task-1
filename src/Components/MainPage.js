import React, { useState } from "react";
import TodayIcon from "@material-ui/icons/Today";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import EditIcon from "@material-ui/icons/Edit";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import Drop from "../Assets/Drop.svg";
import Post1 from "../Assets/post1.png";
import Post2 from "../Assets/post2.png";
import Post3 from "../Assets/post3.png";
import Profile1 from "../Assets/Profile/profile 1.svg";
import Profile2 from "../Assets/Profile/profile 2.svg";
import Profile3 from "../Assets/Profile/profile 3.svg";
import Profile4 from "../Assets/Profile/profile 4.svg";
import Post from "./Post";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function MainPage() {
  const [active, setActive] = useState(1);
  const matches = useMediaQuery("(max-width:420px)");

  return (
    <div className="MainPage">
      <div className="Heading">
        <h2>Computer Engineering</h2>
        <h4>142,765 Computer Engineers follow this</h4>
      </div>
      {matches ? (
        <div className="Pannel">
          <b>Posts(368)</b>
          <button>
            Filter: All    
            <img src={Drop} alt="" />
          </button>
        </div>
      ) : (
        <div className="Pannel">
          <ul>
            <div>
              <li
                onClick={() => {
                  setActive(1);
                }}
                className={active === 1 ? "nav-link active-link" : "nav-link"}
              >
                <a href="#">All Posts(32)</a>
                <div className="underline"></div>
              </li>
              <li
                onClick={() => {
                  setActive(2);
                }}
                className={active === 2 ? "nav-link active-link" : "nav-link"}
              >
                <a href="#">Artical</a>
                <div className="underline"></div>
              </li>
              <li
                onClick={() => {
                  setActive(3);
                }}
                className={active === 3 ? "nav-link active-link" : "nav-link"}
              >
                <a href="#">Event</a>
                <div className="underline"></div>
              </li>
              <li
                onClick={() => {
                  setActive(4);
                }}
                className={active === 4 ? "nav-link active-link" : "nav-link"}
              >
                <a href="#">Educational</a>
                <div className="underline"></div>
              </li>
              <li
                onClick={() => {
                  setActive(5);
                }}
                className={active === 5 ? "nav-link active-link" : "nav-link"}
              >
                <a href="#">Job</a>
                <div className="underline"></div>
              </li>
            </div>
            <div className="PlaceBtn">
              <button className="btn btn-light PostB">
                Write a Post
                <span>
                  <img
                    style={{ margin: "0 0 .3rem .5rem" }}
                    src={Drop}
                    alt=""
                    width="10"
                    height="10"
                  />
                </span>
              </button>
              <button className="btn btn-primary JoinB">
                <GroupAddIcon
                  fontSize="large"
                  style={{ verticalAlign: "top", marginRight: ".6rem" }}
                />
                <b>Join Group</b>
              </button>
            </div>
          </ul>
          <hr
            style={{
              position: "absolute",
              top: "2.3rem",
              width: "100%",
              border: ".1rem solid #E0E0E0",
              zIndex: "-1",
            }}
          />
          <div className="Location">
            <div
              style={{
                borderBottom: "0.04rem solid #B8B8B8",
                paddingBottom: "1.0rem",
              }}
            >
              <LocationOnOutlinedIcon
                style={{ verticalAlign: "text-bottom", marginRight: ".8rem" }}
              />
              Noida, India
              <EditIcon
                style={{ verticalAlign: "text-bottom", marginLeft: "12.5rem" }}
              />
            </div>
            <div style={{ paddingTop: "3.5rem", display: "flex" }}>
              <InfoOutlinedIcon
                style={{ opacity: "50%", marginRight: ".9rem" }}
              />
              <p style={{ opacity: "50%", width: "22rem", fontSize: "1.2rem" }}>
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="Body">
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
              fontSize="large"
              style={{ verticalAlign: "text-bottom" }}
            />
          }
          infoText={"Fri, 12 Oct, 2018"}
          location={"Ahmedabad, India"}
          buttonText={"Visit Website"}
          buttonTextColor={"#E56135"}
          profileIcon={Profile3}
          profileName={"Ronal Jones"}
        />
        <Post
          topic={"💼️ Job"}
          heading={"Software Developer"}
          infoIcon={
            <WorkOutlineIcon
              fontSize="large"
              style={{ verticalAlign: "text-bottom" }}
            />
          }
          infoText={"Innovaccer Analytics Private Ltd."}
          location={"Noida, India"}
          buttonText={"Apply on Timesjobs"}
          buttonTextColor={"#02B875"}
          profileIcon={Profile4}
          profileName={"Joseph Gray"}
        />
      </div>
    </div>
  );
}
