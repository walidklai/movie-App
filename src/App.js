import React, { useState } from 'react'
import MovieList from './components/MovieList'
import ModalComp from './components/ModalComp'
import SearchMovie from './components/SearchMovie'
import StarsRaring from './components/StartsRating'
function App() {
  const [movieData, setMovieData] = useState([
    { id: 1, name: 'Batman', length: 125, description: 'aiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaoj', type: 'action', rating: 4, pic: 'https://source.unsplash.com/random' },
    { id: 1, name: 'Hitman', length: 125, description: 'aiejapejapoe apeojapzoejaoj', type: 'action', rating: 5, pic: 'https://source.unsplash.com/random' },
    { id: 1, name: 'Bad boys', length: 125, description: 'aiejapejapoe apeojapzoejaoj', type: 'comedy', rating: 3, pic: 'https://source.unsplash.com/random' },
    { id: 1, name: 'The Revenant', length: 125, description: 'aiejapejapoe apeojapzoejaoj', type: 'drama', rating: 2, pic: 'https://source.unsplash.com/random' },
    { id: 1, name: 'Batman', length: 125, description: 'aiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaoj', type: 'action', rating: 4, pic: 'https://source.unsplash.com/random' },
    { id: 1, name: 'Batman', length: 125, description: 'aiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaoj', type: 'action', rating: 4, pic: 'https://source.unsplash.com/random' }
  ])
  const [tmpTab, setTmpTab] = useState(movieData)
  const [openModal, setOpenModal] = useState(false)

  const handleSearch = (newSearch) => {
    console.log(newSearch)
    if (newSearch.trim() === '') {
      console.log(false)
      setMovieData(tmpTab)
    }
    else {
      console.log(true)
      setMovieData(movieData.filter(el => el.name.toUpperCase().includes(newSearch.toUpperCase().trim())))
    }
  }
  const addMovie = (newMovie) => {
    console.log('added', newMovie)
    if (newMovie.name && newMovie.name && newMovie.pic && newMovie.type && newMovie.length && newMovie.rating) {
      setMovieData([...movieData, newMovie])
      setTmpTab(movieData)
      setOpenModal(!openModal)
    }
  }
  return (
    <div className='movielist'>
      <div style={{ position: 'fixed', width: '100%' }}>
        <h1 style={{ textAlign: 'center', color: 'orangered'}}>Movies</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button className='plus' style={{ color: 'orangered', width: '400px', height: '50px', fontSize: '50px', lineHeight: '18px', border: '1px solid orangered' }} onClick={() => setOpenModal(true)}>+</button>
          <ModalComp className='modalcomp' openModal={openModal} setOpenModal={setOpenModal} addMovie={addMovie} />
          <SearchMovie handleSearch={handleSearch} />
        </div>
        <hr />
      </div>
      <MovieList movieData={movieData} />
    </div>
  )
  /*return (
    <div>
      <StarsRaring/>
    </div>
  )*/
}

export default App
