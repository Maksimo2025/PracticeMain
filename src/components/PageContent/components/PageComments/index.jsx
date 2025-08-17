import React, { useState } from "react";
import Comments from "./components/Comments";
import Container from "./components/Container";
import AddComment from "./components/AddComment";

const styles = {
  p: {
    fontSize: "20px",
    marginTop: "20px",
    marginLeft: "100px",
  },
};

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

  // const newComments = (title) => {
  //   setComments(
  //     comments.concat([
  //       {
  //         id: Date.now(),
  //         title,
  //       },
  //     ])
  //   );
  // };
  const newComments = (title) => {
    setComments((prev) => {
      return [...prev, { id: Date.now(), title }];
    });
  };

  return (
    <div>
      <Container title="Only for comments">
        {comments.length !== 0 ? (
          <Comments comments={comments} remove={removeComments} />
        ) : (
          <p style={styles.p}> Без комментарий </p>
        )}
      </Container>
      <AddComment onCreate={newComments} />
    </div>
  );
};
export default PageComments;
