import React from "react";

const styles = {
  root: {
    width: "100%",
    borderTop: "1px solid blue",
  },
  box: {
    color: "black",
    background: "blue",
    maxWidth: "150px",
  },
};

const SectionWrapper = ({ children, title }) => {
  return (
    <div style={styles.root}>
      <div style={styles.box}>{title}</div>
      {children}
    </div>
  );
};
export default SectionWrapper;
