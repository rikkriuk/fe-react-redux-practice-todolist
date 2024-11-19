// src/components/TodoInput.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/todos/actions";
import { changeLanguage } from "../redux/lang/action";
import { changeTheme } from "../redux/theme/action";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const lan = useSelector((state) => state.lang.lang);
  const todoEdit = useSelector((state) => state.todos.edit);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (todoEdit) {
      setText(todoEdit.text);
    } else {
      setText("");
    }
  }, [todoEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoEdit) {
      dispatch(updateTodo({ id: todoEdit.id, text }));
    } else {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
    }
    setText("");
  };

  return (
    <div className="mb-3 d-flex gap-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          placeholder={lan === "en" ? "Add a new task..." : "Tambahkan tugas baru..."}
          required
        />
        <button type="submit" className={`btn ${todoEdit ? "btn-warning" : "btn-primary"}`}
        >
          {lan === "en" 
            ? (todoEdit ? "Update" : "Add") 
            : (todoEdit ? "Ubah" : "Tambah")}
        </button>
      </form>

      <div className="d-flex gap-2">
        <button onClick={() => dispatch(changeTheme(theme === "light" ? "dark" : "light"))} className="btn btn-dark">{lan === "id" ? theme === "light" ? "Gelap"
            : "Terang"
          : theme === "light"
          ? "Dark"
          : "Light"}</button>
        
        <button onClick={() => dispatch(changeLanguage(lan === "en" ? "id" : "en"))} className="btn btn-info">{lan === "en" ? "ID" : "EN"}</button>
      </div>
    </div>
  );
};

export default TodoInput;
