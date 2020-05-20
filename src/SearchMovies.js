import React from 'react'

const SearchMovies = () => {
  return (
    <div>
      <form className='form'>
        <label htmlFor='query' className='label'>Movie Name</label>
        <input type='text' name='query' placeholder='Type in a movie' />
        <button className='button' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchMovies
