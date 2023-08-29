import React from "react";
import { useState } from "react";

function InputContents(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addItem = () => {
    const todo = { id: Date.now(), title: title, body: content, isDone: false };
    props.setTodoList([...props.todoList, todo]);
  };

  const [text, setText] = useState("");
  // 초기화
  const onReset = () => {
    setText("");
  };

  const handleReset = () => {};
  return (
    <div className="inputbox">
      <label class="form-label" className="titleinput">
        제목
        <input
          value={title}
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label class="form-label" className="contentinput">
        내용
        <input
          value={content}
          type="text"
          onChange={(event) => setContent(event.target.value)}
        />
      </label>
      <button onClick={addItem}>추가</button>
    </div>
  );
}

export default InputContents;
