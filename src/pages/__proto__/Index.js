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

  render() {
    function User ()  {
      this.a  = 1;
      this.b = 2;
    }
    const admin = new User(); 
    console.log('admin =>',admin)
    console.log('admin.__proto__ =>', admin.__proto__); //对象的__proto__属性指向其构造函数User的原型
    console.log('admin.__proto__ =>', admin.__proto__ === User.prototype); //true， 对象的__proto__属性指向其构造函数User的原型
    console.log('admin.prototype =>', admin.prototype); // undefined prototype是函数才有的属性，对象没有prototype属性
    console.log('admin.__proto__.__proto__ =>', admin.__proto__.__proto__); // undefined prototype是函数才有的属性，对象没有prototype属性
    console.log('admin.__proto__ => ', User.__proto__); // undefined prototype是函数才有的属性，对象没有prototype属性
    console.log('User.__proto__ => ', User.__proto__); // undefined prototype是函数才有的属性，对象没有prototype属性
    console.log('User.prototype => ', User.prototype); // undefined prototype是函数才有的属性，对象没有prototype属性
    
    return (
      <div>
        <div>理解原型及原型链</div>
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
