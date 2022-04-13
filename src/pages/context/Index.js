import { createContext } from 'react';

import Toolbar from '../../components/ContextCom/Toolbar/index';
import Navbar from '../../components/navbar/Index';

export const ThemeContext = createContext({
	text: 'context按鈕',
	theme: 'light',
});

function GlobalCom() {
	return (
		<div>
			<ThemeContext.Provider value={{ text: 'context按鈕', theme: 'light111111111111111' }}>
				<Toolbar />
				<Navbar />
			</ThemeContext.Provider>
			<Toolbar text='context按鈕' />
		</div>
	);
}

export default GlobalCom;
