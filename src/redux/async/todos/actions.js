import axios from "axios";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const PROCESS_TODO_SUCCESS = "PROCESS_TODO_SUCCESS";
export const EDITED_TODO = "EDITED_TODO";

const BASE_URL = "http://localhost:3000/todos";

// action creator
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      const response = await axios.get(BASE_URL);
      const data = response.data;
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const addTodo = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      await axios.post(BASE_URL, data);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const editedTodo = (data) => {
  return (dispatch) => {
    dispatch({ type: EDITED_TODO, payload: data });
  };
};

export const updatedTodo = (data, isCompeleted) => {
  return async (dispatch) => {
    try {
      if (isCompeleted) {
        data = { ...data, completed: !data.completed };
      }

      await axios.put(`${BASE_URL}/${data.id}`, data);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};
