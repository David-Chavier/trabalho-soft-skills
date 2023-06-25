import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

interface Title4Props {
  text: string;
}

const Title4: React.FC<Title4Props> = ({ text }) => {
  return (
    <React.Fragment>
      <Typography variant="h2" color={"white"} fontFamily={"monospace"}>
        {text}
      </Typography>
    </React.Fragment>
  );
};

export default Title4;
