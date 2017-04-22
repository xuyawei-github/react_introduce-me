import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router,Route,browserHistory,IndexRoute} from "react-router";
import Geren from "./geren.js"
import Jineg from "./Jineg.js"
import Luli from "./Luli.js"
import Aihao from "./Aihao.js"
ReactDOM.render(

(<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Geren}></IndexRoute>
			<Route path="/geren" component={Geren}> </Route>
			<Route path="/jineg" component={Jineg}> </Route>
			<Route path="/Luli" component={Luli}> </Route>
			<Route path="/Aihao" component={Aihao}> </Route>
		</Route>
</Router>),


  document.getElementById('root')
);
