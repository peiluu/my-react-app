import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Index';
import './index.module.less';
import './index.less';
import configStore from '../../store/index';
// import { connect, mapStateToProps } from "react-redux";

class Index extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this);
		/**
		 * Set、WeakSet、 Map、WeakMap的差异
		 */
		const set = new Set([() => {}]);
		const newSet = [...set];
		const newSet1 = Array.from(set);
		// console.log(newSet);
		/**
		 * Set表示无重复值的有序列表，Set 可以接收一个数组做为参数，用来初始化
		 * WeakSet与Set的区别 （weak - 弱）
		 * 1. WeakSet成员只能是引用类型，而不能是其他类型的值
		 * 2. 没有遍历操作的API（entries、keys等），没有size属性
		 */
		const weakSet = new WeakSet(
			[() => {}],
			() => {},
			() => {}
		);
		// const weakSet = new WeakSet([1]);
		// console.log('weakSet', weakSet);
		// console.log(weakSet.entries());

		/**
		 * Map类型是键值对的有序列表，键和值是任意类型
		 * Map、WeakMap的区别 （weak - 弱）`
		 * 1. WeakMap只接受对象作为键名（null除外,因为typeof null为object），不接受其他类型的值作为键名
		 * 2. 没有遍历操作的API（entries、keys等）
		 */
		const map = new Map();
		map.set({}, 11111);
		map.set(undefined, 11111);
		// console.log('map', map);

		const weakMap = new WeakMap();
		weakMap.set({}, 11111);
		// weakMap.set(null, 11111);
		// console.log('weakMap', weakMap);

		/**
		 * Symbol类型
		 * Symbol类型创建独一无二的数据，两个值永远不相等（永远不会重复的字符串）
		 * Symbol.description - 定义Symbol的描述语言
		 */
		const Symbol1 = Symbol(1);
		const Symbol2 = Symbol(1);
		// console.log(Symbol1);
		// console.log(Symbol1 === Symbol2);
		// console.log(Symbol1.description);

		// 用Symbol3.for声明在全局变量里
		const Symbol3 = Symbol.for('JS');
		const Symbol4 = Symbol.for('JS');
		// console.log(Symbol3);
		// console.log(Symbol3 === Symbol4);
		// console.log(Symbol3.description);

		// Symbol应用 - 做唯一的key,避免相同的key值产生数据的覆盖
		const user1 = {
			name: '李四',
			key: Symbol(),
		};
		const user2 = {
			name: '李四',
			key: Symbol(),
		};
		const grade = {
			[user1.key]: {
				js: 80,
			},
			[user2.key]: {
				js: 70,
			},
		};
		// console.log(grade[user1.key]);
		/**
		 *深浅拷贝方法
		 * Object.create()方法用于创建一个新对象，并把新对象的原型对象指向该方法的第一个参数。
		 */
		const father = {
			age: 18,
		};

		const son = Object.create(father);
		// console.log(son.age);
		// console.log(son.__proto__);

		/**
		 * js事件循环机制
		 */
		setTimeout(() => {
			// 异步任务 - 宏任务 - 计时器线程将setTimeout回调送入宏队列等待微任务队列全部执行完毕，再执行
			// console.log('计时器执行');
		}, 0);
		// 同步任务 - 按照顺序由js主线程直接执行
		for (let i = 0; i < 100; i++) {
			// console.log('i', i);
		}

		// 同步任务
		for (let j = 0; j < 100; j++) {
			// console.log('j', j);
		}
		// 异步任务 - 微任务（vip）- 优先执行
		Promise.resolve().then(() => {
			// console.log('Promise执行');
		});
	}

	render() {
		console.log('render函数this指向', this);
		return (
			<div>
				<span className='block'>es6新特性</span>
			</div>
		);
	}
}

export default Index;
