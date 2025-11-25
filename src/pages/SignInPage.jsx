import React from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import SignIn from "../Component/auth/Login";

const SignInPage = () => {
  return (
    <>
      <NavBar />
      <SignIn />
      <Footer />
    </>
  );
};

export default SignInPage;
