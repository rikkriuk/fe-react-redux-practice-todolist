import { CHANGE_LANGUAGE } from "./action";

const initialState = {
  lang: "en",
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        lang: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default langReducer;
