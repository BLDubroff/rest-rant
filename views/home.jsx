const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-rant</h1>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
                <div>
                  <img id='raspberry-cake' src="/images/raspberry-cake.jpg" alt="Raspberry Cake"/>
                  <div>
                  Photo by <a href="https://unsplash.com/@anna_tukhfatullina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Tukhfatullina Food Photographer/Stylist</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </div>
                </div>

          </main>
      </Def>
    )
  }
  

module.exports = home
