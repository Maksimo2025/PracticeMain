import React from "react";
import predator from "../../../../../../../../assets/predator.jpg";

const styles = {
  img: {
    width: "180px",
    height: "200px",
  },
  divOne: {
    maxWidth: "180px",
    maxHeight: "230px",
    border: "1px solid black",
    background: "black",
    color: "white",
  },
  divTwo: {
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
  },
  btn: {
    borderRadius: "50%",
    background: "white",
    marginLeft: "5px",
    color: "red",
  },
};

const Labels = () => {
  return (
    <div>
      <div style={styles.divOne}>
        <img src={predator} alt="image" style={styles.img} />
        <div style={styles.divTwo}>
          как тебе трейлер?
          <button style={styles.btn}>&times;</button>
        </div>
      </div>
    </div>
  );
};
export default Labels;
