import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((item, index) => {
      //return <MovieCard {...item}/>
      return <MovieCard key = {index} title = {item.title} IMDBRating = {item.IMDBRating} genres = {item.genres} poster = {item.poster} />
      //why does key = {index} need to be present to stop error in dev tools?
      })
    }
  

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

