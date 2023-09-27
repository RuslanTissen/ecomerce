import React from 'react'
import "./Home.css"
import "./Product.jsx"
import Product from './Product.jsx'
import living from "../src/images/living3.jpg"
import book from "../src/images/book.png"

function Home() {
	return (
		<div className='home'>
			<div className="home__container">
				<img
					className='home__image'
					// src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV-en-GB._CB428684220_.jpg"
					// src='https://images-na.ssl-images-amazon.com/images/G/01/HBS/Services/Storefront2022/Storefront_hero_1500x400._CB1198675309_.png'
					src={living}
					alt="" />

				<div className="home__row">
					<Product id="123564872" title="The Lean startup" price={19.99} image={book} rating={4}/>
					<Product id="226517899" title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhonestartup" price={19.99} image={book} rating={5}/>

				</div>

				<div className="home__row">
					<Product />
					<Product />
					<Product />
				</div>

				<div className="home__row">
					<Product />
				</div>

			</div>
		</div>
	)
}

export default Home