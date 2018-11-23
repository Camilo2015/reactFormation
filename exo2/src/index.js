import React from 'react';
import ReactDom from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ConfigureStore } from "../redux/ConfigureStore";
import { Provider } from "react-redux";
import App from './App';
import Menu from "./Menu";

const store = ConfigureStore();
ReactDom.render(
<Provider store={store}>
<Menu/></Provider>, document.getElementById('app'));
registerServiceWorker();


