import '@/assets/css/global.styl';
// import App from './App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './store';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

// if (process.env.NODE_ENV === 'development') {
//   const VConsole = require('vconsole');
//   const vConsole = new VConsole();
// }

configure({
  enforceActions: true,
});

const $app = document.getElementById('app');


const Hotapp = require('./app').default;
ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <Hotapp />
  </Provider>
  , $app);

// if (process.env.NODE_ENV === 'development') {
//   // 开启 React DevTools
//   require('preact/debug');
//   if ((module as any).hot) {
//     (module as any).hot.accept('./app', () => {
//       init();
//     });
//     // (module as any).hot.accept();
//   }
// }

