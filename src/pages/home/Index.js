// import PubSub from "pubsub-js"; //引入

// import { Button } from 'element-react';
// import Navtop from "@/components/navtop/Index";
import { Link } from 'react-router-dom';
import { Row, List, Avatar, IconText } from 'antd';

import configStore from '../../../src/store/index';

import Navbar from '../../components/navbar/Index';

function Home() {
	const listData = [
		{
			title: '1. redux',
			router: '/redux',
		},
		{
			title: '1. context',
			router: '/context',
		},
		{
			title: '1. useref',
			router: '/useref',
		},
	];
	return (
		<div>
			<Navbar />
			<List
				size='large'
				dataSource={listData}
				renderItem={item => (
					<List.Item key={item.title}>
						<List.Item.Meta
							avatar={<Avatar src={item.avatar} />}
							title={<Link to={{ pathname: item.router }}>{item.title}</Link>}
						/>
					</List.Item>
				)}
			/>
		</div>
	);

	// <div>
	// 	<Navtop />
	// 	<div>这里是home</div>
	// 	<Link to={{ pathname: '/userlist' }}>跳转到userList</Link>

	// 	<Link to={{ pathname: '/hook' }}>跳转到HOOK</Link>

	// 	<Link to={{ pathname: '/hocsport' }}>验证高阶组件--hocsport</Link>

	// 	<Link to={{ pathname: '/hocground' }}>验证高阶组件--hocground</Link>
	// </div>
}

export default Home;
