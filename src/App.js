import React, { useState } from 'react'
import MovieList from './components/MovieList'
import ModalComp from './components/ModalComp'
import SearchMovie from './components/SearchMovie'
import StarsRaring from './components/StartsRating'
function App() {
  const [movieData, setMovieData] = useState([
    { id: Math.random() * 10000, name: 'Batman', length: 125, description: 'aiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaoj', type: 'action', rating: 4, pic: 'https://source.unsplash.com/random' },
    { id: Math.random() * 10000, name: 'Hitman', length: 125, description: 'aiejapejapoe apeojapzoejaoj', type: 'action', rating: 5, pic: 'https://source.unsplash.com/random' },
    { id: Math.random() * 10000, name: 'Bad boys', length: 125, description: 'aiejapejapoe apeojapzoejaoj', type: 'comedy', rating: 3, pic: 'https://source.unsplash.com/random' },
    { id: Math.random() * 10000, name: 'The Revenant', length: 125, description: 'aiejapejapoe apeojapzoejaoj', type: 'drama', rating: 2, pic: 'https://source.unsplash.com/random' },
    { id: Math.random() * 10000, name: 'Batman', length: 125, description: 'aiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaoj', type: 'action', rating: 4, pic: 'https://source.unsplash.com/random' },
    { id: Math.random() * 10000, name: 'Batman', length: 125, description: 'aiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaojaiejapejapoe apeojapzoejaoj', type: 'action', rating: 4, pic: 'https://source.unsplash.com/random' },
    { id: Math.random() * 10000, name: 'Bad boys', length: 125, description: 'aiejapejapoe apeojapzoejaoj', type: 'comedy', rating: 3, pic: 'https://source.unsplash.com/random' },
    { id: Math.random() * 10000, name: 'Bad boys', length: 125, description: 'aiejapejapoe apeojapzoejaoj', type: 'comedy', rating: 3, pic: 'https://source.unsplash.com/random' }
  ])
  const [tmpTab, setTmpTab] = useState(movieData)
  const [openModal, setOpenModal] = useState(false)
  console.log(openModal)
  const handleSearch = (newSearch) => {
    setMovieData(tmpTab.filter(el => el.name.toUpperCase().includes(newSearch.replace(/\s+/g, " ").toUpperCase().trim())))
  }
  const handleSearchStars = (newSearch) => {
    setMovieData(tmpTab.filter(el => el.rating === newSearch))
  }
  const addMovie = (newMovie) => {
    console.log('added', newMovie)
    console.log(movieData)
    if (newMovie.name && newMovie.pic && newMovie.type && newMovie.length && newMovie.rating) {
      setMovieData([...movieData, newMovie])
      setTmpTab([...movieData, newMovie])
      setOpenModal(false)
    }
  }
  console.log(movieData)
  console.log(tmpTab)
  return (
    <div className='movielist'>
      <div style={{ position: 'fixed', width: '100%' }}>
        <h1 style={{ textAlign: 'center', color: 'orangered' }}>Movies</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button className='plus' onClick={() => setOpenModal(true)}>+</button>
          <ModalComp className='modalcomp' openModal={openModal} setOpenModal={setOpenModal} addMovie={addMovie} />
          <div>
            <SearchMovie handleSearch={handleSearch} />
            <StarsRaring handleSearchStars={handleSearchStars} />
          </div>
        </div>
        <hr />
      </div>
      <MovieList movieData={movieData} />
    </div>
  )
}

export default App
