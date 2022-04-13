import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Link } from 'react-router-dom';
import ItemList from '../../components/HOC/itemlist.jsx';

import configStore from '../../store/index';
// import { connect, mapStateToProps } from "react-redux";

class HocComponents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: [
				{ id: 1, name: '羽毛球', checked: false },
				{ id: 2, name: '篮球', checked: false },
				{ id: 3, name: '乒乓球', checked: false },
			],
		};
	}
	render() {
		const { arr } = this.state;
		return (
			<div>
				<ItemList
					arr={arr}
					onGetFinallData={arr => {
						console.log(arr);
					}}
				/>
			</div>
		);
	}
}

export default HocComponents;
