import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { auth, googleProvider, firebaseConfig } from "../config/firebase";
import "firebase/auth";
import "../LoginSignUp.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

import CustomButton from "../components/CustomButton"; // Import CustomButton component

//google login
const Login = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, [localStorage.getItem("email")]); // Providing localStorage.getItem("email") as a dependency

  const handleClick = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  return (
    <CustomButton
      type="filled"
      title="Log In With Google"
      handleClick={handleClick} // Corrected onClick attribute
      customStyles="text-s"
    />
  );
};
// LOGIN validation
const handleLogin = async (email, password) => {
  try {
    await firebaseAuth.signInWithEmailAndPassword(auth, email, password);
    // Login successful
  } catch (error) {
    console.error(error.message);
  }
};

const handleSignUp = async (email, password) => {
  try {
    await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
    // Registration successful
  } catch (error) {
    console.error(error.message);
  }
};
//submit form
// Corrected handleButtonClick function
const handleButtonClick = (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  handleSubmit(email, password, action);
};
// Corrected handleSubmit function
const handleSubmit = async (email, password, action) => {
  if (action === "Login") {
    handleLogin(email, password);
  } else if (action === "Sign Up") {
    try {
      const userCredential = await firebaseAuth.createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user); // Pass the user object here
    } catch (error) {
      console.error(error.message);
    }
  }
};
//////////////////////////////
const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  const handleButtonClick = () => {
    // Handler for button click
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    handleSubmit(email, password, action);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Username" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input id="email" name="email" type="email" placeholder="email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button id="googleButton"> {/* <Login /> */}</button>
      </form>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login"), handleButtonClick();
          }}
        >
          Login
        </div>
      </div>
      <button onClick={handleButtonClick}>Submit</button>

      {/* Add submit button */}
    </div>
  );
};

export default LoginSignUp;
