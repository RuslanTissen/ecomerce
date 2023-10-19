import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct({id, image, title, price, rating}) {
  return (
	 <div className='checkout-product'>
		<img className='checkout-product__image' src={image} />

		<div className="checkout-product__info">
			<p className='checkout-product__title'>{title}</p>
		</div>

	 </div>
  )
}

export default CheckoutProduct