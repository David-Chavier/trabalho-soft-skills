import { Typography } from "@mui/material";
import React from "react";

interface SubTitle1Props {
  text: string;
}

const SubTitle1: React.FC<SubTitle1Props> = ({ text }) => {
  return (
    <React.Fragment>
      <Typography
        variant="body1"
        color={"white"}
        fontFamily={"monospace"}
        mt={1}
      >
        {text}
      </Typography>
    </React.Fragment>
  );
};

export default SubTitle1;
