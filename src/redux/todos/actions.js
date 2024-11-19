export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const EDITED_TODO = "EDITED_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

// action creator
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const updateTodo = (id) => ({ type: UPDATE_TODO, payload: id });
export const editedTodo = (id) => ({ type: EDITED_TODO, payload: id });
export const completedTodo = (id) => ({ type: COMPLETED_TODO, payload: id });
