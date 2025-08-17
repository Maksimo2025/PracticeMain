import React from "react";
import Item from "./Item";

const styles = {
  p: {
    fontSize: "20px",
    marginTop: "20px",
    marginLeft: "100px",
  },
};

const Comments = ({ comments, remove }) => {
  if (!comments.length) {
    return <p style={styles.p}> Без комментарий </p>;
  }
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <Item
            comment={comment}
            key={comment.id}
            removeLayer={remove}
            index={index + 1}
          />
        );
      })}
    </div>
  );
};
export default Comments;
