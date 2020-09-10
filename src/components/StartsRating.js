import React, { useState } from 'react'

function StartsRating() {
    const [rating, setRating] = useState(null)
    return (
        <div>
            {[...Array(5)].map((el, i) => {
                const ratingValue = i + 1
                return (
                    <label>
                        <input type='radio' name='star' value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <span className='star' style={{color:ratingValue<=rating? 'red':'black'}}>☆</span>
                    </label>
                )
            })}
        </div>
    )
}

export default StartsRating
