const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img id='code-404' src="/images/code-404.jpg" alt="404 Error"/>
                  <div>
                  Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/backgrounds/apps/website?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </div>
                </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
