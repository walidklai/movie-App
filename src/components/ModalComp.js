import React, { useState } from 'react'
import Modal from 'react-modal'

function ModalComp(props) {
    const [nameMovie,setNameMovie]=useState('')
    const [lengthMovie,setLengthMovie]=useState('')
    const [descMovie,setDescMovie]=useState('')
    const [typeMovie,setTypeMovie]=useState('')
    const [ratingMovie,setRatingMovie]=useState('')
    const [picMovie,setPicMovie]=useState('')
    const handleChangeName=(e)=>{
        setNameMovie(e.target.value)
    }
    const handleChangeType=(e)=>{
        setTypeMovie(e.target.value)
    }
    const handleChangeLength=(e)=>{
        setLengthMovie(e.target.value)
    }
    const handleChangeRating=(e)=>{
        setRatingMovie(e.target.value)
    }
    const handleChangePic=(e)=>{
        setPicMovie(e.target.value)
    }
    const handleChangeDesc=(e)=>{
        setDescMovie(e.target.value)
    }
    const item={name:nameMovie,length:lengthMovie,type:typeMovie,rating:ratingMovie,pic:picMovie,description:descMovie}
    return (
        <div>
            <Modal isOpen={props.openModal} className='modal'>
                <input type='text' value={nameMovie} onChange={handleChangeName}/>
                <br/>
                <input type='number' value={lengthMovie} onChange={handleChangeLength}/>
                <br/>
                <input type='text' value={typeMovie} onChange={handleChangeType}/>
                <br/>
                <input type='text' value={ratingMovie} onChange={handleChangeRating}/>
                <br/>
                <input type='file' value={picMovie} onChange={handleChangePic}/>
                <br/>
                <textarea value={descMovie} onChange={handleChangeDesc}/>
                <br/>

                <button onClick={()=>props.setOpenModal(!props.openModal)}>Cancel</button>
                <button onClick={()=>props.addMovie(item)}>Save</button>
            </Modal>
        </div>
    )
}

export default ModalComp
