import { createStore, applyMiddleware, combineReducers } from "redux";
import { handleActions } from "redux-actions";

import promiseMiddleware from "redux-promise";
// import rootReducer from "./reducers";

// const configStore = createStore(rootReducer);

const rootReducer = (state = { name: "rootReducer" }, action) => {
  return state;
};
const pageReducer = handleActions( // 类似于dva中的reducer, 直接申明，不需要使用switch
  {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  { sex: "pageReducer" }
);
// const configStore = createStore(function (state = { count: 1 }, action) {
//   console.log(action);
//   return { ...state, ...action.payload };
// });

const configStore = createStore(combineReducers({ rootReducer, pageReducer }));

export default configStore;
