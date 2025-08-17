import React from "react";
import Item from "./Item";

const Comments = ({ comments, remove, index }) => {
  return (
    <div>
      {comments.map((comment) => {
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
