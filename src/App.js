import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header.jsx';
import Home from "./Home.jsx"
import Checkout from "./Checkout.jsx"

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path='*' element={<Home />}></Route>
				{/* <Route path='home' element={<Home />} /> */}
				<Route path='checkout' element={<Checkout />} />

			</Routes>
		</div>
	);
}

export default App;
