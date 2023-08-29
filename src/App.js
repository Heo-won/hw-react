import "./App.css";
import { useState } from "react";
import WorkingBoard from "./components/WorkingBoard";
import Header from "./components/Header";
import InputContents from "./components/InputContents";

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="container">
      <Header />
      <InputContents todoList={todoList} setTodoList={setTodoList} />
      <WorkingBoard todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
