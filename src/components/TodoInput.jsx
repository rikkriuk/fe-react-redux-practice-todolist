// src/components/TodoInput.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updatedTodo } from "../redux/async/todos/actions";
import { changeLanguage } from "../redux/lang/action";
import { changeTheme } from "../redux/theme/action";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const lan = useSelector((state) => state.lang.lang);
  const { edit } = useSelector((state) => state.todos);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (edit) {
      setText(edit.text);
    } else {
      setText("");
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      dispatch(updatedTodo({ ...edit, text }));
    } else {
      dispatch(addTodo({ id: uuidv4, text, completed: false }));
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
        <button type="submit" className={`btn ${edit ? "btn-warning" : "btn-primary"}`}
        >
          {lan === "en" 
            ? (edit ? "Update" : "Add") 
            : (edit ? "Ubah" : "Tambah")}
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
