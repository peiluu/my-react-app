import React, { createElement, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function Index() {
	useEffect(() => {
		const myRef = React.createRef();
		/** 
	 * 1. 创建虚拟dom - 通过React.createElement函数
		React.createElement(
			type,
			[props],
			[...children])
	*/
		const VDOM = createElement('div', { id: 'title' }, [
			createElement('span', { id: 'text' }, '子元素1'),
			createElement('span', { id: 'text' }, '子元素2'),
		]);
		// console.log(VDOM);

		/**
		 * 2. react虚拟DOM的真实样子，在浏览器控制台中打印VDOM出来的最终结果
		 * 本质上是一个能代表dom树的js对象，通常含有标签名，标签上的属性，事件监听和子元素们，以及其他属性
		 */
		const vNode = {
			key: null,
			props: {
				className: 'red',
				children: [
					{
						type: 'span',
						children: '子元素',
					},
					{
						type: 'span',
						children: '子元素',
					},
				],
				onclick: () => {
					console.log('触发点击事件');
				},
				id: 'title',
			},
			ref: myRef,
			type: 'div',
		};
		// console.log(vNode);
		//
		ReactDOM.render(VDOM, document.getElementById('test1'));
	}, []);

	/**
	 * 3. 用jsx简化创建 虚拟DOM，通过babel转为为 creatElement 形式 (creatElement语法糖)
	 * babel - 原本用于转化js语法，但是由于react团队和babel团队的关系很好，所以将react转化语法直接内置了
	 * 不需要使用ReactDOM.render函数渲染，可以直接插入代码里。
	 */

	const divNode = (
		<div className='innerBox' onclick={() => console.log('响应点击事件')}>
			一个水平垂直居中的盒子
		</div>
	);
	console.log(divNode);

	ReactDOM.render(divNode, document.getElementById('test2'));

	/**
	 * 4. 关于虚拟dom的谣言
	 * (1) DOM操作慢？虚拟dom快？
	 * DOM操作慢是对比于JS原生API，如数组操作，任何基于DOM的库，如vue/react 都不可能在操作dom时比DOM快，因为在用dom操作dom，不可能比自身还快
	 * 为什么会有这样的谣言？
	 * 因为在某些场景下，虚拟dom快，见下
	 * 在操作量不大的情况下，react 虚拟dom比较快，但是在操作量非常大的情况下，还是原生的dom操作更快
	 *
	 * 5. 虚拟dom有什么优点和缺点 ?
	 * 优点：
	 * （1）减少dom操作
	 * a. 减少dom操作的次数 => 虚拟dom可以将多操作合并成一次操作，比如在原生中添加10个节点，是一个一个添加的，但是在react里，可以往数组里添加100个文本，然后一次性插入到页面中，就只进行了一次dom操作
	 * b. 减少dom操作的范围 =  比如我开始有90个节点，我需要添加10节点，我需要将新的和旧的全部一起放在html里面
	 * 但是虚拟DOM借助DOM diff比对，只会更新那10个有变化的节点，将多余的操作省掉
	 * （2）跨平台
	 *  虚拟dom不仅可以变成dom，还可以变成小程序、IOS应用、安卓应用，因为虚拟DOM本质上只是一个js对象
	 *
	 * 缺点：需要额外的创建函数，如creatElement，但是可以通过jsx来简化成XML语法
	 */

	/**
	 * diff算法
	 * 1. 新旧dom树逐层对比，找出那些节点需要更新
	 * 2. 如果节点的target（标签）和key不同，直接销毁就的dom树，创建新的dom树，
	 * 3. 如果节点的target（标签）和key都相同，则只更新节点的属性
	 * 4. 然后进入节点后代做递归
	 */

	return (
		<div className='outerBox'>
			<div className='outerBox' id='test1'></div>
			<div className='outerBox' id='test2'></div>
			<div className='outerBox' id='test3'>
				{divNode}
			</div>
		</div>
	);
}

export default Index;
