import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

const App = () => {
  const lan = useSelector((state) => state.lang.lang);
  const theme = useSelector((state) => state.theme.theme);

  return (
      <div className={`container-fluid vh-100 d-flex justify-content-center ${theme === "light" ? "bg-light" : "bg-dark"}`}>
        <div className="row justify-content-center container mt-5">
          <div className="col-md-6 w-100">
            <div className="card shadow">
              <div className={`card-body ${theme === "light" ? "bg-light" : "bg-secondary"}`}>
                <h1 className={`card-title text-center mb-4 ${theme === "light" ? "text-black" : "text-white"}`}>{lan === "en" ? "To-Do List" : "Daftar To-Do"}</h1>
                <TodoInput />
                <TodoList />
              </div>
            </div>
          </div>
        </div> 
      </div>
  );
};

export default App;
