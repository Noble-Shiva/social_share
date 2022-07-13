import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="m-2 px-6 py-2 font-sm text-white bg-blue-500 hover:bg-blue-600 border border-transparent focus:outline-none rounded-full"
    >
      {title ?? "Button"}
    </button>
  );
};

export default Button;
