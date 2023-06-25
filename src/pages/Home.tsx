import React from "react";
import ListDevSection from "../components/ListDevSection/ListDevSection";
import HeroSection from "../components/HeroSection/HeroSection";
import { Container, Grid } from "@mui/material";
import MenuAppBar from "../components/AppBar/AppBar";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Grid container sx={{ maxHeight: "100vp" }}>
        <Grid item xs={12}>
          <MenuAppBar />
        </Grid>

        <Container>
          <HeroSection
            title="Soft Skills"
            subTitle="Trabalho de Orientação Profissional"
          />
          <ListDevSection />
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
