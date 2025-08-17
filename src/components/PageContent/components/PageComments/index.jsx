import React, { useState } from "react";
import Comments from "./components/Comments";
import Container from "./components/Container";
import AddComment from "./components/AddComment";

const PageComments = () => {
  const [comments, setComments] = useState([
    { id: 1, title: "Изучение React: Начните с основ JavaScript" },
    { id: 2, title: "Изучение React: Затем переходите к изучению JSX" },
  ]);

  const removeComments = (id) => {
    setComments(
      comments.filter((c) => {
        return c.id !== id;
      })
    );
  };

  const newComments = (title) => {
    setComments((prev) => {
      return [...prev, { id: Date.now(), title }];
    });
  };

  return (
    <div>
      <Container title="Only for comments">
        <Comments comments={comments} remove={removeComments} />
      </Container>
      <AddComment onCreate={newComments} />
    </div>
  );
};
export default PageComments;
