import React from "react";
import { PacmanLoader } from "react-spinners";

export default function spinner(props) {
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-50px 0px 0px -50px",
    opacity: 0.8
  };
  return (
    <section>
      <PacmanLoader
      size={50}
      // color="rgb(72, 187, 120)"
      color="red"
      css={styles}
      loading={props.loading}/>
    </section>
  );
}
