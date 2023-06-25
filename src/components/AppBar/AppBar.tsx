import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DvrIcon from "@mui/icons-material/Dvr";

export interface AppBarProps {
  GetIcons?: React.ReactNode;
}

export default function MenuAppBar(props: AppBarProps) {
  const { GetIcons } = props;

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: "10px",
      }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          {GetIcons}
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <DvrIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Perfis
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
