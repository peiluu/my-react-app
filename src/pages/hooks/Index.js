import React, {
	useState,
	useEffect,
	useMemo,
	useCallback,
	useReducer,
	useRef,
	useContext,
} from 'react';
import { Form } from 'antd';
/**
 * react hooks最常用的七个钩子
 */
const Index = () => {
	/**
	 * 一、useState - 类比与react中的setState
	 */
	useEffect(() => {
		// document.title = `The value is ${count}`;
	}, [count]);

	const [count, setCount] = useState(0);

	/**
	 * 二、useEffect
	 * 1. useEffect 模拟componentDidMount，页面挂载时执行一次
	 */
	useEffect(() => {
		// console.log('componentDidMount');
	}, []);

	/**
	 * 2.useEffect 模拟componentDidUnMount，页面卸载时执行一次
	 */
	useEffect(() => {
		// return 一个箭头函数
		return () => {
			// console.log('componentDidUnMount');
		};
	}, [count]);

	/**
	 * 3.useEffect 模拟componentDidUpdate，页面每次重新render都会执行
	 */
	useEffect(() => {
		return () => {
			// console.log('componentDidUpdate');
		};
	});

	/**
	 * 4.useEffect 模拟shouldComponentUpdate，根据条件判断是否执行
	 */

	/**
	 * 三、useMemo
	 * 1. useEffect 模拟componentDidMount，页面挂载时执行一次
	 */
	const doubleCount = useMemo(() => {
		return 2 * count;
	}, [count]);

	/**
	 * 四、use
	 * 1. useEffect 模拟componentDidMount，页面挂载时执行一次
	 */

	const callback = useCallback(() => {
		return 2 * count;
	}, [count]);

	/**
	 * 五、useReduce
	 * 1. 数组的reduce - reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
	 */
	useEffect(() => {
		const fun = () => {

		}
		const arr = [1,2,3]
		const reduceResult = arr.reduce(fun);
		console.log('reduceResult', reduceResult)
	}, []);

	const couterRef = useRef(); //
	couterRef.current = count;
	return (
		// 获取DOM对象
		<Form>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Count: {count}, double: {doubleCount}
			</button>
			<button
				onClick={() => {
					couterRef.current = 1;
				}}
			>
				couterRef.current: {couterRef.current}
			</button>
		</Form>
	);
};
export default Index;
