import React from 'react'
import './Main.css'
import '../../index.css'


import Black from '../../Images/black.png'
import Green from '../../Images/green.png'
import White from '../../Images/white.png'
import Oolong from '../../Images/oolong.png'
import Puerh from '../../Images/pu-erh.png'
import Blog from '../../Images/Blog-img.jpg'
import Vector from '../../Images/Vector.svg'
import Vector__2 from '../../Images/Vector-2.svg'
import Vector__3 from '../../Images/Vector-3.svg'
import Vector__4 from '../../Images/Group-4.svg'
import Icon from '../../Images/Read.svg'

import Partners_1 from '../../Images/partners-1.svg'
import Partners_2 from '../../Images/partners-2.svg'
import Partners_3 from '../../Images/partners-3.svg'
import Partners_4 from '../../Images/partners-4.svg'

import Tea from '../../Images/Tea.svg';


import Facebook from '../../Images/facebook.svg'
import Youtube from '../../Images/youtube.svg'
import Twitter from '../../Images/twitter.svg'
import Instagram from '../../Images/instagram.svg'




const Main = () => {
  return (
    <div>
      <main className="main">
        <div className="top">
          <div className="container">
            <div className="top__inner">
              <h1 className="top__title">
                A cup of tea is a moment of colm in the chaos of life
                <p className="top__text">
                  Wide selection of high-quality teas from all over the world, cafefully
                  curated by tea experts.
                </p>
              </h1>
            </div>
          </div>
        </div>
        <blockquote className='blockqoute' >
          <p className='blockqoute__text' >
            "Tea is not just a drink, it's a way of life and a way to 
            connect with our loved ones"
          </p>
        </blockquote>
        <section className="assortment">
          <div className="container">
            <h2 className="title  assortment__title">Explore out collections</h2>
            <ul className="assortment__list">
              <li className="assortment__item">
                <img src={Black} alt="" className="assortment__img" />
                <p className="assortment__name">Black</p>
              </li>
              <li className="assortment__item">
                <img src={Green} alt="" className="assortment__img" />
                <p className="assortment__name">Green</p>

              </li>
              <li className="assortment__item">
                <img src={White} alt="" className="assortment__img" />
                <p className="assortment__name">White</p>

              </li>
              <li className="assortment__item">
                <img src={Oolong} alt="" className="assortment__img" />
                <p className="assortment__name">Oolong</p>

              </li>
              <li className="assortment__item">
                <img src={Puerh} alt="" className="assortment__img" />
                <p className="assortment__name">Pu-erh</p>

              </li>
            </ul>
          </div>
        </section>
        <section className="reviews">
          <div className="container">
          <h2 className="title">
            What our Clients say
          </h2>
          <ul className="reviews__list">
            <li className="reviews__item">
              <blockquote>
                <p className='reviews__text ' >
                "As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit."

                </p>
                <cite className='reviews__name' > Alice </cite>
              </blockquote>
            </li>
            <li className="reviews__item">
              <blockquote>
                <p className='reviews__text ' >
                "This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional."
                </p>
                <cite className='reviews__name' > Mad-Hatter </cite>
              </blockquote>
            </li>
            <li className="reviews__item">
              <blockquote>
                <p className='reviews__text ' >
                "If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed."
                </p>
                <cite className='reviews__name' >Dormouse</cite>
              </blockquote>
            </li>
            <li className="reviews__item reviews__item--hide ">
              <blockquote>
                <p className='reviews__text ' >
                "I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience."
                </p>
                <cite className='reviews__name' > March Hare </cite>
              </blockquote>
            </li>
          </ul>
          </div>
        </section>
        <section className="main-blog">
          <div className="container">
            <h2 className="title">Our Tea Blog</h2>
            <ul className="main-blog__list">
              {/* 1 */}
              <li className="main-blog__item">
                <img src={Blog} alt="" className="main_blog__item-img" />
                <div className="main__blog-content">
                  <h3 className="main__blog-title">
                    Tea Time Travels: Funny Moments from Around the World
                  </h3>
                  <a href="" className="main__blog__item-author">by Ivan Hlibov</a>
                  <a href="" className="main__blog__item-link">Read <img src={Icon} alt="" /> </a>
                </div>
              </li>
              {/* 2 */}
              <li className="main-blog__item">
                <img src={Blog} alt="" className="main_blog__item-img" />
                <div className="main__blog-content">
                  <h3 className="main__blog-title">
                    Tea Time Travels: Funny Moments from Around the World
                  </h3>
                  <a href="" className="main__blog__item-author">by Ivan Hlibov</a>
                  <a href="" className="main__blog__item-link">Read 
                    <img src={Icon} alt="" /> 
                     </a>
                </div>
              </li>
              {/* 3 */}  <li className="main-blog__item">
                <img src={Blog} alt="" className="main_blog__item-img" />
                <div className="main__blog-content">
                  <h3 className="main__blog-title">
                    Tea Time Travels: Funny Moments from Around the World
                  </h3>
                  <a href="" className="main__blog__item-author">by Ivan Hlibov</a>
                  <a href="" className="main__blog__item-link">Read <img src={Icon} alt="" />  </a>
                </div>
              </li>
              {/* 4 */}
              <li className="main-blog__item">
                <img src={Blog} alt="" className="main_blog__item-img" />
                <div className="main__blog-content">
                  <h3 className="main__blog-title">
                    Tea Time Travels: Funny Moments from Around the World
                  </h3>
                  <a href="" className="main__blog__item-author">by Ivan Hlibov</a>
                  <a href="" className="main__blog__item-link">Read <img src={Icon} alt="" />  </a>
                </div>
              </li>
            </ul>
            <a href="" className="main__blog__link">View all</a>
          </div>
        </section>
        <section className="mailing-list">
          <div className="container">
            <h2 className="title mailing-list__title ">
            Want to know more?
            </h2>
            <div className="mailing-list__inner">
              <p className="mailing-list__text">
              Join our mailing list and stay up-to-date with the latest news, promotions, and exclusive offers from our tea store. Be the first to know about new tea arrivals, seasonal blends, and special discounts. Don't miss out on the tea-rrific perks - sign up today!

              </p>
              <form action="" className="mailing-list__form">
                <input className='mailing-list__email' type="email" placeholder='name@email.com'  />
                <button type='submit' className='mailing-list__btn' >Join</button>
                <label htmlFor="checkbox" className='mailing-list__label'  >
                  <input className='checkbox' id='checkbox' type="checkbox" />
                  <span className='checkbox-style' >
                    <div className="checkbox__text">
                    We take your privacy seriously and are committed to protecting your personal information. By subscribing to our mailing list, you are consenting to receive periodic emails from us about our products, promotions, and other tea-related information.

                    </div>
                  </span>
                </label>
              </form>
            </div>
          </div>
        </section>
        <section className="prioritise">
          <div className="container">
            <h2 className="title">We Prioritise</h2>
            <ul className="prioritise_list">
              <li className="prioritise__item">
              <h4 className='prioritise__title'>Single garden teas</h4>
                <div className="prioritise__text">Complete transparency</div>
                <img src={Vector} alt="" />
              </li>
              <li className="prioritise__item">
              <h4 className='prioritise__title'>Only Loose leaf tea</h4>
                <div className="prioritise__text">Best Drinking Experience</div>
                <img src={Vector__2} alt="" />
              </li>
              <li className="prioritise__item">
              <h4 className='prioritise__title'>Customer support</h4>
                <div className="prioritise__text">No bots, no automated replies</div>
                <img src={Vector__3} alt="" />
              </li>
              <li className="prioritise__item">
                <h4 className='prioritise__title'>Fast shipping</h4>
                <div className="prioritise__text">Save, Convenient, Reliable</div>
                <img src={Vector__4} alt="" />
              </li>
            </ul>
          </div>
        </section>
      </main>
      <div className="footer">
        <div className="container">
            <div className="footer__inner">
              
              <ul className="footer__products">
                <li className="footer__products-title">
                  Products
                </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">Black tea</a>
                  </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">Green tea</a>
                  </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">White tea</a>
                  </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">Oolong tea</a>
                  </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">Pu-erh tea</a>
                  </li>
              </ul>
              <ul className="footer__company">
              <li className="footer__products-title">
                  Company
                </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">About Us</a>
                  </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">Contact Us</a>
                  </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">Our Blog</a>
                  </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">FAQ</a>
                  </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">Shipping & Delivery</a>
                </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">Refund policy</a>
                </li>
                <li className="footer__products-item">
                  <a href="#" className="footer__products-link">Terms of Service</a>
                </li>
              </ul>
              
              <blockquote className='footer__blockquote'  >
                <p className='footer__blockquote-text' >“Tea is a journey. It can take you to new places and open your mind to new experiences. Let every sip transport you to a world of wonder and possibility”</p>
                 <cite className='footer__blockquote-author' >
                  Dragomir Teodorescu,   
               <span className='bottom__footer'  >Tealuxe owner</span> 
                 </cite>
              </blockquote>
              <div className="footer__contacts">
                 <h5 className="footer__contacts-title">
                  Stay In Touch
                 </h5>
                 <p className="footer_contacts-text">
                 Please feel free to contact us via the email of phone. We would be happy to hear from you!
                 </p>
                 <ul className="footer__nav">
                  <li className="footer__nav-logo">
                    <a href="" className="footer__logo">
                      <img className='logo-footer' src={Tea} alt="" />
                    </a>
                  </li>
                  <li className="footer__nav-contacts">
                    <a href="tel:+370 680 123456" className="footer__nav-phone">+370 680 123456</a>
                    <a href="mailto:info@tealuxe.com" className="footer__nav-email">info@tealuxe.com</a>

                  </li>
                  <li className="footer__social">
                    <ul className="footer__social-list">
                      <li className="footer__social-item">
                        <a href="#" className="foooter__social-link">
                          <img src={Facebook} alt="" /></a>
                        </li>
                      <li className="footer__social-item">
                        <a href="#" className="foooter__social-link">
                          <img src={Youtube} alt="" /></a>
                        </li>
                      <li className="footer__social-item">
                        <a href="#" className="foooter__social-link">
                          <img src={Instagram} alt="" /></a>
                        </li>
                      <li className="footer__social-item">
                        <a href="#" className="foooter__social-link">
                          <img src={Twitter} alt="" /></a>
                        </li>
                    </ul>
                  </li>
                 </ul>
              </div>
            </div>
            </div>
           <div className="footer__bottom">
            <p className="footer__copy">
                © Tealuxe, 2025
            </p>
            <ul className="partners-logo">
              <li className="partners-logo__item">
                <img src={Partners_1 } alt="" />
                </li>
              <li className="partners-logo__item">
                <img src={Partners_2} alt="" />
                </li>
              <li className="partners-logo__item">
                <img src={ Partners_3} alt="" />
                </li>
              <li className="partners-logo__item">
              <img src={Partners_4} alt="" />
                </li>
            </ul>
           </div>

        </div>
      </div>
    
  )
}

export default Main
