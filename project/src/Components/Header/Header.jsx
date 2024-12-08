import React, { useEffect } from 'react';
import Tea from '../../Images/Tea.svg';
import Buy from '../../Images/Buy.svg';
import User from '../../Images/User.svg';
import Search from '../../Images/Search.svg';
import Close from '../../Images/close.svg';

import './Header.css';
import '../../index.css';

const Header = () => {
  useEffect(() => {
    const menuBtn = document.querySelector('.menu__btn');
    const menuList = document.querySelector('.menu__list');
    const closeBtn = document.querySelector('.menu_close-btn')

    if (menuBtn && menuList) {
      const toggleMenu = () => {
        menuList.classList.toggle('menu__list--open');
      };
      // Обработка кнопки
      menuBtn.addEventListener('click', toggleMenu);
      closeBtn.addEventListener('click', toggleMenu);

      // А тут само действие
      return () => {
        menuBtn.removeEventListener('click', toggleMenu);
        closeBtn.removeEventListener('click', toggleMenu  )
      };
    }
  }, []);


  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <a href="#" className="logo">
              <img src={Tea} alt="Tea Logo" />
            </a>
            <nav className="menu">
              <button className="menu__btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <ul className="menu__list">
                <li className="menu_close">
                  <button className="menu_close-btn">
                    <img src={Close} alt="Close Menu" />
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
                <li className="mobile-nav">
                  <ul className="mobile_menu">
                    <li className="mobile-menu__item">
                      <a href="#" className="mobile__menu-link">Contact us</a>
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
                        <img src={Buy} alt="Buy" />
                      </a>
                    </li>
                    <li className="mobile-actions__item">
                      <a href="#" className="user-actions__link">
                        <img src={User} alt="User" />
                      </a>
                    </li>
                    <li className="mobile-actions__item">
                      <a href="#" className="user-actions__link">
                        <img src={Search} alt="Search" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <ul className="user-actions">
              <li className="user-actions__item">
                <a href="#" className="user-actions__link">
                  <img src={Buy} alt="Buy" />
                </a>
              </li>
              <li className="user-actions__item">
                <a href="#" className="user-actions__link">
                  <img src={User} alt="User" />
                </a>
              </li>
              <li className="user-actions__item user-actions__item-search">
                <a href="#" className="user-actions__link">
                  <img src={Search} alt="Search" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
