import React, { useState } from "react";
import "./App.css";
import Create from "./components/Create.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "",
      value: "",
      isDone: null,
    },
  ]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  function handleDelete(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  function handleUpdate(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }
  return (
    <div className="wrap">
      <div className="header">
        <h4 className="title">React To Do</h4>
        <button
          className="btn"
          onClick={() => {
            alert("Kakaobank 3333-18-5480876");
          }}
        >
          Donation
        </button>
      </div>
      <div>
        <Create handleAddTodo={handleAddTodo}></Create>
      </div>
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
export default App;
