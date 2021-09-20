import React from "react";
import { Grid } from "@material-ui/core";
import Fblogo from "./Assets/Fblogo.svg";
import Glogo from "./Assets/Glogo.svg";
import LoginImg from "./Assets/LoginImg.svg";

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Page is in testing phase");
  };
  return (
    <form onSubmit={handleSubmit} className="sign-up">
      <Grid container>
        <Grid item xs={6}>
          <h2 style={{ margin: "0.75rem 0 1.5rem " }}>Create Account</h2>
          <input
            className="sign-up__input"
            style={{ width: "50%" }}
            type="text"
            id="Fname"
            placeholder="First Name"
          />
          <input
            className="sign-up__input"
            style={{ width: "50%" }}
            type="text"
            id="Lname"
            placeholder="Last Name"
          />
          <input
            className="sign-up__input"
            type="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="sign-up__input"
            type="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="sign-up__input"
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
          />
          <button className="sign-up__btn" type="submit">
            Create Account
          </button>
          <button className="sign-up__using">
            <img style={{ marginRight: "0.625rem" }} src={Fblogo} alt="" />
            Sign up with Facebook
          </button>
          <button className="sign-up__using">
            <img style={{ marginRight: "0.625rem" }} src={Glogo} alt="" />
            Sign up with Google
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
            Already have an account?
            <span style={{ color: "#4D81E9" }}> Sign In</span>
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
          <p
            style={{
              fontSize: "0.75rem",
              opacity: "0.6",
              position: "absolute",
              right: "2.25rem",
              bottom: "2.25rem",
            }}
          >
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </Grid>
      </Grid>
    </form>
  );
}
