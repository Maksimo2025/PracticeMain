import React from "react";

const styles = {
  lines: {
    marginTop: " 30px",
    padding: "5px",
    width: "100%",
    height: "300px",
    border: "3px solid teal",
    overflow: "auto",
  },
  box: {
    background: "teal",
    maxWidth: "150px",
    height: "20px",
    color: "white",
    paddingLeft: "20px",
  },
};

const Container = ({ children, title }) => {
  return (
    <div style={styles.lines}>
      <div style={styles.box}>{title}</div>
      {children}
    </div>
  );
};
export default Container;
