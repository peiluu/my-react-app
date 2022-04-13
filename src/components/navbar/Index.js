import React from 'react';
import { ThemeContext } from '../../pages/context/Index';
class ThemedButton extends React.Component {
	static contextType = ThemeContext;
	render() {
		console.log(this.context);
		return (
			<ThemeContext.Consumer>
				{ctxData => {
					console.log(ctxData);
				}}
			</ThemeContext.Consumer>
		);
	}

	// ThemedButton.contextType = MyContext;
}
export default ThemedButton;
