import React from 'react'
import "./Checkout.css"
import banner from "../src/images/banner.jpg"
import { Link } from 'react-router-dom'
import Subtotal from "./componets/Subtotal.jsx"

function Checkout() {
	return (
		<div className='checkout'>
			<div className="checkout__left">
				<Link to="*">
					<div className="checkout__ad">{/* <img src={banner} alt="" className="checkout__add" /> */}</div>
				</Link>
				<div>
					<h2 className="checkout__title">	Your shopping basket	</h2>
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>

		</div>
	)
}

export default Checkout