import React from "react";

const styles = {
  root: {
    color: "black",
    border: "1px solid black",
    borderRadius: "10%",
    background: "teal",
    width: "80px",
  },
  active: {
    background: "green",
  },
};

const Button = ({ children, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      style={isActive ? { ...styles.root, ...styles.active } : styles.root}
    >
      {children}
    </button>
  );
};
export default Button;
