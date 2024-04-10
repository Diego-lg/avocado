import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import CustomButton from "./CustomButton"; // Import CustomButton component

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

  //   return (
  //     <div>
  //       <button>
  //         <CustomButton
  //           type="filled"
  //           title="Sign in with Google"
  //           handleClick={handleClick} // Corrected onClick attribute
  //           customStyles="text-s"
  //         />
  //       </button>
  //     </div>
  //   );

  return (
    <CustomButton
      type="filled"
      title="Log In"
      handleClick={handleClick} // Corrected onClick attribute
      customStyles="text-s"
    />
  );
};

export default Login;
