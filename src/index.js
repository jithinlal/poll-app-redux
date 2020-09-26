import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Loadingbar from 'react-redux-loading';

import App from './components/App';
import reducer from './reducers';
import middleware from './middlewares';
import './index.css';

function ColorfulBorder() {
	return (
		<React.Fragment>
			<ul className='border-container'>
				<li className='border-item' style={{ background: 'var(--red)' }} />
				<li className='border-item' style={{ background: 'var(--blue)' }} />
				<li className='border-item' style={{ background: 'var(--pink)' }} />
				<li className='border-item' style={{ background: 'var(--yellow)' }} />
				<li className='border-item' style={{ background: 'var(--aqua)' }} />
			</ul>
			<Loadingbar />
		</React.Fragment>
	);
}

const store = createStore(reducer, middleware);

ReactDOM.render(
	<Provider store={store}>
		<ColorfulBorder />
		<App />
	</Provider>,
	document.getElementById('root'),
);
