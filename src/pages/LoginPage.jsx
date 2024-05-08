import React from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  Button,
  TextField,
} from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate()
  const {login} = useContext(AuthContext)
  const [emailOrMobile, setEmailorPhone] = useState('')
  const [password, setPassword] = useState("")

  const handleChangeEmailOrPhone = (e) => setEmailorPhone(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  const handleSubmitLogin = async(e) => {
    if(emailOrMobile === "" && password === "")
      await login()
    navigate("/todoList")
  }else {
    alert("Invalid username or password")
  }


  return (
    <Box
      component="Login__App"
      height="650px"
      width="505px"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ bgcolor: "#1E1F25", borderRadius: "12px" }}
    >
      <Box
        component="header"
        sx={{ fontSize: "56px", fontWeight: 800, color: "white" }}
      >
        Welcome
      </Box>
      <div className="login">
        <div className="username">
          <Box sx={{ color: "#9494B8", fontSize: "24px", fontWeight: 700 }}>
            emailOrMobile
          </Box>
          <Box component="form">
            <TextField
              id="standard-basic"
              label=""
              variant="standard"
              sx={{ width: "377px", color: "#29292F" }}
            />
          </Box>
        </div>
        <div className="password">
          <Box sx={{ color: "#9494B8", fontSize: "24px", fontWeight: 700 }}>
            password
          </Box>
          <Box component="form" onSubmit={handleSubmitLogin}>
            <TextField
              id="standard-basic"
              label=""
              variant="standard"
              sx={{ width: "377px", color: "#29292F" }}
            />
          </Box>
        </div>
      </div>
      <Button
        type="submit"
        variant="contained"
        disableElevation
        sx={{
          fontSize: "24px",
          fontWeight: 800,
          color: "white",
          bgcolor: "#29292F",
          width: "385px",
          height: "62px",
          borderRadius: "24px",
        }}
      >
        LOG IN
      </Button>
    </Box>
  );
}

export default LoginPage;
