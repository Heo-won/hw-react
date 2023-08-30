import React from "react";
import TodoItem from "./TodoItem";

function DoneBoard(props) {
  //props때문에 알아서 TodoItem들어옴
  return (
    <div>
      <h2 className="donetitle">Done😎</h2>
      {props.todoList.map((item) => {
        if (item.isDone === true) {
          return (
            <TodoItem
              item={item}
              todoList={props.todoList}
              setTodoList={props.setTodoList}
            />
          );
        }
      })}
    </div>
  );
}

export default DoneBoard;
