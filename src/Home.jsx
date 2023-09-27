import React from 'react'
import "./Home.css"
import "./Product.jsx"
import Product from './Product.jsx'
import living from "../src/images/living.jpg"

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
					<Product />
					<Product />
				</div>

				<div className="home__row">
					{/* <Product/> */}
					{/* <Product/> */}
					{/* <Product/> */}
				</div>

				<div className="home__row">
					{/* <Product/> */}
				</div>

			</div>
		</div>
	)
}

export default Home