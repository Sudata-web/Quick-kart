import React from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import SignUp from "../Component/auth/SignUp";

const SignUpPage = () => {
  return (
    <>
      <NavBar />
      <SignUp />
      <Footer />
    </>
  );
};

export default SignUpPage;
