import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Button sx={{ color: "white" }} onClick={() => navigate("/")}>
        <KeyboardBackspaceIcon sx={{ fontSize: "30px" }} />
      </Button>
    </React.Fragment>
  );
};

export default ReturnButton;
