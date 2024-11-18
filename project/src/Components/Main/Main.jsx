import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <div>
      <main className="main">
        <div className="top">
          <div className="container">
            <div className="top__inner">
              <h1 className="top__title">
                A cup of tea is a moment of colm in the chaos og life
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
      </main>
    </div>
  )
}

export default Main
