import React, { useState } from "react";

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

  const submitHandler = (event) => {
    event.preventDefault();

    // if (value.trim()) {
    onCreate(value.trim());
    setValue("");
    // }
  };

  return (
    <form onSubmit={submitHandler} style={styles.div}>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        style={styles.w}
      />
      <button type="submit"> Add comments </button>
    </form>
  );
};
export default AddComment;
