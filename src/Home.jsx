import React from 'react'
import "./Home.css"
import "./Product.jsx"
import Product from './Product.jsx'
import living from "../src/images/living3.jpg"
import book from "../src/images/book.png"
import airPods from "../src/images/Apple_AirPods.png"
import headphone from "../src/images/Bose_Headphones_700.png"
import pots from "../src/images/Pots_and_Pans.png"
import Weight from "../src/images/Weight.png"
import coffee from "../src/images/Coffee_Maker.png"


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
					<Product id="123564872" title="THE CAPITALIST MANIFESTO: UNDERSTADING THE SCIENCE AND ECONOMICS" price={19.99} image={book} rating={4}/>
					<Product id="226517899" title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhonestartup" price={909.00} image={airPods} rating={5}/>

				</div>

				<div className="home__row">
				<Product id="165465456" title="Bose Headphones 700, Noise Cancelling Bluetooth Over-Ear Wireless Headphones with Built-In Microphone for Clear Calls and Alexa Voice Control, Black" price={299.99} image={headphone} rating={4}/>
				<Product id="328547931" title="Ayesha Curry Home Collection Hard Anodized Nonstick Cookware Pots and Pans Set, 9 Piece, Charcoal Gray" price={91.26} image={pots} rating={5}/>
				<Product id="965231845" title="Portzon 8 Colors Options Compatible with Set of 2 Rubber Dumbbell Weight, Anti-Slip, Anti-roll, Hex Shape" price={12.83} image={Weight} rating={5}/>
				</div>

				<div className="home__row">
				<Product id="548923157" title="Café Specialty Drip Coffee Maker | 10-Cup Insulated Thermal Carafe | WiFi Enabled Voice-to-Brew Technology | Smart Home Kitchen Essentials | SCA Certified, Barista-Quality Brew | Matte Black" price={367.00} image={coffee} rating={3}/>
				</div>

			</div>
		</div>
	)
}

export default Home