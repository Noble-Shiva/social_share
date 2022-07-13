import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};
