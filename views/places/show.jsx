const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
                <h2>Ratings</h2>
                <h3>Not yet rated</h3>
            </div>
            <div>
                <h2>Description</h2>
                <h3>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h3>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
