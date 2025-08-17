import React from "react";

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid teal",
    margin: "30px 20px",
    color: "black",
    width: "90%",
  },
  btn: {
    background: "red",
    borderRadius: "40%",
    color: "white",
  },
};

const Item = ({ comment, removeLayer, index }) => {
  return (
    <div style={styles.item}>
      <strong>
        {index} : {comment.title}
      </strong>
      <button onClick={() => removeLayer(comment.id)} style={styles.btn}>
        &times;
      </button>
    </div>
  );
};
export default Item;
