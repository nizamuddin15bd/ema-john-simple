import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src= {logo} alt=''/>
            <div>
            <a href='/orders'> Orders</a>
            <a href='/ordersReview'> Order Review</a>
            <a href='/manage'> Manage Inventory </a>
            <a href='/login'> Login </a>
            </div>
        </nav>
    );
};

export default Header;