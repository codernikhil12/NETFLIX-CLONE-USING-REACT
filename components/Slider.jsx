import React from 'react'
import CardSlider from './CardSlider'

export default React.memo( function Slider({movies}) {

    const getMoviesFromRange=(from,to) =>{
         return movies.slice(from,to)
    }
  return (
    <div>
        <CardSlider title = "Trending Now" data={getMoviesFromRange(0, 10)} />
        <CardSlider title = "New Releases" data={getMoviesFromRange(10, 20)} />
        <CardSlider title = "Tollywood Movies" data={getMoviesFromRange(20, 30)} />
        <CardSlider title = "Bollywood Movies" data={getMoviesFromRange(30, 40)} />
        <CardSlider title = "Hollywood Movies" data={getMoviesFromRange(40, 50)} />
        <CardSlider title = "Popular of Netflix" data={getMoviesFromRange(50, 60)} />
    </div>
  )
});
