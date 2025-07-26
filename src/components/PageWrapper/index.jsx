import React from "react";

const styles = {
  root: {
    margin: "0 200px",
  },
};

const PageWrapper = ({ children }) => {
  return <div style={styles.root}>{children}</div>;
};
export default PageWrapper;
