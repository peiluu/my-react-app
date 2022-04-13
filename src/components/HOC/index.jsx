import { Row } from 'antd';
import React, { Component } from 'react';
// 传入一个组件，导出一个组件，
const HocComponent = WrappedComponent => {
	//注意这里的形参需要首字母大写，和普通组件一致
	return class newcom extends Component {
		constructor(props) {
			super(props);
			this.state = {
				info: '底部共享信息',
				stateInfo: '高阶组件公共状态',
			};
		}
		onBtnClick = () => {
			console.log('调用高阶组件的公共方法');
		};

		render() {
			const { info, stateInfo } = this.state;
			// 返回的组件里面渲染的是增强之后的原组件
			return (
				<Row>
					<WrappedComponent
						onBtnClick={this.onBtnClick}
						stateInfo={stateInfo}
						{...this.props}
					></WrappedComponent>
					<div>{info}</div>
				</Row>
			);
		}
	};
};
export default HocComponent;
