import React from 'react'
import "./Checkout.css"
import banner from "../src/images/banner.jpg"

function Checkout() {
	return (
		<div className='checkout'>
			<div className="checkout__left">
				<div className="checkout__ad">
					{/* <img src={banner} alt="" className="checkout__add" /> */}
				</div>
				<div>
					<h2 className="checkout__title">	Your shopping basket	</h2>
				</div>
			</div>

			<div className="checkout__right">
				<h2>The subtitle will be here</h2>
			</div>

		</div>
	)
}

export default Checkout