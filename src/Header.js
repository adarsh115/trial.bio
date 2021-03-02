import { Box, Grid } from "@material-ui/core";
import React from "react";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: "50vw",
  alignItems: "center",
  backgroundColor: "grey",
};

function Header() {
  return (
    <div style={style}>
      <img src="logo192.png" alt="" height={50} width={50} borderRadius="50%" />
      <div>
        <p>i am user</p>
        <p>about me : i am an idiot</p>
      </div>
    </div>
  );
}

export default Header;
