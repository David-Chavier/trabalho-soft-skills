import { Grid, Box } from "@mui/material";
import React from "react";
import SubTitle1 from "../SubTitle1/SubTitle1";
import Title4 from "../Title4/Title4";

interface HeroSectionProps {
  title: string;
  subTitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subTitle }) => {
  return (
    <React.Fragment>
      <Grid container spacing={2} py={10} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <Title4 text={title} />
          <SubTitle1 text={subTitle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "15em",
              borderRadius: "5px",
              backgroundImage:
                "url(https://giphy.com/embed/NPlFVAXWIiJDGfGSDW)",

              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HeroSection;
