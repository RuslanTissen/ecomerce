import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

function Header() {
	return (
		<div className='header'>
			<img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>

			<div className='header__search'>
				<input type="text" className="header__search--input" />
				<SearchIcon className='header__search--icon' />
			</div>


			<div className="header__nav">
				<div className="header__option">
					<span className="header__option--line-one">Hello Ruslan</span>
					<span className="header__option--line-two">Sign In</span>
				</div>

				<div className="header__option">
					<span className="header__option--line-one">Returns</span>
					<span className="header__option--line-two">& Orders</span>
				</div>

				<div className="header__option">
					<span className="header__option--line-one">Your</span>
					<span className="header__option--line-two">Prime</span>
				</div>

				<Link to="checkout" className="header__option--basket">
					<ShoppingBasketIcon />
					<span className="header__option--line-two header__basket-count">0</span>
				</Link>
			</div>

		</div>
	)
}

export default Header