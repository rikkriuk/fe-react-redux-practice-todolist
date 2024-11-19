import {
  ADD_TODO,
  UPDATE_TODO,
  EDITED_TODO,
  DELETE_TODO,
  COMPLETED_TODO,
} from "./actions";

const initialState = {
  todos: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do List", completed: false },
    { id: 3, text: "Celebrate", completed: true },
  ],
  edit: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }

    case UPDATE_TODO: {
      return {
        ...state,
        edit: null,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                text: action.payload.text,
              }
            : todo
        ),
      };
    }

    case EDITED_TODO: {
      return {
        ...state,
        edit: state.todos.find((todo) => todo.id === action.payload),
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        edit: null,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }

    case COMPLETED_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }

    default: {
      return state;
    }
  }
};

export default todoReducer;
