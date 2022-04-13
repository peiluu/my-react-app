import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Form } from 'antd';

export default function Useref(props) {
	const [count, setCount] = useState(0);

	const doubleCount = useMemo(() => {
		return 2 * count;
	}, [count]);

	const couterRef = useRef(); //
	couterRef.current = count;

	useEffect(() => {
		document.title = `The value is ${count}`;
		console.log(couterRef);
		console.log(couterRef);
	}, [count]);


	
	console.log('组件重新渲染');
	console.log(couterRef);
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
}
