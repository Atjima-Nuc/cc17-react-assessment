/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import {
  Box,
  Typography,
  ThemeProvider,
  Button,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

function TodoListPage() {
  const [todos, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState([""]);

  useEffect(() => {
    getAllTodo();
  }, []);

  // 1. getAllTodo
  async function getAllTodo() {
    try {
      const response = await axios.get(
        "https://cc17-assessment-api.onrender.com/auth/me?userId=30"
      );
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // 2.createTodo
  const handleChangeTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const createTodo = async() => {
    const data = {}
    try {
      let response = await axios.post("https://cc17-assessment-api.onrender.com/v1/todo?userId=30", data)
    setTodo([response.data, ...todos])
    setNewTodo("")
    }catch(error) {
      console.log(error)
    }
  }

// # 3.DeleteTodo
const deleteTodo = async (todoId) => {}

  return (
    <Box
      component="Login__App"
      height="650px"
      width="505px"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      sx={{ bgcolor: "#1E1F25", borderRadius: "12px" }}
    >
      <Box
        width="377px"
        component="todo__header"
        sx={{ fontSize: "56px", fontWeight: 800, color: "white" }}
        display="flex"
        justifyContent="space-between"
      >
        My Todo
        <img src="./img/Emoji.png" width="56px" height="56px" />
      </Box>
      <div className="newtask__input">
        <Box
          component="newtask__topic"
          sx={{ fontSize: "16px", fontWeight: 700, color: "#9494B8" }}
        >
          new task
        </Box>
        <Box component="form">
          <TextField
            id="standard-basic"
            label=""
            variant="standard"
            sx={{ width: "377px", borderColor: "white" }}
            onChange={handleChangeTodo}
            value={newTodo}
          />
        </Box>
      </div>
      {/* <ul className="todo__list">
        {}
        <li className="todo__item">
          <p>Here's a task item</p>
          <Button>X</Button>
        </li>
      </ul> */}
      <FormGroup>
        {todos.map((todo) => (

        ))}
        <Box>
          <FormControlLabel control={<Checkbox />} label="Here's a task item" />
          <Button>X</Button>
        </Box>
        <Box>
          <FormControlLabel control={<Checkbox/>} label="Here's a task item" />
          <Button>X</Button>
        </Box>
      </FormGroup>
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
        onClick={createTodo}
      >
        LOG IN
      </Button>
    </Box>
  );
}

export default TodoListPage;
