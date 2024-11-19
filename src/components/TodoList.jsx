import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo, editedTodo } from "../redux/todos/actions"

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.lang.lang);

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <div className="d-flex gap-3">
            <input onChange={() => dispatch(completedTodo(todo.id))} type="checkbox" name="checkbox" checked={todo.completed} />
            <button onClick={() => dispatch(editedTodo(todo.id))} className="btn btn-warning btn-sm">
              {lan === "en" ? "Edit" : "Ubah"}
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              {lan === "en" ? "Delete" : "Hapus"}
            </button>

          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
