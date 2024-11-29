import React from 'react'
import Tea from '../../Images/Tea.svg'
import Buy from '../../Images/Buy.svg'
import User from '../../Images/User.svg'
import Search from '../../Images/Search.svg'
import Close from '../../Images/close.svg'

import './Header.css'
import '../../index.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
            <div className="header__inner">
                <a href="#" className="logo">
                    <img src={Tea} alt="" />
                </a>
                <nav className="menu">
                    <button className="menu__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className='menu__list' >
                        <li className="menu_close">
                       <button className='menu_close-btn' >
                       <img src={Close} alt="" />
                       </button>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Black</a>
                            </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Green</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">White</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Oolong</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Pu-erh</a>
                        </li>

                        <li className='mobile-nav ' >
                            <ul className='mobile_menu' >
                               <li className="mobile-menu__item">
                                <a href="#" className="mobile__menu-link">Contct us</a>
                                </li>
                               <li className="mobile-menu__item">
                                <a href="#" className="mobile__menu-link">Our blog</a>
                                </li>
                               <li className="mobile-menu__item">
                                <a href="#" className="mobile__menu-link">Shipping and Delivery</a>
                                </li>
                            </ul>
                            <ul className="mobile-actions">
                            <li className="mobile-actions__item">
                                <a href="#" className="user-actions__link">
                            <img src={Buy} alt="" /></a>
                            </li>
                            <li className="mobile-actions__item">
                              <a href="#" className="user-actions__link">
                                 <img src={User} alt="" /></a>
                            </li>
                            <li className="mobile-actions__item ">
                              <a href="#" className="user-actions__link">
                                <img src={Search} alt="" /></a>
                            </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <ul className="user-actions">
                    <li className="user-actions__item">
                        <a href="#" className="user-actions__link">
                            <img src={Buy} alt="" /></a>
                    </li>
                    <li className="user-actions__item">
                        <a href="#" className="user-actions__link">
                            <img src={User} alt="" /></a>
                    </li>
                    <li className="user-actions__item user-actions__item-search ">
                        <a href="#" className="user-actions__link">
                            <img src={Search} alt="" /></a>
                    </li>
                    <li className="user-actions__item">
                        {/* <search>
                            <form action='' >
                               <input type='search' ></input>
                               <button type='submit' ></button>
                            </form>
                        </search> */}
                    </li>
                </ul>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
