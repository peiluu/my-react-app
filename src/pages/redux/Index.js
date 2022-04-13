import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Index';

import configStore from "../../store/index";
// import { connect, mapStateToProps } from "react-redux";

class Redux extends Component {
  constructor(props) {
    super(props);
    // const { location } = this.props;
  }
  componentDidMount() {
    console.log(configStore);
    // console.log(configStore.getState().list);
    configStore.dispatch({
      type: "save",
      payload: { name: "裴璐" },
    });
    console.log(configStore.getState());
    configStore.subscribe(() => {
      console.log("监听数据的变化");
    });
    console.log(configStore.getState());

    // const counterReducer = function (state, action) {
    //   console.log(action);
    //   if (action.type == "save") {
    //     return {
    //       ...state,
    //       ...action.payload,
    //     };
    //   }
    //   return state;
    // };
    // const store = createStore(counterReducer);
    // console.log(store);
    // console.log(store.getState());
    // // const state = store.getState();
    // // // setStore(store);
    // // console.log(configStore);
    // // console.log(configStore.getState());

    // store.dispatch({
    //   type: "save",
    //   payload: { count: 2 },
    // });
    // console.log(store.getState());
  }
  render() {
    return (
      <div>
        <div>这里是用户列表</div>
        <Navbar />
      </div>
    );
  }
}

export default Redux;

// export default connect((state) => {
//   return {
//     count: state.count,
//   };
// })(UserList);
