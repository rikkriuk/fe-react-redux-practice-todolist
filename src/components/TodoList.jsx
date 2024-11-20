import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo, editedTodo, updatedTodo } from "../redux/async/todos/actions";

const TodoList = () => {
  const { todos, loading, error, isSuccess } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.lang.lang);

  // get data
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // get data when isSuccess true
  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchTodos());
    }
  }, [isSuccess]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (todos.length === 0) {
    return <h1>No todos</h1>;
  }

  return (
    <ul className="list-group ">
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
            <input onChange={() => dispatch(updatedTodo(todo, true))} type="checkbox" name="checkbox" checked={todo.completed} />
            <button onClick={() => dispatch(editedTodo(todo))} className="btn btn-warning btn-sm">
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
