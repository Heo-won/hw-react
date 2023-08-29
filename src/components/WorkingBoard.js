import React from "react";
import TodoItem from "./TodoItem";

function WorkingBoard(props) {
  //props때문에 알아서 TodoItem들어옴
  return (
    <div>
      <h2 className="todolist">Working😅</h2>
      {props.todoList.map((item) => (
        <TodoItem
          item={item}
          todoList={props.todoList}
          setTodoList={props.setTodoList}
        />
      ))}
    </div>
  );
}

export default WorkingBoard;
