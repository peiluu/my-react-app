import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Index';

import configStore from '../../store/index';
// import { connect, mapStateToProps } from "react-redux";

class Redux extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const obj = {
			a: 10,
			b() {
				// console.log(`this a = ${this.a}`);
			},
			c: () => {
				// console.log(`this b = ${this.a}`);
			},
		};
		obj.b(); // 普通函数中this指向该函数的直接调用者 => obj
		obj.c(); // 箭头函数中this指向其定义环境

		/**
		 * call、apply、bind三个方法的异同
		 */
		const dog = {
			name: '旺财',
		};
		const cat = {
			name: '喵喵',
			say: function (food1, food2) {
				console.log(this.name);
				console.log('我喜欢吃' + food1, food2);
			},
		};
		cat.say.call(dog, '猪', '肉'); //  call和apply会直接调用函数，
		cat.say.apply(dog, ['猪', '肉']); //
		cat.say.bind(dog, ['猪', '肉']); // 把函数作为返回值返回
		const fun = cat.say.bind(dog, ['猪', '肉']); //
		fun();

		/**
		 * call方法的作用
		 * 1. 实现多重继承：子类可以使用父类的方法
		 */
		function Animal() {
			console.log('Animal', this); // call方法改变Animal函数中this的指向，this指向Pig，pig也有了eat方法
			this.eat = function () {
				console.log('吃东西');
			};
		}
		function Bird() {
			this.say = function () {
				console.log('说话');
			};
		}
		function Pig() {
			// this 指向Pig
			Animal.call(this); // call方法改变Animal函数中this的指向，this指向Pig
			console.log(this);
			Bird.call(this);
			this.run = function () {
				console.log('跑步');
			};
		}
		let pig = new Pig();
		// pig.eat();
		// pig.say();
		pig.run();
	}

	render() {
		return (
			<div>
				<div>bind, call, apply 函数的作用</div>
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
