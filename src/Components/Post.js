import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShareIcon from "@material-ui/icons/Share";

export default function Post(props) {
  const {
    img,
    topic,
    heading,
    info,
    infoIcon,
    infoText,
    location,
    buttonText,
    buttonTextColor,
    profileIcon,
    profileName,
  } = props;
  return (
    <Card
      style={{
        width: "69.2rem",
        margin: "1.6rem 0",
        padding: "1.6rem 0rem",
      }}
    >
      <CardContent style={{ padding: "0rem" }}>
        {img === undefined ? null : <img src={img} alt="" />}
        <Typography
          style={{
            fontSize: 18,
            fontWeight: "500",
            padding: "2.0rem 0 0 2.0rem",
            color: "black",
          }}
          gutterBottom
        >
          {topic}
        </Typography>
        <div style={{ display: "flex" }}>
          <Typography
            style={{
              padding: "1.0rem 7.2rem 0 2.0rem",
              fontWeight: "600",
              color: "black",
              fontSize: "2.2rem",
            }}
          >
            {heading}
          </Typography>
          <b
            style={{
              position: "absolute",
              right: "2.467rem",
              fontSize: "2.8rem",
            }}
          >
            ...
          </b>
        </div>
        {info === undefined ? (
          <div
            style={{
              padding: "1.2rem 2.0rem",
              fontSize: "1.9rem",
              fontWeight: "500",
            }}
          >
            {infoIcon}
            <span style={{ marginLeft: ".7rem" }}>{infoText}</span>
            <LocationOnOutlinedIcon
              fontSize="large"
              style={{ verticalAlign: "text-bottom", marginLeft: "3.4rem" }}
            />
            <span style={{ marginLeft: ".7rem" }}>{location}</span>
            <button
              style={{
                margin: "1.6rem 0rem",
                width: "65.2rem",
                height: "3.8rem",
                background: "white",
                border: "0.07rem solid #A9AEB8",
                boxSizing: "border-box",
                color: buttonTextColor,
                borderRadius: ".8rem",
              }}
            >
              {buttonText}
            </button>
          </div>
        ) : (
          <Typography
            style={{
              padding: "1.2rem 2.0rem",
              fontSize: "1.9rem",
            }}
            color="textSecondary"
          >
            {info}
          </Typography>
        )}
        <div style={{ display: "flex" }}>
          <span style={{ paddingLeft: "2.0rem" }}>
            <img
              src={profileIcon}
              alt=""
              style={{
                borderRadius: "2.4rem",
                height: "4.8rem",
                width: "4.8rem",
              }}
            />
          </span>
          <Typography
            style={{
              padding: "1.2rem 1.0rem",
              fontSize: "1.8rem",
              fontWeight: "600",
            }}
          >
            {profileName}
          </Typography>
          <VisibilityOutlinedIcon
            fontSize="large"
            style={{
              color: "#525252",
              position: "absolute",
              right: "18.0rem",
              marginTop: "1.6rem",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: "10.2rem",
              color: "#525252",
              fontSize: "1.4rem",
              fontWeight: "500",
              marginTop: "1.4rem",
            }}
          >
            1.4k views
          </span>
          <button
            style={{
              border: "none",
              position: "absolute",
              right: "2.0rem",
              height: "3.6rem",
              width: "4.2rem",
              background: "#EDEEF0",
              borderRadius: ".2rem",
              paddingTop: ".6rem",
              marginTop: ".7rem",
            }}
          >
            <ShareIcon fontSize="large" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
