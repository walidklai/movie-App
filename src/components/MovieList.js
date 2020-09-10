import React, { useState } from 'react'
import MovieCard from './MovieCard'

function MovieList(props) {
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {props.movieData.map(el=><MovieCard key={el.id} {...el}/>)}
        </div>
    )
}

export default MovieList
