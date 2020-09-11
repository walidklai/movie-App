import React, { useState } from 'react'

function StartsRating(props) {
    const [rating, setRating] = useState(null)
    const [hover,setHover]=useState(null)
    const fct = (ratingValue) => {
        if ((!props.rating > null)&&props.openModal) {
            setRating(ratingValue)
            props.handleChangeRating(ratingValue)
        }
        else if((!props.rating > null)&&!props.openModal)
        props.handleSearchStars(ratingValue)
    }
    return (
        <div>
            {[...Array(5)].map((el, i) => {
                const ratingValue = i + 1
                return (
                    <label key={i}>
                        <input type='radio' name='star' value={ratingValue} onClick={() => fct(ratingValue)} />
                        <span className='star' style={{ color: ratingValue <= (props.rating? props.rating:(hover || rating) )? 'red' : 'black' }} onMouseEnter={()=>setHover(ratingValue)} onMouseLeave={()=>setHover(null)}>☆</span>
                    </label>
                )
            })}
        </div>
    )
}

export default StartsRating
