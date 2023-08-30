import React from "react";
import { useState } from "react";

function InputContents(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addItem = () => {
    if (title.length === 0 || content.length === 0) {
      alert("제목 또는 내용을 입력해주세요!");
      return;
    }
    const todo = { id: Date.now(), title: title, body: content, isDone: false };
    props.setTodoList([...props.todoList, todo]);
    setTitle("");
    setContent("");
  };

  const handleReset = () => {};
  return (
    <div className="inputbox">
      <label class="form-label" className="titleinput">
        제목{" "}
      </label>
      <input
        value={title}
        type="text"
        onChange={(event) => setTitle(event.target.value)}
      />
      <label class="form-label" className="contentinput">
        내용
      </label>
      <input
        value={content}
        type="text"
        onChange={(event) => setContent(event.target.value)}
      />

      <button onClick={addItem} className="addbtn">
        추가
      </button>
    </div>
  );
}

export default InputContents;
