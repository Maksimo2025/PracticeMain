import React, { useState } from "react";
import Button from "../../../../../shared/Button";

const styles = {
  w: {
    margin: "20px 15px",
    width: "60%",
    height: "70px",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const AddComment = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const submitHandler = () => {
    if (!value.length) return;

    onCreate(value.trim());
    setValue("");
  };

  return (
    <div style={styles.div}>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        style={styles.w}
      />
      <Button onClick={submitHandler} type="submit">
        add comments
      </Button>
    </div>
  );
};
export default AddComment;
