import {
  Avatar,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ReturnButton from "../components/ReturnButton/ReturnButton";
import MenuAppBar from "../components/AppBar/AppBar";
import { devs } from "../database/devs";

const PerfilVitor: React.FC = () => {
  const user = devs.find((dev) => dev.name === "Vitor");
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <MenuAppBar GetIcons={<ReturnButton />} />
      </Grid>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                height: 300,
                backgroundImage: `url(${user?.banner})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Paper>
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            top={-250}
            zIndex={999}
          >
            <Avatar
              alt={user?.name}
              src={user?.foto}
              sx={{
                width: "40vh",
                height: "40vh",
                border: 6,
                borderColor: "#0091ea",
              }}
            />
          </Grid>
          <Grid item xs={12} position={"relative"} top={-330}>
            <Paper
              elevation={2}
              sx={{
                padding: 3,
                backgroundImage:
                  "linear-gradient(90deg, rgba(0,100,183,1) 0%, rgba(0,145,234,1) 35%, rgba(100,193,255,1) 100%)",
              }}
            >
              <Typography variant="h3" color={"#fff"}>
                {user?.name}
              </Typography>
              <Typography variant="body1" mt={1} color={"#fff"}>
                {user?.age} anos | {user?.email}
              </Typography>
              <Divider sx={{ marginTop: 2 }} color={"#fff"} />
              <Typography variant="body1" mt={1} color={"#fff"}>
                {user?.description}
              </Typography>
              <Typography variant="body1" mt={1} color={"#fff"}>
                Stack: {user?.stack}
              </Typography>
              <Typography variant="body1" mt={1} color={"#fff"}>
                HardSkills: {user?.hardSkills.join(", ")}
              </Typography>
              <Typography variant="body1" mt={1} color={"#fff"}>
                SoftSkills: {user?.softSkills.join(", ")}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PerfilVitor;
