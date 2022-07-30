import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Index';

import configStore from '../../store/index';
// import { connect, mapStateToProps } from "react-redux";

class Redux extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		/**
		 * 闭包原理理解 - 函数嵌套函数，内部函数就叫闭包
		 * 函数嵌套函数，内部函数作为返回值return出去，变成了全局，形成闭包 。
		 */
		const outer = () => {
			const a = 10; // 闭包里的a从函数局部变量
			const innerFun = () => {
				return a;
			};
			//闭包 - 内部函数没有执行完成，外部函数变量不会被销毁
			return innerFun;
		};

		const outer1 = () => {
			const a = 10;
			// 此种方法也可以获取从外部获取a的值，但是限制了函数的返回值
			// 函数无法做其他作用
			return a;
		};
		console.log('现在还可以获取函数outer的内部变量', outer()());
		console.log(outer1());
	}

	/**
	 * react 判断组件是否应该重新渲染 - 比对上一次的state值和props值
	 */
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.color !== nextProps.color) {
			return true; // 返回true，重新渲染
		}
		if (this.state.count !== nextState.count) {
			return true;
		}
		return false; // 返回false，不重新渲染
	}

	/**
	 * React 事件绑定this方式 - 如果不进行绑定，this指向会丢失
	 * 1. bind 绑定方法
	 * onClick={this.handleClick.bind(this, 'test')}
	 * 2. 构造器内声明: 在组件的构造器内完成了this的绑定，这种绑定方式的好处在于仅需要进行一次绑定，而不需要每次调用事件监听器去执行绑定操作
	 * this.handleClick = this.handleClick.bind(this);
	 * 3. 使用箭头函数调用：箭头函数不仅是函数的“语法糖”，它还是自动绑定了定义此函数作用域的this
	 */

	handleClick(param1, param2) {
		/**
		 * 	this.handleClick.bind(this, 'test')
		 *  bind函数将我handleClick函数中this的指向绑定到本组件的this上，handleClick函数中this指向本组件
		 */
		console.log('handleClick函数this指向', this);
		console.log('handleClick函数中的参数', param1);
		console.log('handleClick函数中的参数', param2);
		console.log(this.name);
	}

	/**
	 * 执行上下文 (变量提升和函数提升的原理)
   * 1. 执行上下文分为全局执行上下文和函数执行上下文
	 */

	render() {
		return (
			<div>
				<div>理解函数作用域、执行上下文、闭包、this指向问题</div>
				<button className='block' onClick={this.handleClick}>
					绑定this
				</button>
				<button
					className='block'
					onClick={this.handleClick.bind(this, 'test1', 'test2')}
				>
					绑定this
				</button>
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
