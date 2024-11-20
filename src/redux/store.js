import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import langReducer from "./lang/reducer";
import themeReducer from "./theme/reducer";
import todoReducer from "./async/todos/reducer";

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_SECRET_KEY,
  onError: function (error) {
    console.error("encryption error", error);
  },
});

const rootReducer = combineReducers({
  todos: todoReducer,
  lang: langReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["todos"],
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
