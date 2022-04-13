import { Button } from 'antd';
import { Consumer } from '../../../pages/context/Index';
import { ThemeContext } from '../../../pages/context/Index';

function ThemedButton(props) {
	// return <Button theme={this.context}>{props.text}</Button>;
	return (
		<ThemeContext.Consumer>
			{ctxData => {
				console.log(ctxData);
				return <Button>{props.text}</Button>;
			}}
		</ThemeContext.Consumer>
	);
}
// ThemedButton.contextType = MyContext;

export default ThemedButton;
