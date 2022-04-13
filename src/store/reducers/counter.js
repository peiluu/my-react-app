import { handleActions } from "redux-actions";
// import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from "../types/counter";

// redux框架下的reducer操作state，主要使用switch或if else来匹配
export default handleActions(
  {
    save(state, payload) {
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
    sub(state) {
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
