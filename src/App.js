import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header.jsx';
import Home from "./Home.jsx"

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path='*' element={<Home />}>
					{/* <Route path='home' element={<Home />} /> */}
					{/*  */}
					{/*  */}

				</Route>
			</Routes>
		</div>
	);
}

export default App;
