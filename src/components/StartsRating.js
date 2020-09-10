import React, { useState } from 'react'

function StartsRating(props) {
    const [rating, setRating] = useState(null)
    const fct = (ratingValue) => {
        if (!props.rating > null) {
            setRating(ratingValue)
            props.handleChangeRating(ratingValue)
        }
    }
    return (
        <div>
            {[...Array(5)].map((el, i) => {
                const ratingValue = i + 1
                return (
                    <label key={i}>
                        <input type='radio' name='star' value={ratingValue} onClick={() => fct(ratingValue)} />
                        <span className='star' style={{ color: ratingValue <= (props.rating? props.rating:rating )? 'red' : 'black' }}>☆</span>
                    </label>
                )
            })}
        </div>
    )
}

export default StartsRating
