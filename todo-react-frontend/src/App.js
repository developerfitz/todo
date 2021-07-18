import React, { useState, useEffect } from "react";
import axios from "axios";

function App(props) {
  const { title } = props;
  const url = "http://127.0.0.1:5000";
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(todos);
  let todoList;
  if (todos) {
    todoList = todos.map((todo) => (
      <li>{`${todo.title} - ${
        todo.assignee ? todo.assignee : "unassigned"
      }`}</li>
    ));
  }

  return (
    <>
      <h1>{title}</h1>
      {todoList}
    </>
  );
}

export default App;
