import React from "react";
import { ClassNames } from "../utils/Utils";

const Button = ({ title, onClick, type = "filled" }) => {
  return (
    <button
      onClick={onClick}
      className={ClassNames(
        type === "filled"
          ? "text-white bg-blue-500 hover:bg-blue-700 border border-transparent"
          : "text-blue-800 bg-blue-100 hover:bg-blue-200 border border-blue-500",
        "m-2 px-6 py-2 font-sm focus:outline-none rounded-full"
      )}
    >
      {title ?? "Button"}
    </button>
  );
};

export default Button;
