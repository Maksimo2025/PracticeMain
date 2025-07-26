import React from "react";

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    fontSize: "25px",
    textShadow: "1px 1px black",
    color: "red",
  },
};

const Column = () => {
  return (
    <div>
      <div style={styles.header}>Заголовок</div>
    </div>
  );
};
export default Column;
