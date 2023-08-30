import React from "react";
import { useState } from "react";

function todoItem(props) {
  const todoStateChange = () => {
    //isdone을 true로 바꿔준다
    props.setTodoList(
      props.todoList.map((item) =>
        item.id === props.item.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const deleteBtn = () => {
    props.setTodoList(
      props.todoList.filter((item) => item.id !== props.item.id)
    );
  };

  if (props.item.isDone !== null && props.item.isDone === false) {
    return (
      <div className="todo-item">
        <div className="title">{props.item.title}</div>
        <div className="body">{props.item.body}</div>
        <div className="btncontainer">
          <button onClick={deleteBtn} className="btn1">
            삭제
          </button>
          <button onClick={todoStateChange} className="btn2">
            완료
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="todo-item">
        <div className="title">{props.item.title}</div>
        <div className="body">{props.item.body}</div>
        <div className="btncontainer">
          <button onClick={deleteBtn} className="btn1">
            삭제
          </button>
          <button onClick={todoStateChange} className="btn2">
            취소
          </button>
        </div>
      </div>
    );
  }
}

export default todoItem;
