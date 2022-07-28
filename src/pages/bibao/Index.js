import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Index';

import configStore from "../../store/index";
// import { connect, mapStateToProps } from "react-redux";

class Redux extends Component {
  constructor(props) {
    super(props);
   
  }
  componentDidMount() {
  }
  shouldComponentUpdate(nextProps, nextState){
    if (this.props.color !== nextProps.color) {
      return true;  // 返回true，重新渲染
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false; // 返回false，不重新渲染
  }

  render() {
    const outer = () => {
      const a = 10; // 闭包里的a从函数局部变量
      const innerFun = () => {
        return a;
      }
      //闭包 - 内部函数没有执行完成，外部函数变量不会被销毁
      return innerFun;
    }

    const outer1 = () => {
      const a = 10;
      // 此种方法也可以获取从外部获取a的值，但是限制了函数的返回值
      // 函数无法做其他作用
      return a;
    }

    console.log('现在还可以获取函数outer的内部变量', outer()())
    console.log(outer1())
    return (
      <div>
        <div>理解闭包及其应用</div>
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
