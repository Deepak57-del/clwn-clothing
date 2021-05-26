import React from 'react';
import { Link } from 'react-router-dom';
import '../header/header.style.css'
import { ReactComponent as Logo} from '../../assest/crown.svg'
const Header = ()=>(
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop/hats' className="option">
                SHOP
            </Link>
            <Link to="/shop/contact" className="option">
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;