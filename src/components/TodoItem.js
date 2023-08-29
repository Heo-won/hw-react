import React from "react";

function todoItem(props) {
  const deleteBtn = () => {
    props.setTodoList(
      props.todoList.filter((item) => item.id !== props.item.id)
    );
  };
  return (
    <div className="todo-item">
      <p className="title">{props.item.title}</p>
      <p className="body">{props.item.body}</p>

      <button onClick={deleteBtn} className="btn1">
        삭제
      </button>
      <button className="btn2">완료</button>
    </div>
  );
}

export default todoItem;
