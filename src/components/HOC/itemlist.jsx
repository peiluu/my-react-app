import React, { Component } from 'react';
import { Button } from 'antd';
import HocComponent from './index';

class Register extends Component {
	render() {
		const { stateInfo, onBtnClick } = this.props;
		return (
			<div>
				<Button onClick={onBtnClick}>调用高阶组件的公共方法</Button>
				<div>{stateInfo}</div>
			</div>
		);
	}
}
// 使用高阶组件进行二次封装
export default HocComponent(Register);
