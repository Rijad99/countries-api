// React
import ReactDOM from 'react-dom/client';

// Components
import App from './App';



const rootEl = document.getElementById('root');

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
		root.render(
      		<App />
	);
}
