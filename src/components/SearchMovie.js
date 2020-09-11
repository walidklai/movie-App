import React, { useState } from 'react'
import StarsRating from './StartsRating'

function SearchMovie(props) {
    const [searchValue,setSearchValue]=useState('')
    const handleChange=(e)=>{
        setSearchValue(e.target.value)//this fct is causing a delay
        console.log(e.target.value)
        props.handleSearch(e.target.value)
    }
    return (
            <div style={{ marginTop: '14px' }}>
                <input className='search' type='text' placeholder='Search a Movie' value={searchValue} onChange={handleChange} style={{ color: 'orangered' }}/>
            </div>
    )
}

export default SearchMovie
