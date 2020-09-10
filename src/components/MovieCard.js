import React from 'react'
import '../App.css'
import StarRating from './StartsRating'

function MovieCard(props) {
    return (
        <div className='moviecard'>
            <img src={props.pic} width='100%' height='45%'style={{borderRadius:'25px 25px 0px 0px'}}/>
            <h2 style={{color:'orange'}}>Name : {props.name}</h2>
            <h4 style={{color:'orange'}}><StarRating/></h4>
            <h4 style={{color:'orange'}}>Minutes : {props.length}</h4>
            <h4 style={{color:'orange'}}>type : {props.type}</h4>
            <hr/>
            <p style={{color:'orange',wordWrap:'break-word'}}>{props.description}</p>
        </div>
    )
}

export default MovieCard
