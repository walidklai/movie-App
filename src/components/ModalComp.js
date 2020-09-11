import React, { useState } from 'react'
import Modal from 'react-modal'
import StartsRating from './StartsRating'

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
    const handleChangeRating=(val)=>{
        setRatingMovie(val)
    }
    const handleChangePic=(e)=>{
        setPicMovie(e.target.value)
    }
    const handleChangeDesc=(e)=>{
        setDescMovie(e.target.value)
    }
    const item={id:Math.random()*10000,name:nameMovie,length:lengthMovie,type:typeMovie,rating:ratingMovie,pic:picMovie,description:descMovie}
    const saveModal=(item)=>{
        props.addMovie(item)
        setPicMovie('')
    }
    Modal.setAppElement('#root')
    return (
        <div>
            <Modal isOpen={props.openModal} className='modal'>
                <h1 style={{color :'white'}}>Add a New Movie !</h1>
                <input type='text' placeholder='Movie name' value={nameMovie} onChange={handleChangeName}/>
                <br/>
                <input type='number' placeholder='Movie length' value={lengthMovie} onChange={handleChangeLength}/>
                <br/>
                <input type='text' placeholder='Movie type' value={typeMovie} onChange={handleChangeType}/>
                <br/>
                <label style={{color:'orangered'}}>Rate the movie</label>
                <StartsRating handleChangeRating={handleChangeRating} openModal={props.openModal}/>
                <br/>
                <input type='file' value={picMovie} onChange={handleChangePic}/>
                <br/>
                <textarea placeholder='Description' value={descMovie} onChange={handleChangeDesc}/>
                <br/>

                <button onClick={()=>props.setOpenModal(!props.openModal)}>Cancel</button>
                <button onClick={()=>saveModal(item)}>Save</button>
            </Modal>
        </div>
    )
}

export default ModalComp
