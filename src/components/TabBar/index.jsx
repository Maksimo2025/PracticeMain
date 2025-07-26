import React from "react";
import { buttons } from "./const";
import Button from "../shared/Button";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    marginTop: "20px",
  },
};

const TabBar = ({ tab, setTab }) => {
  return (
    <div style={styles.root}>
      {buttons.map((button) => {
        return (
          <Button
            isActive={button.description === tab}
            onClick={() => setTab(button.description)}
            key={button.name}
          >
            {button.name}
          </Button>
        );
      })}
    </div>
  );
};
export default TabBar;
