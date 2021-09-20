import React from "react";
import { Grid } from "@material-ui/core";
import Fblogo from "./Assets/Fblogo.svg";
import Glogo from "./Assets/Glogo.svg";
import LoginImg from "./Assets/LoginImg.svg";

export default function Signin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Page is in testing phase");
  };
  return (
    <form onSubmit={handleSubmit} className="sign-in">
      <Grid container>
        <Grid item xs={6}>
          <h2 style={{ margin: "0.75rem 0 1.5rem " }}>Sign In</h2>
          <input
            className="sign-in__input"
            type="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="sign-in__input"
            type="password"
            id="password"
            placeholder="Password"
          />
          <button className="sign-in__btn" type="submit">
            Sign In
          </button>
          <button className="sign-in__using">
            <span>
              <img
                style={{ marginRight: "0.625rem" }}
                src={Fblogo}
                alt=""
                width="10"
                height="10"
              />
            </span>
            Sign in with Facebook
          </button>
          <button className="sign-in__using">
            <span>
              <img
                style={{ marginRight: "0.625rem" }}
                src={Glogo}
                alt=""
                width="10"
                height="10"
              />
            </span>
            Sign in with Google
          </button>
          <button
            style={{
              width: "20rem",
              height: "1.5rem",
              marginTop: "1.5rem",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            Forget Password?
          </button>
        </Grid>
        <Grid item xs={6}>
          <h5
            style={{
              position: "absolute",
              right: "2.25rem",
              marginTop: "1.25rem",
            }}
          >
            Don’t have an account yet?
            <span style={{ color: "#2F6CE5" }}> Create new for free!</span>
          </h5>
          <img
            src={LoginImg}
            alt=""
            style={{
              position: "absolute",
              right: "2.25rem",
              top: "7.5rem",
              height: "16.5rem",
              widht: "16.25rem",
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
}
