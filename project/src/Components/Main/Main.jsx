import React from 'react'
import './Main.css'
import '../../index.css'


import Black from '../../Images/black.png'
import Green from '../../Images/green.png'
import White from '../../Images/white.png'
import Oolong from '../../Images/oolong.png'
import Puerh from '../../Images/pu-erh.png'
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
      </main>
    </div>
  )
}

export default Main
