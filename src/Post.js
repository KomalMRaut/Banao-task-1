import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function Post(props) {
  const {
    img,
    topic,
    heading,
    info,
    infoIcon,
    infoTxt,
    profileIcon,
    profileName,
    location,
    btnTxt,
    btnColor,
  } = props;
  return (
    <div className="card">
      {img !== undefined && <img src={img} alt="" className="card__img" />}
      <div style={{ padding: "0 1.25rem 1.25rem" }}>
        <Typography className="card__title">{topic}</Typography>
        <div className="card__heading">
          <Typography className="heading__txt">{heading}</Typography>
          <MoreHorizIcon />
        </div>
        {info === undefined ? (
          <>
            <div className="personal__info">
              <span>
                {infoIcon}
                {infoTxt}
              </span>
              <span>
                <LocationOnOutlinedIcon
                  style={{
                    marginLeft: "2.75rem",
                    marginRight: "0.5rem",
                    verticalAlign: "bottom",
                  }}
                />
                {location}
              </span>
            </div>
            <button className="personal__btn" style={{ color: btnColor }}>
              {btnTxt}
            </button>
          </>
        ) : (
          <Typography className="card__info">{info}</Typography>
        )}

        <div className="card__footer">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={profileIcon}
              style={{ width: "3rem", height: "3rem", marginRight: "0.625rem" }}
            />
            <Typography className="footer__name">{profileName}</Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <VisibilityOutlinedIcon />
            <Typography className="view-count">1.4k views</Typography>
            <ShareIcon
              style={{
                background: "#EDEEF0",
                borderRadius: "2px",
                padding: "0.625rem",
                width: "2rem",
                height: "2rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
