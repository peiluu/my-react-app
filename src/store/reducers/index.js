import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
// console.log("handleActions", handleActions);
// import counter from './counter';

const counter = handleActions(
  {
    save(state, { payload = {} }) {
      console.log(payload);
      return {
        ...state,
        ...payload,
      };
    },
    add(state) {
      return {
        ...state,
        num: state.num + 1,
      };
    },
    listadd(state) {
      return {
        ...state,
        num: state.num - 1,
      };
    },
    sum(state, action) {
      return {
        ...state,
        asyncNum: state.asyncNum + action.payload,
      };
    },
  },
  {
    num: 0,
    asyncNum: 0,
  }
);

const list = function (state = { sex: "女" }, action) {
  if (action.type == "save") { // 两个Reducer函数中的save方法都会被执行
    return {
      ...state,
      ...action.payload,
    }
  }
  return state;
};
export default combineReducers({ counter, list });
