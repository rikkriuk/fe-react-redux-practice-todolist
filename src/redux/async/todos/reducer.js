import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  PROCESS_TODO_SUCCESS,
  EDITED_TODO,
} from "./actions";

const initialState = {
  todos: [],
  edit: null,
  loading: false,
  error: null,
  isSuccess: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isSuccess: false,
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PROCESS_TODO_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        loading: false,
        edit: null,
      };

    case EDITED_TODO:
      return {
        ...state,
        edit: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default todoReducer;
