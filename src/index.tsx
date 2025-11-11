import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';

import { store } from 'store';

import { App } from './components';

import 'reset-css';
import 'styles/fonts/roboto.css';
import 'styles/common.scss';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
