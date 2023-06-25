import { Container, Grid } from "@mui/material";
import React from "react";
// import MenuAppBar from "../../components/AppBar/AppBar";

interface DefaultLayoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  component: Component,
}) => {
  return (
    <Grid
      container
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Grid item xs={12}>
        <Container sx={{ marginTop: "20px" }}>
          <Component />
        </Container>
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
